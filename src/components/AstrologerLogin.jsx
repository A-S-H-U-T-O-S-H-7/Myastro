"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showlodaer, loginSuccess, hidelodaer } from "@/redux/slices/userSlice";

export default function AstrologerLogin() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const [step, setStep] = useState("login");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (step === "verify" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, timeLeft]);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/\D/g, "");
    if (value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleGetOtp = async (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      try {
        dispatch(showlodaer());
        // Mock OTP sent logic
        setStep("verify");
        setTimeLeft(60);
        dispatch(hidelodaer());
      } catch (error) {
        setError("Error requesting OTP. " + error.message);
        dispatch(hidelodaer());
      }
    } else {
      setError("Please enter a valid 10-digit phone number.");
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    try {
      dispatch(showlodaer());
      const response = await fetch("https://astrosearch.in/astrologer-otp-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          mobile: phone,
          otp: Number(otp.join("")),
        }),
      });
      const result = await response.json();

      if (response.ok) {
        const astrologerResponse = await fetch("https://astrosearch.in/astrologer/getastrologer", {
          method: "GET",
          headers: { Token: result.token },
        });
        const astrologerData = await astrologerResponse.json();

        if (astrologerResponse.ok) {
          dispatch(loginSuccess({ astrologer: astrologerData }));
          setStep("login");
        } else {
          setError(astrologerData.error || "Failed to fetch astrologer details.");
        }
        dispatch(hidelodaer());
      } else {
        setError(result.error || "Invalid OTP.");
        dispatch(hidelodaer());
      }
    } catch (error) {
      setError("Error verifying OTP. " + error.message);
      dispatch(hidelodaer());
    }
  };

  return (
    <div className="min-h-screen px-[10px] flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600">
      <div className="bg-white border border-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-purple-500 mb-4">
          Astrologer Login
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {step === "login"
            ? "You will receive a 6-digit OTP for verification."
            : `OTP sent to +91 ${phone}`}
        </p>

        {step === "login" ? (
          <form className="space-y-6" onSubmit={handleGetOtp}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Enter your phone number
              </label>
              <div className="flex items-center space-x-2">
                <span className="px-4 py-2 bg-gray-100 border rounded-l-md">+91</span>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Phone Number"
                  className="flex-1 px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-500 text-white font-semibold rounded-md shadow-md transform transition-transform hover:scale-105"
            >
              {loading ? "Loading..." : "Get OTP"}
            </button>
          </form>
        ) : (
          <div>
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
                  className="w-10 h-12 border rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>
            <button
              onClick={handleSubmitOtp}
              className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-500 text-white font-semibold rounded-md shadow-md transform transition-transform hover:scale-105 mt-6"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        )}
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </div>
  );
}
