import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [id, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("id:", id, "Password:", password);
    logincheck();
  };
  const logincheck = async () => {
  
    const response = await fetch(
      ' https://4aae-2401-4900-8835-bdd0-3c69-1240-d362-61ee.ngrok-free.app/login',
      {
        method: 'POST', // Use uppercase for HTTP methods
        headers: {
          'Content-Type': 'application/json', // Set content type for JSON payload
          'ngrok-skip-browser-warning': 'true', // Bypass ngrok browser warning
        },
        body: JSON.stringify({
          id: id, // Replace with your variable holding the id
          password: password, // Replace with your variable holding the password
        }),
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.text(); // Use `.json()` for JSON responses
    console.log('Fetched data:', data);
    if(data == "ok"){
      navigate("/admin")
    }
    else{
      navigate("/error")
    }
    return data;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="bg-gradient-to-tr from-yellow-400 to-red-500 opacity-40 w-72 h-72 rounded-full absolute animate-pulse -top-10 -left-10"></div>
        <div className="bg-gradient-to-tr from-green-400 to-blue-500 opacity-40 w-96 h-96 rounded-full absolute animate-bounce-slow -bottom-10 -right-20"></div>
      </div>

      {/* Login Form */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="email"
              className="text-gray-500 text-sm font-medium absolute top-2 left-3 transform scale-75 transition-transform origin-left"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={id}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="text-gray-500 text-sm font-medium absolute top-2 left-3 transform scale-75 transition-transform origin-left"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-2 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to={"#"} className="text-purple-500 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
