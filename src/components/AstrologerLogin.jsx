"use client";

import React, { useState, useEffect, useRef } from "react";
import ENV from "./Env";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/slices/astrologerSlice";
import { useRouter } from "next/navigation";

export default function AstrologerLogin() {
  const [isOtpPage, setIsOtpPage] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [mobile, setMobile] = useState(null);
  const [loader, setLoader] = useState(false)
  const dispatch = useDispatch();
  const { isAstrologerAuthenticated, astrologerDetails, astrologerToken } = useSelector((state) => state.astrologer);
  const router = useRouter();
  const otpRefs = Array(6)
    .fill(null)
    .map(() => useRef());
  const [errorMessage, setErrorMessage] = useState("")
  useEffect(() => {
    if (isAstrologerAuthenticated) {
      router.push("/astrologer/dashboard");
    }
    if (isOtpPage && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setIsResendEnabled(true);
    }
  }, [timer, isOtpPage]);

  const handleOtpInput = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      e.target.value = value;
      if (index < otpRefs.length - 1) {
        otpRefs[index + 1].current.focus();
      }
    } else {
      e.target.value = "";
    }
  };
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      otpRefs[index - 1].current.focus();
    }
  };

  // const handleEnterKey = (e) => {
  //   if (e.key === "Enter") {
  //     alert("OTP Verified!");
  //   }
  // };
  const handleGetOtp = async (e) => {
    if (/^\d{10}$/.test(mobile)) {
      try {
        setLoader(true);
        setErrorMessage("");
        const response = await fetch(`${ENV.API_URL}/astrologer-otp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "mobile": mobile
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setLoader(false);
          setIsOtpPage(true);
          setTimer(60);
          setIsResendEnabled(false);
        } else {
          setErrorMessage(result.error || "Something went wrong.");
          setLoader(false);
        }
      } catch (error) {
        setErrorMessage("Error submitting data." + error.message);
        setLoader(false);
      }
    }
    else {
      setErrorMessage("Please enter a valid mobile number");
    }
  }
  const handleVerifyOtp = async () => {

    const otpValues = otpRefs.map((ref) => ref.current?.value || '');
    try {
      setLoader(true);
      setErrorMessage("");
      const response = await fetch(`${ENV.API_URL}/astrologer-otp-verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "mobile": mobile,
          "otp": Number(otpValues.join(''))
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setLoader(false);
        setErrorMessage("")
        dispatch(login({ astrologer: { ...result.astrologer }, token: result.token }))
        router.push("/astrologer/dashboard");
      } else {
        setErrorMessage(result.error || "Something went wrong.");
        setLoader(false);
      }
    } catch (e) {
      setErrorMessage(e.message || "Something went wrong.");
      setLoader(false);
    }
  };
  const handleResendOtp = async () => {
    if (/^\d{10}$/.test(mobile)) {
      try {
        setErrorMessage("");
        setIsResendEnabled(true);
        const response = await fetch(`${ENV.API_URL}/astrologer-otp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "mobile": mobile
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setTimer(60);
          setIsResendEnabled(false);
        } else {
          setErrorMessage(result.error || "Something went wrong.");
          setIsResendEnabled(false);
        }
      } catch (error) {
        setErrorMessage("Error submitting data." + error.message);
        setIsResendEnabled(false);
      }
    }
    else {
      setErrorMessage("Please enter a valid mobile number");
    }
  }

  console.log(astrologerToken)
  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl bg-white rounded-[10px] shadow-2xl flex overflow-hidden border-4 border-purple-400">
        {/* Left Side Welcome Image */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center border-r-4 border-purple-500"
          style={{
            backgroundImage: `url('/login.webp')`,
          }}
          alt="Welcome Image"
        ></div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 p-8 relative">
          {/* Decorative Border Design */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full transform translate-x-[-50%] translate-y-[-50%]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full transform translate-x-[50%] translate-y-[50%]"></div>

          {!isOtpPage ? (
            // Login Page
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Astrologer Login
              </h1>
              <p className="text-gray-600 mb-4 text-center">
                You will receive a 6-digit code for verification.
              </p>
              <label
                htmlFor="phone"
                className="block text-gray-600 mb-2 font-medium"
              >
                Enter your phone number
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 shadow-md">
                <span className="text-gray-500 font-medium">+91</span>
                <input
                  type="text"
                  id="phone"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => { setMobile(e.target.value); }}
                  placeholder="Enter phone number"
                  className="ml-2 flex-grow outline-none text-gray-700"
                />
              </div>
              {errorMessage && <span className="text-red-600  text-sm font-thin">{errorMessage}</span>}
              <button
                onClick={() => {
                  handleGetOtp();
                }}
                disabled={loader}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded shadow-lg hover:shadow-xl hover:from-purple-500 hover:to-blue-500 transition"
              >
                {loader ? (<BeatLoader color="#fff" />) : ("Get OTP")}
              </button>
              <p className="text-gray-500 mt-6 text-center text-sm">
                By signing in, you agree to our{" "}
                <a href="/terms" className="text-blue-500 underline">
                  terms and conditions
                </a>.
              </p>
              <p className="text-gray-500 mt-2 text-center text-sm">
                Don’t have an account?{" "}
                <a href="/signup" className="text-purple-500 underline">
                  Sign Up
                </a>
              </p>
            </>
          ) : (
            // OTP Input Page
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Verify OTP
              </h1>
              <p className="text-gray-600 mb-4 text-center">
                Enter the 6-digit OTP sent to your phone number.
              </p>
              <div className="flex justify-between gap-2 mb-4">
                {otpRefs.map((ref, index) => (
                  <input
                    key={index}
                    ref={ref}
                    type="text"
                    maxLength="1"
                    className="w-8 h-8 lg:w-12 lg:h-12 border-2 border-indigo-400 text-center rounded text-gray-700 shadow focus:outline-none focus:border-purple-500"
                    onInput={(e) => handleOtpInput(e, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    onKeyUp={handleEnterKey}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>
                  Resend OTP in{" "}
                  <span className="text-gray-700 font-medium">{timer}s</span>
                </span>
                <button
                  onClick={() => {
                    handleResendOtp();
                  }}
                  disabled={!isResendEnabled}
                  className={`${isResendEnabled
                    ? "text-blue-500"
                    : "text-gray-300 cursor-not-allowed"
                    } font-medium`}
                >
                  Resend OTP
                </button>
              </div>
              {isOtpPage && errorMessage && <span className="text-red-600  text-sm font-thin">{errorMessage}</span>}
              <button
                onClick={handleVerifyOtp}
                disabled={loader}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded shadow-lg hover:shadow-xl hover:from-purple-500 hover:to-blue-500 transition"
              >
                {loader && isOtpPage ? (<BeatLoader color="#fff" />) : ("Verify OTP")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
