"use client"
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ENV from '../Env';
import { AstrologerOtpSchema } from '../validations/AstrologerRegistrationValidation';
import { useAstrologer } from '@/lib/AstrologerRegistrationContext';
import { BeatLoader } from 'react-spinners';
function OtpStep() {

    const [otpTimer, setOtpTimer] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    const {
        personalData,
        step,
        setStep,
        loader,
        setLoader,
        errorMessage,
        setErrorMessage,
        setAstrologerId
    } = useAstrologer();


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

    const handleResendOTP = async() => {
        try {
            setLoader(true);
            setErrorMessage("");
            const response = await fetch(`${ENV.API_URL}/astrologer-registration-otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "mobile": personalData.phone,
                    "email": personalData.email
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setLoader(false);
            } else {
                setErrorMessage(result?.message);
                setLoader(false);
            }
        } catch (error) {
            setErrorMessage("Error submitting data." + error.message);
            setLoader(false);
        }
    }
    const handlePersonalDetails = async (values) => {
        try {
            setLoader(true);
            setErrorMessage("");
            const response = await fetch(`${ENV.API_URL}/astrologer-step-otp-verify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "step": 1,
                    "otp": Number(values.otp.trim()),
                    "fullname": personalData.fullName,
                    "email": personalData.email,
                    "mobilenumber": Number(personalData.phone),
                    "whatsappnumber": Number(personalData.whatsapp)
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setAstrologerId(result.astrologer_id);
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
            initialValues={{ otp: "" }}
            validationSchema={AstrologerOtpSchema}
            onSubmit={(values) => { handlePersonalDetails(values) }}
        >
            {({ isValid, touched }) => (
                <div className="w-full max-w-4xl bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff]  shadow-lg rounded-lg p-8 space-y-6">

                    <Form className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-800">
                            OTP VERIFICATION
                        </h2>
                        {errorMessage && <div className="text-red-700 text-center font-thin">{errorMessage}</div>}
                        <p className="text-gray-700 text-center mb-2">
                            OTP sent to{" "}
                            <span className="font-semibold text-green-600">
                                +91 {personalData?.phone}
                            </span>
                        </p>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-1">
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
                                className={`px-4 py-2 rounded-md shadow-md transition ${isResendDisabled
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
                                disabled={loader}
                                className={`bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300`}
                            >
                               {loader ? (<BeatLoader color="#fff" />) : ("Next")}
                            </button>
                        </div>

                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default OtpStep