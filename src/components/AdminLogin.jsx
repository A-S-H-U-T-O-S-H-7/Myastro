
import React from 'react';

function AdminLogin() {
  return (
    <div className="min-h-screen px-[10px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full max-w-md px-6 py-8 bg-gray-900 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-500 mb-2">Myastro</h1>
          <p className="text-gray-400 text-sm">
            Enter your email and password to login
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-md focus:outline-none  "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
