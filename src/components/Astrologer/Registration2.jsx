"use client"
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ProgressBar from "./Progressbar";

const RegistrationForm = () => {
  const [step, setStep] = useState(1); // Current step
  const [otpTimer, setOtpTimer] = useState(30); // Timer for resend button
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    whatsapp: "",
    otp: "",
  }); // Centralized form data state

  // Handle "Next" Button
  const handleNext = (values) => {
    setFormData({ ...formData, ...values });
    setStep(step + 1);
  };

  // Resend OTP Logic
  const handleResendOTP = () => {
    setOtpTimer(30); // Reset timer
    // Resend OTP logic here
    console.log("OTP Resent");
  };

  React.useEffect(() => {
    let timer;
    if (otpTimer > 0) {
      timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpTimer]);

  // Validation Schemas
  const stepSchemas = [
    Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Must be a 10-digit number")
        .required("Mobile number is required"),
      whatsapp: Yup.string()
        .matches(/^\d{10}$/, "Must be a 10-digit number")
        .required("WhatsApp number is required"),
    }),
    Yup.object({
      otp: Yup.string()
        .matches(/^\d{6}$/, "OTP must be 6 digits")
        .required("OTP is required"),
    }),
  ];

  // Steps Content
  const steps = [
    {
      title: "Step 1: Personal Details",
      component: (
        <div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <Field
              name="fullName"
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your full name"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <Field
              name="email"
              type="email"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <Field
              name="mobile"
              type="text"
              maxLength="10"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your mobile number"
            />
            <ErrorMessage
              name="mobile"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              WhatsApp Number<span className="text-red-500">*</span>
            </label>
            <Field
              name="whatsapp"
              type="text"
              maxLength="10"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your WhatsApp number"
            />
            <ErrorMessage
              name="whatsapp"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Step 2: OTP Verification",
      component: (
        <div>
          <p className="text-center text-gray-600">
            OTP sent to <span className="font-bold">+91{formData.mobile}</span>
          </p>
          <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Enter OTP<span className="text-red-500">*</span>
            </label>
            <Field
              name="otp"
              type="text"
              maxLength="6"
              className="w-full border rounded-lg px-4 py-2 text-center"
              placeholder="Enter 6-digit OTP"
            />
            <ErrorMessage
              name="otp"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              disabled={otpTimer > 0}
              onClick={handleResendOTP}
              className={`px-4 py-2 rounded ${
                otpTimer > 0
                  ? "bg-gray-300 text-gray-500"
                  : "bg-blue-500 text-white"
              }`}
            >
              Resend OTP
            </button>
            <p className="text-sm text-gray-700">
              {otpTimer > 0 ? `Resend in ${otpTimer}s` : "Ready to resend"}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900 px-4 py-6">
      <ProgressBar step={step} totalSteps={steps.length} />
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          {steps[step - 1].title}
        </h2>
        <Formik
          initialValues={formData}
          validationSchema={stepSchemas[step - 1]}
          onSubmit={handleNext}
        >
          {() => (
            <Form>
              {steps[step - 1].component}
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                >
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
