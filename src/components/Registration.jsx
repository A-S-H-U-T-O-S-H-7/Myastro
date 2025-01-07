"use client";
import { useState } from "react";
import { FaUser, FaSms, FaBrain, FaClipboardList, FaUniversity, FaCloudUploadAlt } from "react-icons/fa";
import PersonalStep from "./steps/PersonalStep";
import OtpStep from "./steps/OtpStep";
import SkillStep from "./steps/SkillStep";
import OtherStep from "./steps/OtherStep";
import BankStep from "./steps/BankStep";
import UploadStep from "./steps/UploadStep";
const AstrologerRegistration = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [astrologerId, setAstrologerId] = useState("");

  // step data
  const steps = [
    { icon: <FaUser />, label: "Personal Details", shortLabel: "Personal" },
    { icon: <FaSms />, label: "OTP Verify", shortLabel: "OTP" },
    { icon: <FaBrain />, label: "Skill Details", shortLabel: "Skills" },
    { icon: <FaClipboardList />, label: "Other Details", shortLabel: "Other" },
    { icon: <FaUniversity />, label: "Bank Details", shortLabel: "Bank" },
    { icon: <FaCloudUploadAlt />, label: "Uploads", shortLabel: "Uploads" },
  ];
  const handleNextSteps = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      alert("Form Submitted Successfully!");
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center bg-purple-300 px-4 py-8">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">
        Astrologer Registration
      </h1>
      <div className="w-full px-[15px]  max-w-[800px] mb-16 mt-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 z-0 transform -translate-y-1/2 rounded-full shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${(step / 6) * 100}%` }}
          ></div>
        </div>
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
                className={`w-8 h-8 lg:w-10 lg:h-10 mt-5 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${step >= index + 1
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
                  : "bg-gray-400 text-gray-800"
                  }`}
              >
                {item.icon}
              </div>
              {/* Responsive Label */}
        <p
          className={`text-xs lg:text-sm mt-2 ${
            step >= index + 1 ? "text-gray-800" : "text-gray-400"
          }`}
        >
          <span className="hidden sm:inline">{item.label}</span> {/* Full label for larger screens */}
          <span className="sm:hidden">{item.shortLabel}</span> {/* Short label for smaller screens */}
        </p>
            </div>
          ))}
        </div>
      </div>
      {step === 1 && <PersonalStep step={step} setStep={setStep} formData={formData} setFormData={setFormData} astrologerId={astrologerId} setAstrologerId={setAstrologerId} />}
      {step === 2 && <OtpStep step={step} setStep={setStep} formData={formData} setFormData={setFormData} astrologerId={astrologerId} setAstrologerId={setAstrologerId} />}
      {step === 3 && <SkillStep step={step} setStep={setStep} astrologerId={astrologerId} />}
      {step === 4 && <OtherStep step={step} setStep={setStep} astrologerId={astrologerId} />}
      {step === 5 && <BankStep step={step} setStep={setStep} astrologerId={astrologerId} />}
      {step === 6 && <UploadStep step={step} setStep={setStep} astrologerId={astrologerId} />}
    </div>
  );
};

export default AstrologerRegistration;
