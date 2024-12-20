import express, { Application } from "express";
import dotenv from "dotenv";
import { initializePassport } from "./config/auth";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/favoritesRoutes";
import recipeRoutes from "./routes/recipeRoutes";
import blogRoutes from "./routes/blogPostRoutes";
import commentRoutes from "./routes/commentRoutes";
import { connectDB } from "./config/db";
import { corsMiddleware } from "./middleware/cors";
import { sessionMiddleware } from "./middleware/sessionMiddleware";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

// cors fix
app.use(corsMiddleware);

// Session middleware
app.use(sessionMiddleware);

// Initialize passport and session
initializePassport(app);

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/api", recipeRoutes);
app.use("/blog", blogRoutes);
app.use("/comments", commentRoutes);

// Connecting to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });

export default app;
