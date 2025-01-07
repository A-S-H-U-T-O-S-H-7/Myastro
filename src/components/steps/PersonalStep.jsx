"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ENV from '../Env';
import { BeatLoader } from 'react-spinners';
function PersonalStep({ step, setStep, formData, setFormData, astrologerId, setAstrologerId }) {

    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validationSchema = Yup.object({
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
        terms: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions"),
    });

    const handlePersonalDetails = async (values) => {
        try {
            setFormData({ ...values });
            setLoader(true);
            setErrorMessage("");
            const response = await fetch(`${ENV.API_URL}/astrologer-otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "mobile": values.phone
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setLoader(false);
                setStep(step + 1);
            } else {
                setErrorMessage(result.error || "Something went wrong.");
                setLoader(false);
            }
        } catch (error) {
            setErrorMessage("Error submitting data." + error.message);
            setLoader(false);
        }
    }
    return (
        <Formik
            initialValues={{
                fullName: "",
                email: "",
                phone: "",
                whatsapp: "",
                terms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => { handlePersonalDetails(values); }}
        >
            {({ isValid, touched }) => (
                <Form className="w-full max-w-4xl bg-gradient-to-br from-white via-[#f8f4ff] to-[#eae0ff] dark:bg-[#1e2737] shadow-2xl rounded-lg p-10 space-y-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800 ">
                        Personal Details
                    </h2>
                    {errorMessage && <span className='text-red-600 font-thin'>{errorMessage}</span>}
                    <div className="flex flex-col space-y-1">
                        <label className=" font-medium text-gray-700 ">
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
                    <div className="flex flex-col space-y-1">
                        <label className=" font-medium text-gray-700 dark:text-white">
                            Phone Number<span className="text-red-500">*</span>
                        </label>
                        <Field
                            name="phone"
                            type="text"
                             maxLength="10"
                            placeholder="Enter your phone number"
                            className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                        <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label className=" font-medium text-gray-700 dark:text-white">
                            WhatsApp Number<span className="text-red-500">*</span>
                        </label>
                        <Field
                            name="whatsapp"
                            type="text"
                             maxLength="10"
                            placeholder="Enter your WhatsApp number"
                            className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />
                        <ErrorMessage name="whatsapp" component="p" className="text-red-500 text-sm" />
                    </div>
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
                    <div className="flex justify-end">
                        <button disabled={loader} type='submit' className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded shadow-lg hover:shadow-xl hover:from-purple-500 hover:to-blue-500 transition">{loader ? (<BeatLoader color="#fff" />) : ("Next")}</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default PersonalStep;