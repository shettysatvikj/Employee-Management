import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [role, setRole] = useState("employee"); // "employee" or "admin"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password, role);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen bg-[#0c0f14] flex items-center justify-center">

      <div className="bg-[#161a21] border border-[#232831] shadow-xl rounded-2xl p-10 w-[90%] max-w-md">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h1>

        {/* Role Switch */}
        <div className="flex bg-[#1f242d] p-1 rounded-xl mb-8">
          <button
            onClick={() => setRole("employee")}
            className={`flex-1 py-2 rounded-lg text-lg font-semibold transition-all ${
              role === "employee"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-400"
            }`}
          >
            Employee
          </button>

          <button
            onClick={() => setRole("admin")}
            className={`flex-1 py-2 rounded-lg text-lg font-semibold transition-all ${
              role === "admin"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-400"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="flex flex-col gap-6">

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              {role === "admin" ? "Admin Email" : "Employee Email"}
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-5 py-3 bg-[#0f1217] text-white border border-[#2c323b] rounded-lg 
              placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
              type="email"
              placeholder="you@company.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-5 py-3 bg-[#0f1217] text-white border border-[#2c323b] rounded-lg 
              placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 rounded-lg 
            active:scale-95 transition-all shadow-md shadow-blue-600/20"
          >
            Log In
          </button>

        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          {role === "admin" ? "Admin Access Portal" : "Employee Access Portal"}
        </p>

      </div>
    </div>
  );
};

export default Login;
