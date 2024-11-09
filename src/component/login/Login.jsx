import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://my-protfolio-server.onrender.com/login",
        { email, password }
      );
      alert("Login successful");
    } catch (error) {
      alert(error.response ? error.response.data : "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">
          Login
        </h2>

        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer text-black"
          />
        </div>

        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
