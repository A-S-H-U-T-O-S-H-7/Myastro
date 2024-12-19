"use client"; // For Next.js 13+ with App Router
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaClipboardList,FaUser, FaSms, FaBrain, FaUniversity, FaCloudUploadAlt } from "react-icons/fa";


export default function AstrologerForm() {
  const [step, setStep] = useState(1); // Progress stepper state
  // const { register, handleSubmit,watch, formState: { errors }, trigger } = useForm();
  const [otpTimer, setOtpTimer] = useState(60); // 60-second timer for OTP
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [uploadedFields, setUploadedFields] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedLanguageList, setSelectedLanguageList] = useState([]);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isradioWorking, setradioIsWorking] = useState(false);
  const languageDropdownRef = useRef(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");


  const allSkillsOptions = ["Vedic", "Tarot", "Numerology", "Palmistry", "Astrology"];   
  const languageOptions = ["English", "Hindi", "Other"];

  

// skills
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (!allowedTypes.includes(file.type)) {
        setFileError("Only JPG, JPEG, or PNG files are allowed.");
        setSelectedFile(null);
      } else if (file.size > maxSize) {
        setFileError("File size should not exceed 2MB.");
        setSelectedFile(null);
      } else {
        setFileError("");
        setSelectedFile(file);
      }
    }
}


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

   // Close dropdown on page click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 //language  Close dropdown when clicking outside
 useEffect(() => {
  const handleOutsideClick = (event) => {
    if (
      languageDropdownRef.current &&
      !languageDropdownRef.current.contains(event.target)
    ) {
      setIsLanguageDropdownOpen(false);
    }
  };
  document.addEventListener("mousedown", handleOutsideClick);
  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, []);

// Handle language selection
const handleLanguageSelection = (language) => {
  setSelectedLanguageList((prevSelectedLanguageList) =>
    prevSelectedLanguageList.includes(language)
      ? prevSelectedLanguageList.filter((lang) => lang !== language)
      : [...prevSelectedLanguageList, language]
  );
};

{/*image handler */}
const handlePhotoChange = (event) => {
const file = event.target.files[0]; // Get the uploaded file

    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Only jpg, jpeg, and png formats are allowed.");
        setPhotoPreview(null);
        return;
      }

      // Validate file size (Max: 2MB)
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (file.size > maxSize) {
        alert("File size exceeds 2MB. Please upload a smaller file.");
        setPhotoPreview(null);
        return;
      }

      // If valid, update the photo preview
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result); // Set the photo preview
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null); // Clear preview if no file is selected
    }
  };


  // Function to handle form submission
  
  const onSubmit = (data) => {
    console.log(data);
    if (step < 6) {
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
    { icon: <FaClipboardList />, label: "Other Details" },
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
<div className="w-full max-w-[650px] mb-[80px] px-5 mt-10 relative">
  {/* Progress Line */}
  <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 z-0" style={{ transform: "translateY(-50%)" }}>
    <div
      className="h-full bg-blue-500 transition-all duration-500"
      style={{ width: `${(step / 6) * 100}%` }}
    ></div>
  </div>

  {/* Step Icons and Labels */}
  <div className="relative z-10  flex justify-between items-center">
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
          className={`w-10 h-10 mt-[20px] rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
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
    maxLength={10} // Limit input to 10 characters
    onInput={(e) => {
      // Remove non-numeric characters
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }}
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
            maxLength={10}
            onInput={(e)=>{
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
            }}
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
    
    {/* OTP Sent Message */}
    <p className="text-gray-700 text-center mb-2">
      OTP sent to <span className="font-semibold text-green-600 ">+91{watch("mobile") || "your number"}</span>
    </p>

    {/* OTP Input */}
    <div>
      <label className="block text-gray-700 font-semibold mb-1">
        OTP<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        maxLength="6"
        placeholder="Enter 6-digit OTP"
        className="w-full border rounded-lg px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
        {...register("otp", {
          required: "OTP is required",
          validate: (value) =>
            value.length === 6 || "OTP is not correct",
        })}
      />
      {errors.otp && <p className="text-red-500 text-sm">{errors.otp.message}</p>}
    </div>

    {/* Resend OTP Button */}
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
      <p className="text-gray-700 font-semibold">
        {isResendDisabled ? `Resend in ${otpTimer}s` : "Ready to resend"}
      </p>
    </div>

    {/* Next Button */}
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



{/* Step 3: Skill Details */}
{step === 3 && (
  <>
    <h2 className="text-lg font-bold text-center text-gray-800 mb-6">
      SKILL DETAILS
    </h2>

    {/* Photo Upload */}
    <div className="mb-2">
      <div className="mb-4">
        <label className="block text-center text-gray-700 font-semibold mb-2">
          Upload Photo (Optional)
        </label>
        <div className="flex items-center justify-center">
          <label
            htmlFor="photo-upload"
            className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer border-2 border-dashed border-yellow-300 hover:border-purple-500 overflow-hidden"
          >
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-center">Upload Photo</span>
            )}
            <input
              id="photo-upload"
              type="file"
              accept=".jpg, .jpeg, .png"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
        </div>
      </div>

      <p className="text-sm text-center text-orange-400 mt-1">
        Only <span className="font-bold">jpg, jpeg, and png</span> formats are allowed. Max size:{" "}
        <span className="font-bold">2MB</span>. Passport-sized photo only.
      </p>
    </div>

    {/* Astrologer Username */}
    <div className="grid gap-6 mb-1">

    <div>
      <label className="block text-gray-700 font-semibold mb-2">
        Astrologer Username<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Enter your username"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        {...register("username", { required: "Username is required" })}
      />
      {errors.username && (
        <p className="text-red-500 text-sm">{errors.username.message}</p>
      )}
    </div>

    {/* Gender and DOB */}
    
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Gender<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("gender", { required: "Gender is required" })}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && (
          <p className="text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div> 

{/* Dob */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Date of Birth<span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("dob", { required: "Date of Birth is required" })}
        />
        {errors.dob && (
          <p className="text-red-500 text-sm">{errors.dob.message}</p>
        )}
      </div>
   

    {/* Country, State, City */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Country<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("country", { required: "Country is required" })}
        >
          <option value="india">India</option>
        </select>
      </div>
      {/* state */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          State<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("state", { required: "State is required" })}
        >
          <option value="">Select State</option>
          <option value="odisha">Odisha</option>
          {/* Add other states */}
        </select>
        {errors.state && (
    <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
  )}
      </div>
{/* city */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          City<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your city"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("city", { required: "City is required" })}
        />
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>
   

    {/* Complete Address */}
    <div >
      <label className="block text-gray-700 font-semibold mb-2">
        Complete Address<span className="text-red-500">*</span>
      </label>
      <textarea
        rows="1"
        placeholder="Enter your full address"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        {...register("address", { required: "Address is required" })}
      ></textarea>
      {errors.address && (
        <p className="text-red-500 text-sm">{errors.address.message}</p>
      )}
    </div>
   

    {/* Pincode */}
    <div >
      <label className="block text-gray-700 font-semibold mb-2">
        Pincode<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Enter 6-digit pincode"
        maxLength="6"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        {...register("pincode", {
          required: "Pincode is required",
          pattern: {
            value: /^[0-9]{6}$/,
            message: "Pincode must be exactly 6 digits",
          },
        })}
      />
      {errors.pincode && (
        <p className="text-red-500 text-sm">{errors.pincode.message}</p>
      )}
    </div>
     {/* PAN */}
    <div>
  <label className="block font-semibold mb-1">
    PAN Number<span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    placeholder="ABCDE1234F"
    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    
    {...register("panNumber", {
      required: "PAN number is required",
      pattern: {
        value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
        message: "Enter a valid PAN number",
      },
    })}
    maxLength={10}
  />
  {errors.panNumber && (
    <p className="text-red-500 text-sm mt-1">{errors.panNumber.message}</p>
  )}
</div>

           {/* Aadhar */}
           <div>
        <label className="block font-semibold mb-1">Aadhar Number</label>
        <input
          type="text"
          placeholder="12-digit Aadhar"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          maxLength={12}
          {...register("aadharNumber", {
            required: "Aadhar number is required",
            pattern: {
              value: /^\d{12}$/,
              message: "Aadhar number must be exactly 12 digits",
            },
          })}
        />
        {errors.aadharNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.aadharNumber.message}
          </p>
        )}
      </div>



          {/* GST Number and Marital Status */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          GST Number (Optional)
        </label>
        <input
          type="text"
          placeholder="Enter GST Number"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("gstNumber", {
            pattern: {
              value: /^[0-9A-Z]{15}$/,
              message: "GST number must be 15 characters",
            },
          })}
        />
        {errors.gstNumber && (
          <p className="text-red-500 text-sm">{errors.gstNumber.message}</p>
        )}
      </div>

      {/* marital status */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Marital Status<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("maritalStatus", { required: "Marital status is required" })}
        >
          <option value="">Select</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        {errors.maritalStatus && (
          <p className="text-red-500 text-sm">{errors.maritalStatus.message}</p>
        )}
      </div>

    {/* Primary Skills, All Skills, and Languages */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Primary Skills<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("primarySkills", { required: "Primary skill is required" })}
        >
          <option value="">Select</option>
          <option value="vedic">Vedic</option>
          <option value="tarot">Tarot</option>
          <option value="numerology">Numerology</option>
        </select>
        {errors.primarySkills && (
          <p className="text-red-500 text-sm">{errors.primarySkills.message}</p>
        )}
      </div>

      {/* All Skills */}
      <div className=" relative" ref={dropdownRef}>
      <label className="block text-gray-700 font-semibold mb-2">
        All Skills<span className="text-red-500">*</span>
      </label>

      {/* Input Box */}
      <div
        className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-purple-500"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="truncate">{selectedSkills.length > 0 ? selectedSkills.join(", ") : "Select skills"}</span>
        {dropdownOpen ? (
          <FaChevronUp className="text-gray-500 text-sm" />
        ) : (
          <FaChevronDown className="text-gray-500 text-sm" />
        )}
      </div>

      {/* Dropdown */}
      {dropdownOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-1 w-full max-h-40 overflow-auto">
          {allSkillsOptions.map((skill, index) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedSkills.includes(skill) ? "font-semibold" : ""
              }`}
              onClick={() => {
                setSelectedSkills((prevSkills) =>
                  prevSkills.includes(skill)
                    ? prevSkills.filter((s) => s !== skill)
                    : [...prevSkills, skill]
                );
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      )}

      {/* Hidden input for form submission */}
      <input
        type="hidden"
        value={selectedSkills.join(",")}
        {...register("allSkills", { required: "At least one skill must be selected" })}
      />
      {errors.allSkills && !selectedSkills.length && (
        <p className="text-red-500 text-sm">{errors.allSkills.message}</p>
      )}
    </div>
  

{/* language */}
<div className="mb-6 relative" ref={languageDropdownRef}>
      <label className="block text-gray-700 font-semibold mb-2">
        Languages<span className="text-red-500">*</span>
      </label>

      {/* Input Box */}
      <div
        className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white flex items-center justify-between cursor-pointer focus:ring-2 focus:ring-purple-500"
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
      >
        <span className="truncate">
          {selectedLanguageList.length > 0
            ? selectedLanguageList.join(", ")
            : "Select languages"}
        </span>
        {isLanguageDropdownOpen ? (
          <FaChevronUp className="text-gray-500 text-sm" />
        ) : (
          <FaChevronDown className="text-gray-500 text-sm" />
        )}
      </div>

      {/* Dropdown */}
      {isLanguageDropdownOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-1 w-full max-h-40 overflow-auto">
          {languageOptions.map((language, index) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedLanguageList.includes(language) ? "font-semibold" : ""
              }`}
              onClick={() => handleLanguageSelection(language)}
            >
              {language}
            </li>
          ))}
        </ul>
      )}

      {/* Hidden input for form submission */}
      <input
        type="hidden"
        value={selectedLanguageList.join(",")}
        {...register("languages", { required: "At least one language must be selected" })}
      />
      {errors.languages && !selectedLanguageList.length && (
        <p className="text-red-500 text-sm">{errors.languages.message}</p>
      )}
    </div>
  
    {/* Daily Contribution Hours  */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Daily Contribution Hours<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Hours per day"
          min="0"
          max="20"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("dailyHours", {
            required: "Contribution hours are required",
            validate: (value) =>
              value > 20 ? "Cannot contribute more than 20 hours" : true,
          })}
        />
        {errors.dailyHours && (
          <p className="text-red-500 text-sm">{errors.dailyHours.message}</p>
        )}
      </div>

       {/* Experience */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Experience (Years)<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Experience in years"
          max="99"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("experience", { required: "Experience is required" })}
        />
        {errors.experience && (
          <p className="text-red-500 text-sm">{errors.experience.message}</p>
        )}
      </div>

    {/* Referral Source */}
    <div >
      <label className="block text-gray-700 font-semibold mb-2">
        Where did you hear about My Astro<span className="text-red-500">*</span>
      </label>
      <select
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        {...register("referralSource", { required: "This field is required" })}
      >
        <option value="">Select</option>
        <option value="youtube">YouTube</option>
        <option value="facebook">Facebook</option>
        <option value="instagram">Instagram</option>
      </select>
      {errors.referralSource && (
        <p className="text-red-500 text-sm">{errors.referralSource.message}</p>
      )}
    </div>



     {/* Working on Other Platforms */}
     <div className="col-span-2">
      <label className="block font-semibold mb-2">
        Are you working on another online platform?
      </label>
      <div className="flex gap-4">
        <label>
          <input
            type="radio"
            name="isWorking"
            value="yes"
            onChange={() => setradioIsWorking(true)}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="isWorking"
            value="no"
            onChange={() => setradioIsWorking(false)}
          />{" "}
          No
        </label>
      </div>
      {isradioWorking && (
        <input
          type="text"
          placeholder="Enter platform name"
          className="w-full mt-2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      )}
    </div>


     </div> 

    {/* Next Button */}
    <div className="flex justify-end">
      <button
        type="button"
        onClick={handleNext}
        className="bg-[#9b57ed] hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
      >
        Next
      </button>
    </div>
  </>
)}

{/* other details */}
{step === 4 && (
  <>
    <h2 className="text-lg font-bold text-center text-gray-800 mb-4">Work Preferences</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Why do you think we should onboard you? */}
      <div className="col-span-1">
        <label className="block text-gray-700 font-semibold mb-1">
          Why do you think we should onboard you?<span className="text-red-500">*</span>
        </label>
        <textarea
          rows="3"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Tell us why..."
          {...register("onboardingReason", { required: "This field is required" })}
        />
        {errors.onboardingReason && <p className="text-red-500 text-sm">{errors.onboardingReason.message}</p>}
      </div>

      {/* Main source of income */}
      <div className="col-span-1">
        <label className="block text-gray-700 font-semibold mb-1">
          Main source of income (other than astrology)?<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("mainIncomeSource", { required: "This field is required" })}
        >
          <option value="">Select an option</option>
          <option value="privateJob">Private Job</option>
          <option value="govtJob">Government Job</option>
          <option value="business">Business</option>
        </select>
        {errors.mainIncomeSource && <p className="text-red-500 text-sm">{errors.mainIncomeSource.message}</p>}
      </div>

      {/* Highest qualification */}
      <div className="col-span-1">
        <label className="block text-gray-700 font-semibold mb-1">
          Select your highest qualification:<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("highestQualification", { required: "This field is required" })}
        >
          <option value="">Select an option</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="graduate">Graduate</option>
          <option value="postGraduate">Post Graduate</option>
        </select>
        {errors.highestQualification && <p className="text-red-500 text-sm">{errors.highestQualification.message}</p>}
      </div>

      {/* Where did you learn Astrology? */}
      <div className="col-span-1">
        <label className="block text-gray-700 font-semibold mb-1">
          From where did you learn Astrology?<span className="text-red-500">*</span>
        </label>
        <textarea
          rows="2"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Share your source of learning"
          {...register("astrologyLearningSource", { required: "This field is required" })}
        />
        {errors.astrologyLearningSource && <p className="text-red-500 text-sm">{errors.astrologyLearningSource.message}</p>}
      </div>

      {/* Social Media Links */}
      {["Instagram", "Facebook", "LinkedIn", "YouTube", "Website"].map((platform) => (
        <div className="col-span-1" key={platform}>
          <label className="block text-gray-700 font-semibold mb-1">
            {platform} profile link (optional):
          </label>
          <input
            type="url"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder={`Enter ${platform.toLowerCase()} profile link`}
            {...register(`${platform.toLowerCase()}Profile`)}
          />
        </div>
      ))}

      {/* Referred by someone */}
      <div className="col-span-1">
        <label className="block text-gray-700 font-semibold mb-1">
          Did anybody refer you to Myastro?<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("referredBy", { required: "This field is required" })}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.referredBy && <p className="text-red-500 text-sm">{errors.referredBy.message}</p>}
      </div>

      {/* Minimum charges per minute */}
      <div className="col-span-1">
        <label className="block text-gray-700 font-semibold mb-1">
          Minimum charges per minute from customer:<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          max="50"
          min="1"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter amount (max: 50)"
          {...register("minimumCharges", {
            required: "This field is required",
            validate: (value) => value <= 50 || "Must not exceed 50",
          })}
        />
        {errors.minimumCharges && <p className="text-red-500 text-sm">{errors.minimumCharges.message}</p>}
      </div>

      {/* Minimum Monthly Earning Expectation */}
      <div className="col-span-1">
        <label className="block text-gray-700 font-semibold mb-1">
          Minimum Monthly Earning Expectation from Myastro:<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          max="99999"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter expected earnings"
          {...register("monthlyEarnings", {
            required: "This field is required",
            maxLength: { value: 5, message: "Must not exceed 5 digits" },
          })}
        />
        {errors.monthlyEarnings && <p className="text-red-500 text-sm">{errors.monthlyEarnings.message}</p>}
      </div>

      {/* Are you currently working full-time? */}
      <div className="col-span-1">
        <label className="block text-gray-700 font-semibold mb-1">
          Are you currently working a full-time job?<span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("fullTimeJob", { required: "This field is required" })}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.fullTimeJob && <p className="text-red-500 text-sm">{errors.fullTimeJob.message}</p>}
      </div>

      {/* Long Bio with Word Count */}
      <div className="col-span-2">
        <label className="block text-gray-700 font-semibold mb-1">
          Long Bio:<span className="text-red-500">*</span>
        </label>
        <textarea
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type at least 50 words"
          {...register("longBio", {
            required: "This field is required",
            validate: (value) => value.trim().split(/\s+/).length >= 50 || "Minimum 50 words required",
          })}
          onChange={(e) => setWordCount(e.target.value.trim().split(/\s+/).length)}
        />
        <p className="text-gray-600 text-sm">Word Count: {wordCount}</p>
        {errors.longBio && <p className="text-red-500 text-sm">{errors.longBio.message}</p>}
      </div>
    </div>

    {/* Next Button */}
    <div className="flex justify-end mt-4">
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

{/* Bank details */}
{step === 5 && (
  <>
    <h2 className="text-lg font-bold text-center text-gray-800 mb-4">Bank Details</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* IFSC Code */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">IFSC Code<span className="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Enter IFSC Code"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("ifsc", { required: "IFSC Code is required" })}
        />
        {errors.ifsc && <p className="text-red-500 text-sm">{errors.ifsc.message}</p>}
      </div>

      {/* Bank Name */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Bank Name<span className="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Enter Bank Name"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("bankName", { required: "Bank Name is required" })}
        />
        {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName.message}</p>}
      </div>

      {/* Bank Branch */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Bank Branch<span className="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Enter Bank Branch"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("bankBranch", { required: "Bank Branch is required" })}
        />
        {errors.bankBranch && <p className="text-red-500 text-sm">{errors.bankBranch.message}</p>}
      </div>

      {/* Account Type */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Account Type<span className="text-red-500">*</span></label>
        <select
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("accountType", { required: "Account Type is required" })}
        >
          <option value="">Select Account Type</option>
          <option value="savings">Savings</option>
          <option value="current">Current</option>
        </select>
        {errors.accountType && <p className="text-red-500 text-sm">{errors.accountType.message}</p>}
      </div>

      {/* Account Number */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Account Number<span className="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Enter Account Number"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("accountNumber", { required: "Account Number is required" })}
        />
        {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber.message}</p>}
      </div>

      {/* Confirm Account Number */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Confirm Account Number<span className="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Confirm Account Number"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("confirmAccountNumber", {
            required: "Please confirm your account number",
            validate: (value) => value === watch("accountNumber") || "Account numbers do not match"
          })}
        />
        {errors.confirmAccountNumber && <p className="text-red-500 text-sm">{errors.confirmAccountNumber.message}</p>}
      </div>

      {/* Bank UPI ID */}
      <div className="md:col-span-2">
        <label className="block text-gray-700 font-semibold mb-1">Bank UPI ID (Optional)</label>
        <input
          type="text"
          placeholder="Enter UPI ID"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("upiId")}
        />
      </div>
    </div>

    {/* Next Button */}
    <div className="flex justify-end mt-6">
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

{/* upload documents */}
{step === 6 && (
        <>
          <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
            Upload Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Astrology Certificate */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Astrology Certificate<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  {...register("astrologyCertificate", {
                    required: "Astrology Certificate is required",
                    validate: {
                      size: (file) =>
                        file?.[0]?.size <= 2 * 1024 * 1024 ||
                        "File must be less than 2MB",
                    },
                  })}
                  onChange={(e) => handleFileChange("astrologyCertificate", e)}
                />
                <div
                  className={`w-full border rounded-lg px-4 py-2 ${
                    uploadedFields.astrologyCertificate
                      ? "bg-green-200 text-gray-800"
                      : "bg-white text-gray-600"
                  } cursor-pointer`}
                >
                  {uploadedFields.astrologyCertificate
                    ? "Uploaded"
                    : "Upload Astrology Certificate"}
                </div>
              </div>
              {errors.astrologyCertificate && (
                <p className="text-red-500 text-sm">
                  {errors.astrologyCertificate.message}
                </p>
              )}
            </div>

            {/* PAN Card */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                PAN Card<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  {...register("panCard", {
                    required: "PAN Card is required",
                    validate: {
                      size: (file) =>
                        file?.[0]?.size <= 2 * 1024 * 1024 ||
                        "File must be less than 2MB",
                    },
                  })}
                  onChange={(e) => handleFileChange("panCard", e)}
                />
                <div
                  className={`w-full border rounded-lg px-4 py-2 ${
                    uploadedFields.panCard
                      ? "bg-green-200 text-gray-800"
                      : "bg-white text-gray-600"
                  } cursor-pointer`}
                >
                  {uploadedFields.panCard ? "Uploaded" : "Upload PAN Card"}
                </div>
              </div>
              {errors.panCard && (
                <p className="text-red-500 text-sm">{errors.panCard.message}</p>
              )}
            </div>

            {/* Aadhaar Back */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Aadhaar Back<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  {...register("aadhaarBack", {
                    required: "Aadhaar Back is required",
                    validate: {
                      size: (file) =>
                        file?.[0]?.size <= 2 * 1024 * 1024 ||
                        "File must be less than 2MB",
                    },
                  })}
                  onChange={(e) => handleFileChange("aadhaarBack", e)}
                />
                <div
                  className={`w-full border rounded-lg px-4 py-2 ${
                    uploadedFields.aadhaarBack
                      ? "bg-green-200 text-gray-800"
                      : "bg-white text-gray-600"
                  } cursor-pointer`}
                >
                  {uploadedFields.aadhaarBack
                    ? "Uploaded"
                    : "Upload Aadhaar Back"}
                </div>
              </div>
              {errors.aadhaarBack && (
                <p className="text-red-500 text-sm">
                  {errors.aadhaarBack.message}
                </p>
              )}
            </div>

            {/* Aadhaar Front */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Aadhaar Front<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  {...register("aadhaarFront", {
                    required: "Aadhaar Front is required",
                    validate: {
                      size: (file) =>
                        file?.[0]?.size <= 2 * 1024 * 1024 ||
                        "File must be less than 2MB",
                    },
                  })}
                  onChange={(e) => handleFileChange("aadhaarFront", e)}
                />
                <div
                  className={`w-full border rounded-lg px-4 py-2 ${
                    uploadedFields.aadhaarFront
                      ? "bg-green-200 text-gray-800"
                      : "bg-white text-gray-600"
                  } cursor-pointer`}
                >
                  {uploadedFields.aadhaarFront
                    ? "Uploaded"
                    : "Upload Aadhaar Front"}
                </div>
              </div>
              {errors.aadhaarFront && (
                <p className="text-red-500 text-sm">
                  {errors.aadhaarFront.message}
                </p>
              )}
            </div>

            {/* Biodata (Optional) */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-1">
                Biodata (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  {...register("biodata", {
                    validate: {
                      size: (file) =>
                        !file?.[0] ||
                        file?.[0]?.size <= 2 * 1024 * 1024 ||
                        "File must be less than 2MB",
                    },
                  })}
                  onChange={(e) => handleFileChange("biodata", e)}
                />
                <div
                  className={`w-full border rounded-lg px-4 py-2 ${
                    uploadedFields.biodata
                      ? "bg-green-200 text-gray-800"
                      : "bg-white text-gray-600"
                  } cursor-pointer`}
                >
                  {uploadedFields.biodata ? "Uploaded" : "Upload Biodata"}
                </div>
              </div>
              {errors.biodata && (
                <p className="text-red-500 text-sm">{errors.biodata.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-[#9b57ed] hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </>
      )}





      </form>
    </div>
  );

}
