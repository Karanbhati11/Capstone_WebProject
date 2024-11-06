import { Router } from "express";
import { googleAuth } from "../controllers/auth/google/googleAuth";
import { googleCallback } from "../controllers/auth/google/googleCallback";
import { handleGoogleCallback } from "../controllers/auth/google/handleGoogleCallback";
import { facebookAuth } from "../controllers/auth/facebook/facebookAuth";
import { facebookCallback } from "../controllers/auth/facebook/facebookCallback";
import { signup } from "../controllers/auth/signup/signup";
import { login } from "../controllers/auth/login/login";
import { logout } from "../controllers/auth/logout/logout";
import { getCurrentUser } from "../controllers/auth/getCurrentUser";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// Google OAuth routes
router.get("/google", googleAuth);
router.get("/google/callback", googleCallback, handleGoogleCallback);

// Facebook OAuth routes
router.get("/facebook", facebookAuth);
router.get("/facebook/callback", facebookCallback);

// Email signup and login
router.post("/signup", signup);
router.post("/login", login);

// Logout and current user
router.get("/logout", logout);
router.get("/current-user", authMiddleware, getCurrentUser);

export default router;
