"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ENV from '../Env';
import { AdditionalDetailsSchema } from '../validations/AstrologerRegistrationValidation';
import { useAstrologer } from '@/lib/AstrologerRegistrationContext';
function OtherStep() {
    const {
        otherData,
        setOtherData,
        step,
        setStep,
        astrologerId,
        loader,
        setLoader,
        errorMessage,
        setErrorMessage
    } = useAstrologer();


    const handleSubmit = async (values) => {
        try {
            setLoader(true);
            setErrorMessage("");
            setOtherData(values)
            const response = await fetch(`${ENV.API_URL}/astrologer-step-form`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "step": 4,
                    "astrologer_id": astrologerId,
                    "whyweonboardyou": values.whyOnboard,
                    "sourceofincome": values.mainIncomeSource,
                    "highestqualification": values.highestQualification,
                    "whereyoulearnastrology": values.learnAstrology,
                    "Instagramlink": values.instalink,
                    "facebooklink": values.facebooklink,
                    "youtubelink": values.linkedinlink,
                    "linkedinlink": values.youtubelink,
                    "website": values.websitelink,
                    "referedbysomeone": values.referredBySomeone,
                    "minimumcharges": Number(values.minCharges),
                    "minimummonthlyearning": Number(values.minEarnings),
                    "currentlyworkingonline": values.fulltimeJob,
                    "longbio": values.longBio
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
                ...otherData
            }}
            validationSchema={AdditionalDetailsSchema}
            onSubmit={(values) => { handleSubmit(values); }}
        >
            {({ values, setFieldValue, errors, isValid, touched }) => (
                <div className="w-full max-w-4xl bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff] shadow-lg rounded-lg p-8 space-y-6">
                    <Form className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 ">
                            ADDITIONAL DETAILS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {/* Why do you think we should onboard you */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800">
                                    Why do you think we should onboard you?:
                                    <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="whyOnboard"
                                    type="text"
                                    placeholder="Why do you think we should onboard you..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                                <ErrorMessage
                                    name="whyOnboard"
                                    component="p"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/* Main source of income (other than astrology) */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800">
                                    Main Income Source<span className="text-red-500">*</span>
                                </label>

                                {/* Formik Select Dropdown */}
                                <Field
                                    as="select"
                                    name="mainIncomeSource"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="Own Business">Own Business</option>
                                    <option value="Private Job">Private Job</option>
                                    <option value="Government Job">Government Job</option>
                                </Field>

                                {/* Display Error Message */}
                                <ErrorMessage name="gender" component="p" className="text-red-500 text-sm" />
                            </div>


                            {/* Highest Qualification */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800">
                                    Select your highest qualification<span className="text-red-500">*</span>
                                </label>

                                {/* Formik Select Dropdown */}
                                <Field
                                    as="select"
                                    name="highestQualification"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="10th">10th</option>
                                    <option value="12th">12th</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="Post Graduate">Post Graduate</option>
                                    <option value="PhD">PhD</option>
                                </Field>

                                {/* Display Error Message */}
                                <ErrorMessage name="highestQualification" component="p" className="text-red-500 text-sm" />
                            </div>


                            {/* From where did you learn Astrology? */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800">
                                    From where did you learn Astrology?:
                                    <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="learnAstrology"
                                    type="text"
                                    placeholder="From where did you learn Astrology..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                                <ErrorMessage
                                    name="learnAstrology"
                                    component="p"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/* Instagram profile link (optional): */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800">
                                    Instagram Profile Link (optional)
                                </label>
                                <Field
                                    name="instalink"
                                    type="text"
                                    placeholder="Enter your Instagram profile link..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                            </div>

                            {/*Facebook profile link (optional): */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800 ">
                                    Facebook profile link (optional):

                                </label>
                                <Field
                                    name="facebooklink"
                                    type="text"
                                    placeholder="Enter your Facebook profile link..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                            </div>

                            {/* LinkedIn profile link (optional): */}
                            <div className="flex flex-col gap-2">
                                <label className=" text-sm font-semibold text-gray-800 ">
                                    LinkedIn profile link (optional):

                                </label>
                                <Field
                                    name="linkedinlink"
                                    type="text"
                                    placeholder="Enter your LinkedIn link..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                            </div>

                            {/* Youtube channel link (optional): */}
                            <div className="flex flex-col gap-2">
                                <label className=" text-sm font-semibold text-gray-800 ">
                                    Youtube channel link (optional):

                                </label>
                                <Field
                                    name="youtubelink"
                                    type="text"
                                    placeholder="Enter your Youtube link..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                            </div>
                            {/*Website profile link (optional): */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800 ">
                                    Website profile link (optional):

                                </label>
                                <Field
                                    name="websitelink"
                                    type="text"
                                    placeholder="Enter your Website link.."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                            </div>

                            {/* Minimum charges per minutes from customer*/}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800 ">
                                    Minimum charges per minutes from customer:
                                    <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="minCharges"
                                    type="number"
                                    placeholder="Enter Minimum charges per minute..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                                <ErrorMessage
                                    name="minCharges"
                                    component="p"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/*Minimum Monthly Earning Expectation from Myastro*/}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800  ">
                                    Monthly Earning Expectation from Myastro:
                                    <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    name="minEarnings"
                                    type="number"
                                    placeholder="Enter Expected Monthly Earning ..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                />
                                <ErrorMessage
                                    name="minEarnings"
                                    component="p"
                                    className="text-red-500 text-sm"
                                />
                            </div>

                            {/* Are you currently working a full-time job */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800">
                                    Are you currently working a full-time job?<span className="text-red-500">*</span>
                                </label>

                                {/* Formik Select Dropdown */}
                                <Field
                                    as="select"
                                    name="fulltimeJob"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Field>

                                {/* Display Error Message */}
                                <ErrorMessage name="fulltimeJob" component="p" className="text-red-500 text-sm" />
                            </div>


                            {/* Did anybody refer you to Myastro? */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-800">
                                    Did anybody refer you to Myastro?:<span className="text-red-500">*</span>
                                </label>

                                {/* Formik Select Dropdown */}
                                <Field
                                    as="select"
                                    name="referredBySomeone"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Field>

                                {/* Display Error Message */}
                                <ErrorMessage name="referredBySomeone" component="p" className="text-red-500 text-sm" />
                            </div>


                            {/* words */}
                            <div className="flex flex-col gap-2">
                                <label className="block text-sm font-semibold mb-1 text-gray-800 ">
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

                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg"
                                onClick={() => setStep(step - 1)}
                            >
                                Previous
                            </button>
                            <button
                                type="submit"
                                className={`bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 ${isValid && touched ? "hover:shadow-xl" : "opacity-50 cursor-not-allowed"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    )
}


export default OtherStep