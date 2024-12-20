import handleGoogleLogin from "@/actions/handleGoogleLogin";
import registerUser from "@/actions/registerUser";
import Form from "@/Components/Form";
import React from "react";

export default function SignUp() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url("/images/signup.png")` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-2">Welcome</h1>
          <p className="text-2xl">Discover Delicious Recipe</p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Sign Up
          </h2>

          <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full mb-4 p-3 text-black border border-gray-300 rounded-lg hover:bg-gray-100">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.1 0 5.9 1.1 8.1 3.3L37 8.9C33.8 5.9 29.3 4 24 4 14.6 4 7 11.6 7 21s7.6 17 17 17c8.2 0 14.8-5.6 16.5-13h-16v-6h27v5c-1.6 7.5-8.4 13-16.5 13-9.4 0-17-7.6-17-17S14.6 9.5 24 9.5z"
              />
            </svg>
            Sign up with Google
          </button>

          <div className="flex items-center mb-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button className="flex items-center justify-center w-full mb-6 p-3 text-white bg-green-500 rounded-lg hover:bg-green-600">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12l8-5H4l8 5zm0 2l-8-5v8h16v-8l-8 5z" />
            </svg>
            Sign up with Email
          </button>

          <Form action={registerUser} successMsg="User Registered Successfully!">
            <div className="flex gap-4 mb-4">
              <div className="w-full">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                placeholder="Example.email@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter at least 8 characters"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              Create an account
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
