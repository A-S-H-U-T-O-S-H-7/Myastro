import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const OtpVerification = ({ mobile, onNext }) => {
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [otpTimer, setOtpTimer] = useState(30); // Timer for resend button

  // Countdown timer effect
  useEffect(() => {
    if (isResendDisabled) {
      const timer = setInterval(() => {
        setOtpTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsResendDisabled(false); // Enable resend button
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isResendDisabled]);

  const handleResendOTP = () => {
    setIsResendDisabled(true);
    setOtpTimer(30);
    // Simulate OTP resend logic here
    console.log("OTP resent to +91" + mobile);
  };

  const initialValues = {
    otp: "",
  };

  const validationSchema = Yup.object({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be a 6-digit number")
      .required("OTP is required"),
  });

  const handleSubmit = (values) => {
    console.log("OTP Verified:", values.otp);
    onNext(); // Proceed to the next step
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900 px-4 py-6">
      {/* Header */}
      <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
        OTP VERIFICATION
      </h2>

      {/* OTP Sent Message */}
      <p className="text-gray-700 text-center mb-2">
        OTP sent to{" "}
        <span className="font-semibold text-green-600">
          +91{mobile || "your number"}
        </span>
      </p>

      {/* Formik Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
            {/* OTP Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                OTP<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="otp"
                maxLength="6"
                placeholder="Enter 6-digit OTP"
                className="w-full border rounded-lg px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <ErrorMessage
                name="otp"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Resend OTP Button */}
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={isResendDisabled}
                className={`px-4 py-2 rounded ${
                  isResendDisabled
                    ? "bg-gray-400 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Resend OTP
              </button>
              <p className="text-gray-700 font-semibold">
                {isResendDisabled ? `Resend in ${otpTimer}s` : "Ready to resend"}
              </p>
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#9b57ed] hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OtpVerification;
