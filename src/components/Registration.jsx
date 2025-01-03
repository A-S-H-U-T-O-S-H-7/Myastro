"use client";

import { useState,useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {FaPen, FaCaretDown, FaCaretUp, FaUser, FaSms, FaBrain, FaClipboardList, FaUniversity, FaCloudUploadAlt } from "react-icons/fa";


const AstrologerRegistration = () => {
  const [step, setStep] = useState(1);
  const [otpTimer, setOtpTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [dropdownStates, setDropdownStates] = useState({});
  const dropdownRef = useRef(null);


  const toggleDropdown = (key) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleMultiSelect = (field, value, setFieldValue, values) => {
    const currentValues = values[field] || [];
    if (currentValues.includes(value)) {
      setFieldValue(
        field,
        currentValues.filter((item) => item !== value) // Remove value if selected
      );
    } else {
      setFieldValue(field, [...currentValues, value]); // Add value if not selected
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownStates((prev) => ({ ...prev, allskills: false, languages: false }));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  
  

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      const maxSize = 2 * 1024 * 1024; // 2MB

      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Only jpg, jpeg, and png formats are allowed.");
        return;
      }

      if (file.size > maxSize) {
        alert("File size exceeds 2MB. Please upload a smaller file.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

//
 

//   skill Schema
  const skillDetailsSchema = Yup.object().shape({
    username: Yup.string().required("Full Name is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.string().required("Date of Birth is required"),
    completeAddress: Yup.string().required("Complete Address is required"),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Must be a valid 6-digit pincode")
      .required("Pincode is required"),
    pannumber: Yup.string()
      .matches(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/, "Invalid PAN number format")
      .required("PAN number is required"),
    adharnumber: Yup.string()
      .matches(/^\d{12}$/, "Must be exactly 12 digits")
      .required("Aadhar number is required"),
    maritalstatus: Yup.string().required("Marital Status is required"),
    primaryskill: Yup.string().required("Primary Skill is required"),
    allskills: Yup.array()
      .of(Yup.string())
      .min(1, "At least one skill must be selected"),
    languages: Yup.array()
      .of(Yup.string())
      .min(1, "At least one language must be selected"),
    dailycontributionhour: Yup.number()
      .min(1, "Must be at least 1 hour")
      .max(20, "Cannot exceed 20 hours")
      .required("Contribution hours are required"),
    experience: Yup.number()
      .min(0, "Experience cannot be negative")
      .max(99, "Experience cannot exceed 99 years")
      .required("Experience is required"),
    wheredidyouhereaboutmyastro: Yup.string().required(
      "Please select a source"
    ),
    workinginonlineplatform: Yup.string().required(
      "Please indicate if you are working on another platform"
    ),
    platform: Yup.string().when("workinginonlineplatform", {
      is: "yes",
      then: Yup.string().required("Platform name is required"),
    }),
  });


  // personalinfo Schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Must be exactly 10 digits")
      .required("Phone number is required"),
    whatsapp: Yup.string()
      .matches(/^\d{10}$/, "Must be exactly 10 digits")
      .required("WhatsApp number is required"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

// otp Schema
  const otpSchema = Yup.object({
    otp: Yup.string()
      .length(6, "OTP must be exactly 6 digits")
      .required("OTP is required"),
  });

  // additionalDetailsSchema
 const additionalDetailsSchema = Yup.object().shape({
    minCharges: Yup.number()
      .required("Minimum charges are required")
      .min(5, "Minimum charge must be at least 5")
      .max(50, "maximum charge must be at least 50"),

    whyOnboard: Yup.string()
      .required("Please tell us why you should be onboarded")
      .min(10, "Minimum 10 characters required"),
    mainIncomeSource: Yup.string().required("Please select your main income source"),
    highestQualification: Yup.string().required("Please select your highest qualification"),
    learnAstrology: Yup.string().required("Please specify where you learned astrology"),
    minEarnings: Yup.number()
      .required("Minimum monthly earnings are required"),
    fulltimeJob: Yup.string().required("Please specify if you have a full-time job"),
    longBio: Yup.string()
      .required("Please provide a long bio")
      .min(50, "Long bio must be at least 50 words"),
  })

  //bankDetailsSchema
  const bankDetailsSchema = Yup.object().shape({
    ifscCode: Yup.string()
      .required("IFSC Code is required"),
      
    bankName: Yup.string().required("Bank Name is required"),
    bankBranch: Yup.string().required("Bank Branch is required"),
    accountType: Yup.string().required("Account Type is required"),
    accountNumber: Yup.string()
      .required("Account number is required")
      .matches(/^\d{9,18}$/, "Enter a valid account number"),
    confirmAccountNumber: Yup.string()
      .oneOf([Yup.ref("accountNumber")], "Account numbers must match")
      .required("Confirm account number is required"),
    bankUPI: Yup.string().nullable(),
  });

  //Document Schema
  const uploadDocumentsSchema = Yup.object().shape({
    astrologyCertificate: Yup.mixed()
      .required("Astrology Certificate is required")
      .test(
        "fileType",
        "Only PDF or JPG files are allowed",
        (value) => value && ["application/pdf", "image/jpeg"].includes(value.type)
      )
      .test(
        "fileSize",
        "File size should not exceed 2MB",
        (value) => value && value.size <= 2 * 1024 * 1024
      ),
    biodata: Yup.mixed()
      .nullable()
      .test(
        "fileType",
        "Only PDF or JPG files are allowed",
        (value) =>
          !value || ["application/pdf", "image/jpeg"].includes(value.type)
      )
      .test(
        "fileSize",
        "File size should not exceed 2MB",
        (value) => !value || value.size <= 2 * 1024 * 1024
      ),
    panCard: Yup.mixed()
      .required("PAN Card is required")
      .test(
        "fileType",
        "Only JPG or JPEG files are allowed",
        (value) => value && ["image/jpeg"].includes(value.type)
      )
      .test(
        "fileSize",
        "File size should not exceed 2MB",
        (value) => value && value.size <= 2 * 1024 * 1024
      ),
    aadharFront: Yup.mixed()
      .required("Aadhar Front is required")
      .test(
        "fileType",
        "Only JPG or JPEG files are allowed",
        (value) => value && ["image/jpeg"].includes(value.type)
      )
      .test(
        "fileSize",
        "File size should not exceed 2MB",
        (value) => value && value.size <= 2 * 1024 * 1024
      ),
    aadharBack: Yup.mixed()
      .required("Aadhar Back is required")
      .test(
        "fileType",
        "Only JPG or JPEG files are allowed",
        (value) => value && ["image/jpeg"].includes(value.type)
      )
      .test(
        "fileSize",
        "File size should not exceed 2MB",
        (value) => value && value.size <= 2 * 1024 * 1024
      ),
  });
  
  


  // Steps Data
  const steps = [
    { icon: <FaUser />, label: "Personal Details" },
    { icon: <FaSms />, label: "OTP Verify" },
    { icon: <FaBrain />, label: "Skill Details" },
    { icon: <FaClipboardList />, label: "Other Details" },
    { icon: <FaUniversity />, label: "Bank Details" },
    { icon: <FaCloudUploadAlt />, label: "Uploads" },
  ];

  // Handle Next Button
  const handleNext = (values) => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      alert("Form Submitted Successfully!");
      console.log("Form Values:", values);
    }
  };


// handle otp
  const handleResendOTP = () => {
    setOtpTimer(60);
    setIsResendDisabled(true);
    alert("OTP has been resent!");
  };

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

  

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-purple-600 to-purple-900 px-4 py-8">

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center shadow-md">
        Astrologer Registration
      </h1>

      {/* Progress Bar */}
      <div className="w-full max-w-[650px] mb-10 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 z-0 transform -translate-y-1/2 rounded-full shadow-lg">
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
                className={`w-10 h-10 mt-5 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 ${
                  step >= index + 1
                    ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
                    : "bg-gray-400 text-gray-800"
                }`}
              >
                {item.icon}
              </div>
              <p
                className={`text-sm mt-2 ${
                  step >= index + 1 ? "text-white" : "text-gray-300"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      {step === 1 && (<Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          whatsapp: "",
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleNext(values)}
      >
        {({ isValid, touched }) => (
          <Form className="w-full max-w-4xl bg-gradient-to-br from-white via-[#f8f4ff] to-[#eae0ff] dark:bg-[#1e2737] shadow-2xl rounded-lg p-10 space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 ">
              Personal Details
            </h2>

            {/* Full Name */}
            <div className="flex flex-col space-y-1">
              <label className=" font-medium text-gray-700 dark:text-white">
                Full Name<span className="text-red-500">*</span>
              </label>
              <Field
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <ErrorMessage name="fullName" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label className=" font-medium text-gray-700 dark:text-white">
                Email<span className="text-red-500">*</span>
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col space-y-1">
              <label className=" font-medium text-gray-700 dark:text-white">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <Field
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
            </div>

            {/* WhatsApp Number */}
            <div className="flex flex-col space-y-1">
              <label className=" font-medium text-gray-700 dark:text-white">
                WhatsApp Number<span className="text-red-500">*</span>
              </label>
              <Field
                name="whatsapp"
                type="text"
                placeholder="Enter your WhatsApp number"
                className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <ErrorMessage name="whatsapp" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <Field
                name="terms"
                type="checkbox"
                className="mt-1 focus:ring-2 focus:ring-purple-500"
              />
              <label className="text-gray-700 dark:text-white">
                I agree to the{" "}
                <span className="text-purple-600 font-semibold">
                  Terms and Conditions
                </span>
                <span className="text-red-500">*</span>
              </label>
            </div>
            <ErrorMessage name="terms" component="p" className="text-red-500 text-sm" />

            {/* Next Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className={`bg-gradient-to-r from-purple-500 to-purple-600 dark:bg-[#22c7d5] text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 ${
                  isValid && Object.keys(touched).length > 0
                    ? "hover:shadow-xl"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
)}

{step === 2 && (
          <Formik
            initialValues={{ otp: "" }}
            validationSchema={otpSchema}
            onSubmit={handleNext}
          >
            {({ isValid, touched }) => (
         <div className="w-full max-w-4xl bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff]  shadow-lg rounded-lg p-8 space-y-6">

              <Form className="space-y-6">
                <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
                  OTP VERIFICATION
                </h2>
                <p className="text-gray-700 text-center mb-2">
                  OTP sent to{" "}
                  <span className="font-semibold text-green-600">
                    +91 your number
                  </span>
                </p>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-white mb-1">
                    OTP<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="otp"
                    type="text"
                    maxLength="6"
                    placeholder="Enter 6-digit OTP"
                    className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-3 text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <ErrorMessage
                    name="otp"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={isResendDisabled}
                    className={`px-4 py-2 rounded-md shadow-md transition ${
                      isResendDisabled
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-purple-500 text-white hover:bg-purple-600"
                    }`}
                  >
                    Resend OTP
                  </button>
                  <p className="text-gray-700 dark:text-[#888ea8] font-semibold">
                    {isResendDisabled
                      ? `Resend in ${otpTimer}s`
                      : "Ready to resend"}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 ${
                      isValid && touched.otp
                        ? "hover:shadow-xl"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    Next
                  </button>
                </div>
                
              </Form>
              </div>
            )}
          </Formik>
        )}

{step === 3 && (
  <Formik
    initialValues={{
      minCharges: "",
      whyOnboard: "",
      mainIncomeSource: "",
      highestQualification: "",
      learnAstrology: "",
      referredBySomeone: "",
      minEarnings: "",
      fulltimeJob: "",
      longBio: "",
    }}
    validationSchema={additionalDetailsSchema}
    onSubmit={handleNext}
  >
    {({ values, setFieldValue, isValid, touched, validateForm }) => (
      <div className="w-full max-w-4xl bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff] shadow-lg rounded-lg p-8 space-y-6">
        <Form className="space-y-6">
          <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
            ADDITIONAL DETAILS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Why do you think we should onboard you */}
            <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
                Why do you think we should onboard you?:
                <span className="text-red-500">*</span>
              </label>
              <Field
                name="whyOnboard"
                type="text"
                placeholder="Type here..."
                className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <ErrorMessage
                name="whyOnboard"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Main Source of Income */}
            <div className="relative ">
              <label className="block font-semibold mb-1 text-gray-800 ">
                Main source of income (other than astrology)?*
              </label>
              <div
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown("mainIncomeSource")}
              >
                <span>
                  {values.mainIncomeSource
                    ? values.mainIncomeSource
                    : "--Select Source Income--"}
                </span>
                {dropdownStates?.mainIncomeSource ? (
                  <FaCaretUp />
                ) : (
                  <FaCaretDown />
                )}
              </div>
              {dropdownStates?.mainIncomeSource && (
                <div className="absolute w-full bg-white dark:bg-[#1e2737] shadow-md rounded-md z-10">
                  {["Business", "Private Job", "Government Job"].map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#2d3747] cursor-pointer"
                      onClick={() => {
                        setFieldValue("mainIncomeSource", option);
                        toggleDropdown("mainIncomeSource");
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
              <ErrorMessage
                name="mainIncomeSource"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

 {/* Highest Qualification */}
 <div className="relative">
              <label className="block font-semibold mb-1 text-gray-800">
                Select your highest qualification:*
              </label>
              <div
                className="w-full border border-gray-300 bg-white  rounded-md px-4 py-2 flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown("highestQualification")}
              >
                <span>
                  {values.highestQualification
                    ? values.highestQualification
                    : "--Select Qualification--"}
                </span>
                {dropdownStates.highestQualification ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              {dropdownStates.highestQualification && (
                <div className="absolute w-full bg-white  shadow-md rounded-md z-10">
                  {["10th", "12th", "Graduate", "Post Graduate", "PhD"].map(
                    (option) => (
                      <div
                        key={option}
                        className="px-4 py-2 hover:bg-gray-200  cursor-pointer"
                        onClick={() => {
                          setFieldValue("highestQualification", option);
                          toggleDropdown("highestQualification");
                        }}
                      >
                        {option}
                      </div>
                    )
                  )}
                </div>
              )}
              <ErrorMessage
                name="highestQualification"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* From where did you learn Astrology? */}
            <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
              From where did you learn Astrology?:
                <span className="text-red-500">*</span>
              </label>
              <Field
                name="learnAstrology"
                type="text"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <ErrorMessage
                name="learnAstrology"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

              {/* Instagram profile link (optional): */}
              <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
              Instagram profile link (optional):
                
              </label>
              <Field
                name="instalink"
                type="text"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              </div>

               {/*Facebook profile link (optional): */}
               <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
              Facebook profile link (optional):
                
              </label>
              <Field
                name="facebooklink"
                type="text"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              </div>

               {/* LinkedIn profile link (optional): */}
               <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
              LinkedIn profile link (optional):
                
              </label>
              <Field
                name="linkedinlink"
                type="text"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              </div>

               {/* Youtube channel link (optional): */}
               <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
              Youtube channel link (optional):
                
              </label>
              <Field
                name="youtubelink"
                type="text"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              </div>
               {/*Website profile link (optional): */}
               <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
              Website profile link (optional):
                
              </label>
              <Field
                name="websitelink"
                type="text"
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              </div>

              {/* Minimum charges per minutes from customer*/}
            <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
              Minimum charges per minutes from customer:
                <span className="text-red-500">*</span>
              </label>
              <Field
                name="minCharges"
                type="number"
                placeholder="Type here..."
                className="w-full border border-gray-300  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <ErrorMessage
                name="minCharges"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

             {/*Minimum Monthly Earning Expectation from Myastro*/}
             <div className="flex flex-col space-y-1">
              <label className=" text-gray-800 font-semibold ">
              Monthly Earning Expectation from Myastro:
                <span className="text-red-500">*</span>
              </label>
              <Field
                name="minEarnings"
                type="number"
                placeholder="Type here..."
                className="w-full border border-gray-300  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <ErrorMessage
                name="minEarnings"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Are you currently working a full-time job */}
<div className="relative">
  <label className="block font-semibold mb-1 text-gray-800">
    Are you currently working a full-time job?
    <span className="text-red-500">*</span>
  </label>
  <div
    className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 flex items-center justify-between cursor-pointer"
    onClick={() => toggleDropdown("fulltimeJob")}
  >
    <span>
      {values.fulltimeJob ? values.fulltimeJob : "--Select Option--"}
    </span>
    {dropdownStates.fulltimeJob ? <FaCaretUp /> : <FaCaretDown />}
  </div>
  {dropdownStates.fulltimeJob && (
    <div className="absolute w-full bg-white shadow-md rounded-md z-10">
      {["Yes", "No"].map((option) => (
        <div
          key={option}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            setFieldValue("fulltimeJob", option);
            toggleDropdown("fulltimeJob");
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )}
  <ErrorMessage
    name="fulltimeJob"
    component="p"
    className="text-red-500 text-sm"
  />
</div>

 {/* Did anybody refer you to Myastro? */}
 <div className="relative">
  <label className="block font-semibold mb-1 text-gray-800">
  Did anybody refer you to Myastro?:
  <span className="text-red-500">*</span>
  </label>
  <div
    className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 flex items-center justify-between cursor-pointer"
    onClick={() => toggleDropdown("referredBySomeone")}
  >
    <span>
      {values.referredBySomeone ? values.referredBySomeone : "--Select Option--"}
    </span>
    {dropdownStates.referredBySomeone ? <FaCaretUp /> : <FaCaretDown />}
  </div>
  {dropdownStates.referredBySomeone && (
    <div className="absolute w-full bg-white shadow-md rounded-md z-10">
      {["Yes", "No"].map((option) => (
        <div
          key={option}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            setFieldValue("referredBySomeone", option);
            toggleDropdown("referredBySomeone");
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )}
  <ErrorMessage
    name="referredBySomeone"
    component="p"
    className="text-red-500 text-sm"
  />
</div>

 {/* words */}
<div className="flex flex-col space-y-1">
<label className="block font-semibold mb-1 text-gray-800 ">
                Long Bio:
                <span className="text-red-500">* </span>
                 <span className="text-sm text-gray-500 mt-1">
                Word Count:{" "}
                {values.longBio.trim()
                  ? values.longBio.trim().split(/\s+/).length
                  : 0}
              </span>
              </label>
              <Field
                as="textarea"
                name="longBio"
                className="w-full h-28 border border-gray-300  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              
              <ErrorMessage
                name="longBio"
                component="p"
                className="text-red-500 text-sm"
              />
            
</div>

          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className={`bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 ${
                isValid && touched ? "hover:shadow-xl" : "opacity-50 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </Form>
      </div>
    )}
  </Formik>
)}
  

  {step === 4 && (
  <Formik
    initialValues={{
      ifscCode: "",
      bankName: "",
      bankBranch: "",
      accountType: "",
      accountNumber: "",
      confirmAccountNumber: "",
      bankUPI: "",
    }}
    validationSchema={bankDetailsSchema}
    onSubmit={handleNext} // Proceed to the next step
  >
    {({ values, setFieldValue, validateForm }) => (
      <Form className="space-y-6 w-full max-w-4xl mx-auto bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff] shadow-lg rounded-lg p-8">
        <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
          BANK DETAILS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* IFSC Code */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-800 font-semibold">IFSC Code
            <span className="text-red-500">*</span>
            </label>
            <Field
              name="ifscCode"
              type="text"
              placeholder="Enter IFSC Code"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <ErrorMessage
              name="ifscCode"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Bank Name */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-800 font-semibold">Bank Name
            <span className="text-red-500">*</span>
            </label>
            <Field
              name="bankName"
              type="text"
              placeholder="Enter Bank Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <ErrorMessage
              name="bankName"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Bank Branch */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-800 font-semibold">Bank Branch
            <span className="text-red-500">*</span>
            </label>
            <Field
              name="bankBranch"
              type="text"
              placeholder="Enter Bank Branch"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <ErrorMessage
              name="bankBranch"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Account Type */}
          <div className="relative">
            <label className="text-gray-800 font-semibold">Account Type
            <span className="text-red-500">*</span>
            </label>
            <div
              className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 flex items-center justify-between cursor-pointer"
              onClick={() => toggleDropdown("accountType")}
            >
              <span>
                {values.accountType ? values.accountType : "--Choose account type--"}
              </span>
              {dropdownStates.accountType ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {dropdownStates.accountType && (
              <div className="absolute w-full bg-white shadow-md rounded-md z-10">
                {["Savings", "Current"].map((type) => (
                  <div
                    key={type}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setFieldValue("accountType", type);
                      toggleDropdown("accountType");
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
            <ErrorMessage
              name="accountType"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Account Number */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-800 font-semibold">
              Account Number
              <span className="text-red-500">*</span>
            </label>
            <Field
              name="accountNumber"
              type="text"
              placeholder="Enter your bank account number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <ErrorMessage
              name="accountNumber"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Confirm Account Number */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-800 font-semibold">
              Confirm Account Number
              <span className="text-red-500">*</span>
            </label>
            <Field
              name="confirmAccountNumber"
              type="text"
              placeholder="Re-enter your bank account number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <ErrorMessage
              name="confirmAccountNumber"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* UPI ID (Optional) */}
          <div className="flex flex-col space-y-1">
            <label className="text-gray-800 font-semibold">Bank UPI ID</label>
            <Field
              name="bankUPI"
              type="text"
              placeholder="Enter your UPI ID (optional)"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg"
            onClick={() => setStep(step - 1)}
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </Form>
    )}
  </Formik>
)}

{step === 5 && (
  <Formik
    initialValues={{
      astrologyCertificate: null,
      biodata: null,
      panCard: null,
      aadharFront: null,
      aadharBack: null,
    }}
    validationSchema={uploadDocumentsSchema}
    onSubmit={handleNext} // Proceed to the next step
  >
    {({ setFieldValue, values, errors, touched }) => (
      <Form className="space-y-6 w-full max-w-4xl mx-auto bg-gradient-to-b from-white via-[#f3f4f6] to-[#eae0ff] shadow-lg rounded-lg p-8">
        <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
          UPLOAD DOCUMENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* File Upload Component */}
          {[
            { name: "astrologyCertificate", label: "Astrology Certificate*", type: "pdf or JPG" },
            { name: "biodata", label: "Biodata (Optional)", type: "PDF or JPG" },
            { name: "panCard", label: "Pan Card*", type: "JPG or JPEG" },
            { name: "aadharFront", label: "Aadhar Front*", type: "JPG or JPEG" },
            { name: "aadharBack", label: "Aadhar Back*", type: "JPG or JPEG" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col space-y-2">
              <label className="text-gray-800 font-semibold">
                {field.label}
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  id={field.name}
                  accept={
                    field.type.includes("JPG")
                      ? "image/jpeg"
                      : "application/pdf, image/jpeg"
                  }
                  className="hidden"
                  onChange={(e) =>
                    setFieldValue(field.name, e.target.files[0])
                  }
                />
                <label
                  htmlFor={field.name}
                  className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ${
                    values[field.name]
                      ? "bg-green-500 text-white"
                      : "bg-purple-500 hover:bg-purple-600 text-white"
                  }`}
                >
                  {values[field.name] ? "Uploaded" : "Upload"}
                </label>
                {values[field.name] && (
                  <div className="text-green-600 text-sm">
                    {values[field.name].name} uploaded successfully
                  </div>
                )}
              </div>
              <p className="text-orange-500 text-sm">
                Upload {field.type} files. Maximum file size: 2MB.
              </p>
              {errors[field.name] && touched[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg"
            onClick={() => setStep(step - 1)}
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </Form>
    )}
  </Formik>
)}





{step === 6 && (
<div>
<div className="w-full max-w-4xl bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff]  shadow-lg rounded-lg p-8 space-y-6">
     <h2 className="text-lg font-bold text-center text-gray-800 dark:text-white mb-4">
       SKILL DETAILS
     </h2>

     <Formik
       initialValues={{
         username: "",
         gender: "",
         dob: "",
         completeAddress: "",
         pincode: "",
         pannumber: "",
         adharnumber: "",
         maritalstatus: "",
         primaryskill: "",
         allskills: [],
         languages: [],
         dailycontributionhour: "",
         experience: "",
         wheredidyouhereaboutmyastro: "",
         workinginonlineplatform: "",
         platform: "",
       }}
       validationSchema={skillDetailsSchema}
       onSubmit={handleNext}
     >
       {({ values, setFieldValue }) => (

         <Form>
           {/* Profile Photo */}
           <div className="flex flex-col items-center space-y-2">
             <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500 dark:border-cyan-500">
               {profileImage ? (
                 <img
                   src={profileImage}
                   alt="Profile"
                   className="w-full h-full object-cover"
                 />
               ) : (
                 <span className="text-center w-full h-full flex items-center justify-center text-sm text-gray-500 dark:text-[#888ea8]">
                   Upload Photo
                 </span>
               )}
               <label
                 htmlFor="profileImage"
                 className="absolute bottom-0 right-0 bg-purple-500 dark:bg-cyan-500 text-white p-1 rounded-full cursor-pointer"
               >
                 <FaPen />
               </label>
               <input
                 id="profileImage"
                 type="file"
                 className="hidden"
                 onChange={handleImageUpload}
               />
             </div>
             <p className="text-red-500 text-sm">Profile pic*(jpg, png, jpeg only, Max-size 2MB)</p>
             <p className="text-gray-500 text-xs">
               Only Passport size photo is accepted
             </p>
           </div>

           {/* Responsive Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"> 
      {/* Full Name */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800">
      Full Name<span className="text-red-500">*</span>
    </label>
    <Field
      name="username"
      type="text"
      placeholder="Enter your Name"
      className="w-full border border-gray-300 rounded-md px-4 py-1"
    />
    <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Gender Dropdown */}
  <div className="relative">
    <label className="block font-semibold mb-1 text-gray-800">
      Gender<span className="text-red-500">*</span>
    </label>
    <div
      className="w-full border border-gray-300 bg-white  rounded-md px-4 py-1 flex items-center justify-between cursor-pointer"
      onClick={() => toggleDropdown("gender")}
    >
      <span>{values.gender ? values.gender : "Select Gender"}</span>
      {dropdownStates.gender ? <FaCaretUp /> : <FaCaretDown />}
    </div>
    {dropdownStates.gender && (
      <div className="absolute w-full bg-white dark:bg-[#1e2737] shadow-md rounded-md z-10">
        {["Male", "Female"].map((option) => (
          <div
            key={option}
            className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#2d3747] cursor-pointer"
            onClick={() => {
              setFieldValue("gender", option);
              toggleDropdown("gender");
            }}
          >
            {option}
          </div>
        ))}
      </div>
    )}
    <ErrorMessage name="gender" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Date of Birth */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Date of Birth<span className="text-red-500">*</span>
    </label>
    <Field
      name="dob"
      type="date"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="dob" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Country */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Country<span className="text-red-500">*</span>
    </label>
    <Field
      as="select"
      name="country"
      className="w-full border border-gray-300  rounded-md px-4 py-1"
    >
      <option value="India">India</option>
    </Field>
    <ErrorMessage name="country" component="p" className="text-red-500 text-sm" />
  </div>

  {/* State */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      State<span className="text-red-500">*</span>
    </label>
    <Field
      name="state"
      type="text"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="state" component="p" className="text-red-500 text-sm" />
  </div>

  {/* City */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      City<span className="text-red-500">*</span>
    </label>
    <Field
      name="city"
      type="text"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="city" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Complete Address */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Address<span className="text-red-500">*</span>
    </label>
    <Field
      name="completeAddress"
      type="text"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="completeAddress" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Pincode */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Pincode<span className="text-red-500">*</span>
    </label>
    <Field
      name="pincode"
      type="text"
      maxLength={6}
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="pincode" component="p" className="text-red-500 text-sm" />
  </div>

  {/* PAN Number */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      PAN Number<span className="text-red-500">*</span>
    </label>
    <Field
      name="pannumber"
      type="text"
      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="pannumber" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Aadhar Number */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Aadhar Number<span className="text-red-500">*</span>
    </label>
    <Field
      name="adharnumber"
      type="text"
      maxLength={12}
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="adharnumber" component="p" className="text-red-500 text-sm" />
  </div>
  
  {/* gst number */}
   <div>
     <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      GST (Optional)
    </label>
    <Field
      name="gst"
      type="text"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="gst" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Marital Status Dropdown */}
  <div className="relative">
    <label className="block font-semibold mb-1 text-gray-800 ">
      Marital Status<span className="text-red-500">*</span>
    </label>
    <div
      className="w-full border border-gray-300 bg-white  rounded-md px-4 py-1 flex items-center justify-between cursor-pointer"
      onClick={() => toggleDropdown("maritalstatus")}
    >
      <span>{values.maritalstatus ? values.maritalstatus : "Select Status"}</span>
      {dropdownStates.maritalstatus ? <FaCaretUp /> : <FaCaretDown />}
    </div>
    {dropdownStates.maritalstatus && (
      <div className="absolute w-full bg-white  shadow-md rounded-md z-10">
        {["Single", "Married"].map((option) => (
          <div
            key={option}
            className="px-4 py-2 hover:bg-gray-200  cursor-pointer"
            onClick={() => {
              setFieldValue("maritalstatus", option);
              toggleDropdown("maritalstatus");
            }}
          >
            {option}
          </div>
        ))}
      </div>
    )}
    <ErrorMessage name="maritalstatus" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Primary Skill */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Primary Skill<span className="text-red-500">*</span>
    </label>
    <Field
      as="select"
      name="primaryskill"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-2"
    >
      <option value="">Select Primary Skill</option>
      {["Tarot", "Numerology", "Vastu", "Vedic"].map((skill) => (
        <option key={skill} value={skill}>
          {skill}
        </option>
      ))}
    </Field>
    <ErrorMessage name="primaryskill" component="p" className="text-red-500 text-sm" />
  </div>

 {/* All Skills Multi-Select */}
<div className="relative">
  <label className="block font-semibold mb-1 text-gray-800">
    All Skills<span className="text-red-500">*</span>
  </label>
  <div
    className="w-full border border-gray-300 bg-white rounded-md px-4 py-1 flex items-center flex-wrap gap-2 cursor-pointer"
    onClick={() => toggleDropdown("allskills")}
  >
    {values.allskills?.length > 0
      ? values.allskills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 border border-gray-300 rounded-full px-3 py-1 flex items-center gap-2"
          >
            {skill}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent dropdown toggle
                handleMultiSelect("allskills", skill, setFieldValue, values);
              }}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </span>
        ))
      : "Select Skills"}
    {dropdownStates.allskills && (
      <FaCaretUp className="ml-auto text-gray-500" />
    )}
  </div>
  <div ref={dropdownRef}>

  {dropdownStates.allskills && (
    <div className="absolute w-full bg-white shadow-md rounded-md z-10">
      {["Tarot", "Numerology", "Vastu", "Vedic"].map((skill) => (
        <div
          key={skill}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleMultiSelect("allskills", skill, setFieldValue, values)}
        >
          {skill}
        </div>
      ))}
    </div>
  )}
  </div>

  <ErrorMessage name="allskills" component="p" className="text-red-500 text-sm" />
</div>

{/* Languages Multi-Select */}
<div className="relative">
  <label className="block font-semibold mb-1 text-gray-800">
    Languages<span className="text-red-500">*</span>
  </label>
  <div
    className="w-full border border-gray-300 bg-white rounded-md px-4 py-1 flex items-center flex-wrap gap-2 cursor-pointer"
    onClick={() => toggleDropdown("languages")}
  >
    {values.languages?.length > 0
      ? values.languages.map((lang) => (
          <span
            key={lang}
            className="bg-gray-200 border border-gray-300 rounded-full px-3 py-1 flex items-center gap-2"
          >
            {lang}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent dropdown toggle
                handleMultiSelect("languages", lang, setFieldValue, values);
              }}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </span>
        ))
      : "Select Languages"}

      <div ref={dropdownRef}>

    {dropdownStates.languages && (
      <FaCaretUp className="ml-auto text-gray-500" />
    )}
  </div>
  {dropdownStates.languages && (
    <div className="absolute w-full bg-white shadow-md rounded-md z-10">
      {["Hindi", "English", "Odia"].map((lang) => (
        <div
          key={lang}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleMultiSelect("languages", lang, setFieldValue, values)}
        >
          {lang}
        </div>
      ))}
    </div>
  )}
  </div>
  <ErrorMessage name="languages" component="p" className="text-red-500 text-sm" />
</div>


  {/* Daily Contribution Hours */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Daily Contribution Hours<span className="text-red-500">*</span>
    </label>
    <Field
      name="dailycontributionhour"
      type="number"
      min="1"
      max="20"
      className="w-full border border-gray-300  rounded-md px-4 py-1"
    />
    <ErrorMessage name="dailycontributionhour" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Experience */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Experience in Years<span className="text-red-500">*</span>
    </label>
    <Field
      name="experience"
      type="number"
      min="0"
      className="w-full border border-gray-300 ] rounded-md px-4 py-1"
    />
    <ErrorMessage name="experience" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Where Did You Hear About MyAstro */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Where Did You Hear About MyAstro?<span className="text-red-500">*</span>
    </label>
    <Field
      as="select"
      name="wheredidyouhereaboutmyastro"
      className="w-full border border-gray-300  rounded-md px-4 py-2"
    >
      <option value="">Select Source</option>
      {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((source) => (
        <option key={source} value={source}>
          {source}
        </option>
      ))}
    </Field>
    <ErrorMessage name="wheredidyouhereaboutmyastro" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Radio Buttons: Working on Other Platforms */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Are You Working on Any Other Online Platform?<span className="text-red-500">*</span>
    </label>
    <div className="flex gap-4">
      <label className="flex items-center gap-2">
        <Field type="radio" name="workinginonlineplatform" value="yes" />
        Yes
      </label>
      <label className="flex items-center gap-2">
        <Field type="radio" name="workinginonlineplatform" value="no" />
        No
      </label>
    </div>
    <ErrorMessage name="workinginonlineplatform" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Platform */}
  {values.workinginonlineplatform === "yes" && (
    <div>
      <label className="block font-semibold mb-1 text-gray-800 ">
        Platform<span className="text-red-500">*</span>
      </label>
      <Field
        name="platform"
        type="text"
        className="w-full border border-gray-300  rounded-md px-4 py-1"
      />
      <ErrorMessage name="platform" component="p" className="text-red-500 text-sm" />
    </div>
  )}

</div>


           {/* Submit/Back Buttons */}
           <div className="flex justify-between mt-6">
           
             <button
               type="submit"
               className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md"
             >
               Next
             </button>
           </div>

         </Form>
         
       )}
     </Formik>
</div>
   </div>
)}







    </div>
  );
};

export default AstrologerRegistration;
