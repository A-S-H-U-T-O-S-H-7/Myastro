"use client"; // For Next.js 13+ with App Router
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaSms, FaBrain, FaUniversity, FaCloudUploadAlt } from "react-icons/fa";

export default function AstrologerForm() {
  const [step, setStep] = useState(1); // Progress stepper state
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();
  const [otpTimer, setOtpTimer] = useState(60); // 60-second timer for OTP
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Function to start OTP timer
    useEffect(() => {
      let timer;
      if (otpTimer > 0) {
        timer = setInterval(() => setOtpTimer((prev) => prev - 1), 1000);
      } else {
        setIsResendDisabled(false);
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [otpTimer]);
  
    const handleResendOTP = () => {
      setOtpTimer(60); // Restart timer
      setIsResendDisabled(true);
    };

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
    if (step < 5) {
      setStep(step + 1);
    } else {
      alert("Form Submitted Successfully!");
    }
  };

  // Function to handle "Next" button click with validation
  const handleNext = async () => {
    const isValid = await trigger(); // Validate current fields
    if (isValid) setStep(step + 1);
  };

  const steps = [
    { icon: <FaUser />, label: "Personal Details" },
    { icon: <FaSms />, label: "OTP Verify" },
    { icon: <FaBrain />, label: "Skill Details" },
    { icon: <FaUniversity />, label: "Bank Details" },
    { icon: <FaCloudUploadAlt />, label: "Uploads" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900 px-4 py-6"
    >
      {/* Form Header */}
      <h1 className="text-3xl font-bold text-white mb-6 text-center">REGISTER NEW ASTROLOGER</h1>

     {/* Progress Bar */}
<div className="w-full max-w-4xl mb-12 px-3 mt-10 relative">
  {/* Progress Line */}
  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 z-0" style={{ transform: "translateY(-50%)" }}>
    <div
      className="h-full bg-blue-500 transition-all duration-500"
      style={{ width: `${(step / 5) * 100}%` }}
    ></div>
  </div>

  {/* Step Icons and Labels */}
  <div className="relative z-10 flex justify-between items-center">
    {steps.map((item, index) => (
      <div
        key={index}
        className="relative flex flex-col items-center text-center"
        style={{
          position: "absolute",
          left: `${(index / (steps.length - 1)) * 100}%`,
          transform: "translateX(-50%)",
        }}
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
            step >= index + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-400 text-gray-800"
          }`}
        >
          {item.icon}
        </div>
        <p className="text-xs pl-4 lg:text-sm mt-2 text-white">{item.label}</p>
      </div>
    ))}
  </div>
</div>


      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        
        className="w-full max-w-4xl bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff] shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Step 1: Personal Details */}
        {step === 1 && (
          <>
        <h2 className="text-lg font-bold text-center text-gray-800 mb-4">PERSONAL DETAILS</h2>

        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your full name"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Email Id<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email id"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Mobile No.<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your mobile no."
            {...register("mobile", {
              required: "Mobile number is required",
              minLength: { value: 10, message: "Must be 10 digits" },
              maxLength: { value: 10, message: "Must be 10 digits" },

            })}
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            WhatsApp No.<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your WhatsApp no."
            {...register("whatsapp", { required: "WhatsApp number is required",
                minLength: { value: 10, message: "Must be 10 digits" },
              maxLength: { value: 10, message: "Must be 10 digits" },

             })}
          />
          {errors.whatsapp && <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("terms", { required: "You must agree to the terms and conditions" })}
            className="focus:ring-2 focus:ring-purple-500"
          />
          <label className="text-gray-700 text-sm">
            I agree to the <span className="text-purple-600 font-semibold">Terms and Conditions</span>
            <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#9b57ed] hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            {step === 5 ? "Submit" : "Next"}
          </button>
        </div>
        </>
        )}

        {/* Step 2: OTP Verification */}
          {step === 2 && (
          <>
            <h2 className="text-lg font-bold text-center text-gray-800 mb-4">OTP VERIFICATION</h2>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">OTP<span className="text-red-500">*</span></label>
              <input
                type="text"
                maxLength="6"
                placeholder="Enter 6-digit OTP"
                className="w-full border rounded-lg px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("otp", { required: "OTP is required", minLength: 6, maxLength: 6 })}
              />
              {errors.otp && <p className="text-red-500 text-sm">{errors.otp.message}</p>}
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={isResendDisabled}
                className={`px-4 py-2 rounded ${
                  isResendDisabled ? "bg-gray-400 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Resend OTP
              </button>
              <p className="text-gray-700 font-semibold">{isResendDisabled ? `Resend in ${otpTimer}s` : "Ready to resend"}</p>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#9b57ed] hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
