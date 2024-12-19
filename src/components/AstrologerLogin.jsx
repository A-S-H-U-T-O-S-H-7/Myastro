"use client"
import { useState } from "react";

export default function AstrologerLogin() {
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen px-[10px]  flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600">
      <div className="bg-white border border-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-purple-500 mb-4">
          Astrologer Login
        </h1>
        <p className="text-center text-gray-600 mb-6">
          You will receive a 6 digit code for verification
        </p>

        <form className="space-y-6">
          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter your phone number
            </label>
            <div className="flex items-center space-x-2">
              <span className="px-4 py-2 bg-gray-100 border rounded-l-md">
                +91
              </span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="flex-1 px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-500 text-white font-semibold rounded-md shadow-md transform transition-transform hover:scale-105"
          >
            Get OTP
          </button>

          {/* Terms and Conditions */}
          <p className="text-sm text-gray-600 text-center">
            By signing in, you agree to our{" "}
            <a href="#" className="text-purple-500 underline">
              terms and conditions
            </a>
          </p>
        </form>

        {/* Sign Up */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <p className="text-purple-500 underline">
            Sign Up
          </p>
        </p>
      </div>
    </div>
  );
}
