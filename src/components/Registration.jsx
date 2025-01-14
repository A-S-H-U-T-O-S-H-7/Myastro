"use client";
import { FaUser, FaSms, FaBrain, FaClipboardList, FaUniversity, FaCloudUploadAlt } from "react-icons/fa";
import PersonalStep from "./steps/PersonalStep";
import OtpStep from "./steps/OtpStep";
import SkillStep from "./steps/SkillStep";
import OtherStep from "./steps/OtherStep";
import BankStep from "./steps/BankStep";
import UploadStep from "./steps/UploadStep";
import { useAstrologer } from "@/lib/AstrologerRegistrationContext";
const AstrologerRegistration = () => {

  const { step } = useAstrologer();
  const steps = [
    { icon: <FaUser />, label: "Personal Details", shortLabel: "Personal" },
    { icon: <FaSms />, label: "OTP Verify", shortLabel: "OTP" },
    { icon: <FaBrain />, label: "Skill Details", shortLabel: "Skills" },
    { icon: <FaClipboardList />, label: "Other Details", shortLabel: "Other" },
    { icon: <FaUniversity />, label: "Bank Details", shortLabel: "Bank" },
    { icon: <FaCloudUploadAlt />, label: "Uploads", shortLabel: "Uploads" },
  ];

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
              <p
                className={`text-xs lg:text-sm mt-2 ${step >= index + 1 ? "text-gray-800" : "text-gray-400"
                  }`}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.shortLabel}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {step === 1 && <PersonalStep />}
      {step === 2 && <OtpStep />}
      {step === 3 && <SkillStep />}
      {step === 4 && <OtherStep />}
      {step === 5 && <BankStep />}
      {step === 6 && <UploadStep />}
    </div>
  );
};

export default AstrologerRegistration;
