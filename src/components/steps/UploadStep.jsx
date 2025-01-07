"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ENV from '../Env';
import { useRouter } from 'next/navigation';

function UploadStep({ step, setStep, astrologerId }) {
    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
     const router = useRouter();
    // File upload validation schema
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

    // Handle image upload
    const handleImageUpload = async (e, setFieldValue) => {
        e.preventDefault();
        const file = e.target.files[0];
        const fieldName = e.target.name;
        setFieldValue(fieldName, file);

        if (file) {
            const validTypes = ["image/jpeg", "image/jpg", "image/png"];
            const maxSize = 2 * 1024 * 1024;

            if (!validTypes.includes(file.type)) {
                setErrorMessage("Invalid file type. Only jpg, jpeg, and png formats are allowed.");
                return;
            }

            if (file.size > maxSize) {
                setErrorMessage("File size exceeds 2MB. Please upload a smaller file.");
                return;
            }

            setLoader(true);


            const uploadFile = async (endpoint) => {

                const uploadField = {
                    "astrologer-upload-certificate": "astrologyCertificate",
                    "astrologer-upload-biodata": "biodata",
                    "astrologer-upload-pancard": "panCard",
                    "astrologer-upload-aadhar-front": "aadharFront",
                    "astrologer-upload-aadhar-back": "aadharBack"
                };
                try {
                    const formData = new FormData();
                    formData.append(uploadField[endpoint], file);
                    console.log(uploadField[endpoint])
                    setErrorMessage("");
                    const response = await fetch(`${ENV.API_URL}/${endpoint}/${astrologerId}`, {
                        method: "POST",
                        headers: {
                            "Accept": "application/json"
                        },
                        body: formData,
                    });

                    const result = await response.json();

                    if (!response.ok) {
                        setErrorMessage(result.error || "Something went wrong.");
                    } else {
                        if (fieldName === "aadharBack") {

                        }
                    }
                } catch (error) {
                    setErrorMessage("Error submitting data: " + error.message);
                } finally {
                    setLoader(false);
                }
            };
            switch (fieldName) {
                case "astrologyCertificate":
                    uploadFile("astrologer-upload-certificate");
                    break;
                case "biodata":
                    uploadFile("astrologer-upload-biodata");
                    break;
                case "panCard":
                    uploadFile("astrologer-upload-pancard");
                    break;
                case "aadharFront":
                    uploadFile("astrologer-upload-aadhar-front");
                    break;
                case "aadharBack":
                    uploadFile("astrologer-upload-aadhar-back");
                    break;
                default:
                    setErrorMessage("Unknown field name.");
                    setLoader(false);
            }
        }
    };
    const handleFinal = async () => {
        try {
            setErrorMessage("");
            setLoader(true);
            const response = await fetch(`${ENV.API_URL}/astrologer-final-check/${astrologerId}`, {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    step: 6
                })
            });
            const result = await response.json();
            if (!response.ok) {
                setErrorMessage(result.error || "Something went wrong.");
            } else {
              router.push('/astrologer-thankyou');
            }
        } catch (error) {
            setErrorMessage("Error submitting data: " + error.message);
            setLoader(false);
        }
    }
    return (
        <Formik
            initialValues={{
                astrologyCertificate: null,
                biodata: null,
                panCard: null,
                aadharFront: null,
                aadharBack: null,
            }}
            validationSchema={uploadDocumentsSchema}
            onSubmit={(values) => handleFinal()}
        >
            {({ setFieldValue, values, errors, touched }) => (
                <Form className="space-y-6 w-full max-w-4xl mx-auto bg-gradient-to-b from-white via-[#f3f4f6] to-[#eae0ff] shadow-lg rounded-lg p-8">
                    <h2 className="text-lg font-bold text-center text-gray-800 mb-6">
                        UPLOAD DOCUMENTS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* File Upload Boxes */}
                        {[{
                            name: "astrologyCertificate",
                            label: "Astrology Certificate*",
                            type: "pdf or JPG",
                            icon: "/certificate.png",
                        },
                        {
                            name: "biodata",
                            label: "Biodata (Optional)",
                            type: "PDF or JPG",
                            icon: "/personal-data.png",
                        },
                        {
                            name: "panCard",
                            label: "Pan Card*",
                            type: "JPG or JPEG",
                            icon: "/pancard.webp",
                        },
                        {
                            name: "aadharFront",
                            label: "Aadhar Front*",
                            type: "JPG or JPEG",
                            icon: "/adharfront.png",
                        },
                        {
                            name: "aadharBack",
                            label: "Aadhar Back*",
                            type: "JPG or JPEG",
                            icon: "/adharfront.png",
                        }
                        ].map((field) => (
                            <div
                                key={field.name}
                                className="flex flex-col space-y-2 bg-white shadow-md rounded-lg p-4 border border-gray-200"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={field.icon}
                                        alt={`${field.label} icon`}
                                        className="w-10 h-10"
                                    />
                                    <div>
                                        <label className="text-sm font-semibold text-gray-800">
                                            {field.label}
                                        </label>
                                        <p className="text-xs text-orange-500">
                                            Upload {field.type} files. Maximum file size: 2MB.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <input
                                        type="file"
                                        id={field.name}
                                        name={field.name}
                                        accept={field.type.includes("JPG")
                                            ? "image/jpeg"
                                            : "application/pdf, image/jpeg"
                                        }
                                        className="hidden"
                                        onChange={(e) => handleImageUpload(e, setFieldValue)}
                                    />
                                    <label
                                        htmlFor={field.name}
                                        className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ${values[field.name]
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
                            Submit
                        </button>
                    </div>

                    {errorMessage && (
                        <div className="mt-4 text-red-500 text-center">
                            {errorMessage}
                        </div>
                    )}

                    {loader && (
                        <div className="mt-4 text-center">
                            <p>Loading...</p>
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
}

export default UploadStep;
