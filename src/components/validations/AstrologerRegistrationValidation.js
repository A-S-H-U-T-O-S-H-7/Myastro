import * as Yup from "yup";

const PersonalValidationSchema = Yup.object({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Full Name must only contain letters and spaces")
    .required("Full Name is required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Must be exactly 10 digits")
    .required("Phone number is required"),
  whatsapp: Yup.string()
    .matches(/^\d{10}$/, "Must be exactly 10 digits")
    .required("WhatsApp number is required"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});
const AstrologerOtpSchema = Yup.object({
  otp: Yup.string()
    .trim()
    .matches(/^\d{6}$/, "OTP must be exactly 6 digits and numeric")
    .required("OTP is required"),
});
const SkillDetailsSchema = Yup.object().shape({
  profileImage: Yup.string().trim().required("Profile photo is required"),
  username: Yup.string().trim().required("Full Name is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("Date of Birth is required"),
  state: Yup.string().trim().required("State is required"),
  city: Yup.string().trim().required("City is required"),
  completeAddress: Yup.string().trim().required("Complete Address is required"),
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
    .of(Yup.string().trim())
    .min(1, "At least one skill must be selected"),
  languages: Yup.array()
    .of(Yup.string().trim())
    .min(1, "At least one language must be selected"),
  dailycontributionhour: Yup.number()
    .min(1, "Must be at least 1 hour")
    .max(20, "Cannot exceed 20 hours")
    .required("Contribution hours are required"),
  experience: Yup.number()
    .min(0, "Experience cannot be negative")
    .max(99, "Experience cannot exceed 99 years")
    .required("Experience is required"),
  wheredidyouhereaboutmyastro: Yup.string().required("Please select a source"),
  workinginonlineplatform: Yup.string().required(
    "Please indicate if you are working on another platform"
  ),
});
const AdditionalDetailsSchema = Yup.object().shape({
  minCharges: Yup.number()
    .required("Minimum charges are required")
    .min(5, "Minimum charge must be at least 5")
    .max(50, "maximum charge must be at least 50"),

  whyOnboard: Yup.string()
    .required("Please tell us why you should be onboarded")
    .min(10, "Minimum 10 characters required"),
  mainIncomeSource: Yup.string().required(
    "Please select your main income source"
  ),
  highestQualification: Yup.string().required(
    "Please select your highest qualification"
  ),
  learnAstrology: Yup.string().required(
    "Please specify where you learned astrology"
  ),
  minEarnings: Yup.number().required("Minimum monthly earnings are required"),
  fulltimeJob: Yup.string().required(
    "Please specify if you have a full-time job"
  ),
  longBio: Yup.string()
    .required("Please provide a long bio")
    .min(50, "Long bio must be at least 50 words"),
});
const BankDetailsSchema = Yup.object().shape({
  ifscCode: Yup.string().required("IFSC Code is required"),

  bankName: Yup.string().required("Bank Name is required"),
  bankBranch: Yup.string().required("Bank Branch is required"),
  accountType: Yup.string().required("Account Type is required"),
  accountNumber: Yup.string()
    .required("Account number is required")
    .matches(/^\d{9,18}$/, "Enter a valid account number"),
  confirmAccountNumber: Yup.string()
    .oneOf([Yup.ref("accountNumber")], "Account numbers must match")
    .required("Confirm account number is required"),
});
const UploadDocumentsSchema = Yup.object().shape({
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
export {
  PersonalValidationSchema,
  AstrologerOtpSchema,
  SkillDetailsSchema,
  AdditionalDetailsSchema,
  BankDetailsSchema,
  UploadDocumentsSchema
};
