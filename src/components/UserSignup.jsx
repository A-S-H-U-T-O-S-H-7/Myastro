"use client";

import React, { useState, useEffect } from "react";

const UserSignup = () => {
  const [showPopup, setShowPopup] = useState(true); // Toggle popup visibility
  const [step, setStep] = useState("login"); // Step state: 'login' or 'verify'
  const [timeLeft, setTimeLeft] = useState(60); // Timer state for OTP resend
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number
  const [otp, setOtp] = useState(new Array(6).fill("")); // State for OTP

  // Handle closing the popup
  const closePopup = () => setShowPopup(false);

  // Handle OTP button click
  const handleGetOtp = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setStep("verify");
      setTimeLeft(60); // Reset timer for resend
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  // Handle timer countdown
  useEffect(() => {
    if (step === "verify" && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [step, timeLeft]);

  // Handle phone number input change
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  // Handle OTP input change
  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      // Move focus to the next input
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Handle backspace in OTP
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          {/* Popup container */}
          <div className="relative bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 text-xl focus:outline-none"
              aria-label="Close"
              onClick={closePopup}
            >
              ✕
            </button>

            {/* Header */}
            <h1 className="text-2xl font-bold text-center text-[#542875] mb-2">
              {step === "login" ? "Login" : "Let's Verify"}
            </h1>
            {step === "verify" && (
              <p className="text-green-600 text-center text-sm mb-6">
                OTP successfully sent to +91 {phoneNumber}
              </p>
            )}

            {/* Form */}
            {step === "login" ? (
              <form onSubmit={handleGetOtp}>
                <label
                  htmlFor="number"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Enter your number
                </label>

                {/* Input with fixed +91 */}
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-10">
                  <span className="px-3 py-2 bg-gray-100 text-gray-600 font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="number"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter your mobile number"
                    className="flex-1 px-3 py-2 focus:outline-none "
                    required
                  />
                </div>

                {/* GET OTP Button */}
                <button
                  type="submit"
                  className="w-full bg-[#9b57ed] text-white py-2 rounded-md text-lg font-medium hover:bg-[#723fb1] transition"
                >
                  GET OTP
                </button>
              </form>
            ) : (
              <div>
                <p className="text-gray-700 text-sm mb-4">
                  Please enter the 6-digit OTP sent to your number.
                </p>

                {/* OTP Input */}
                <div className="flex justify-between mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      id={`otp-${index}`}
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      maxLength={1}
                      className="w-10 h-12 border rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ))}
                </div>

                {/* Resend Timer */}
                {timeLeft > 0 ? (
                  <p className="text-sm text-gray-500">
                    Resend OTP in {timeLeft} seconds.
                  </p>
                ) : (
                  <button
                    onClick={() => setTimeLeft(60)} // Resend OTP
                    className="text-indigo-600 text-sm font-medium hover:underline"
                  >
                    Resend OTP
                  </button>
                )}

                {/* Verify Button */}
                <button
                  type="button"
                  className="w-full bg-[#9b57ed] text-white py-2 rounded-md text-lg font-medium hover:bg-[#6c3aa9] transition mt-10"
                >
                  Verify
                </button>
              </div>
            )}

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-4">
              By Signing up, you agree to our{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserSignup;
