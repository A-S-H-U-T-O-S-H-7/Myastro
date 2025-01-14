"use client";
import React, { createContext, useState, useContext } from "react";
const AstrologerContext = createContext();

export const AstrologerRegistrationProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    terms: false,
  });
  const [skillData, setSkillData] = useState({
    profileImage: "",
    username: "",
    gender: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    completeAddress: "",
    pincode: "",
    pannumber: "",
    adharnumber: "",
    gst: "",
    maritalstatus: "",
    primaryskill: "",
    allskills: [],
    languages: [],
    dailycontributionhour: "",
    experience: "",
    wheredidyouhereaboutmyastro: "",
    workinginonlineplatform: "",
    platform: "",
  });
  const [otherData, setOtherData] = useState({
    whyOnboard: "",
    mainIncomeSource: "",
    highestQualification: "",
    learnAstrology: "",
    instalink: "",
    facebooklink: "",
    linkedinlink: "",
    youtubelink: "",
    websitelink: "",
    minCharges: "",
    minEarnings: "",
    fulltimeJob: "",
    referredBySomeone: "",
    longBio: "",
  });
  const [bankData, setBankData] = useState({
    ifscCode: "",
    bankName: "",
    bankBranch: "",
    accountType: "",
    accountNumber: "",
    confirmAccountNumber: "",
    bankUPI: "",
  });
  const [uploadData, setUploadData] = useState({
    astrologyCertificate: null,
    biodata: null,
    panCard: null,
    aadharFront: null,
    aadharBack: null,
  });
  const [astrologerId, setAstrologerId] = useState("");
  const [step, setStep] = useState(1);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <AstrologerContext.Provider
      value={{
        personalData,
        setPersonalData,
        skillData,
        setSkillData,
        otherData,
        setOtherData,
        bankData,
        setBankData,
        uploadData,
        setUploadData,
        astrologerId,
        setAstrologerId,
        step,
        setStep,
        loader,
        setLoader,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AstrologerContext.Provider>
  );
};
export const useAstrologer = () => {
  const context = useContext(AstrologerContext);
  if (!context) {
    throw new Error(
      "useAstrologer must be used within an AstrologerRegistrationProvider"
    );
  }
  return context;
};
