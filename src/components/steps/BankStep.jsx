"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CloudHail } from 'lucide-react';
import ENV from '../Env';
function BankStep({ step, setStep, astrologerId }) {

    const [loader, setLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        ifscCode: "",
        bankName: "",
        bankBranch: "",
        accountType: "",
        accountNumber: "",
        confirmAccountNumber: "",
        bankUPI: "",
    });

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
    });

    const handleIFSC = async (ifsc, setFieldValue) => {
        try {
            setFieldValue("ifscCode", ifsc.toUpperCase());
            if (/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc.toUpperCase())) {
                const response = await fetch(`https://ifsc.razorpay.com/${ifsc.toUpperCase()}`, {
                    method: "GET",
                });
                const data = await response.json();
                if (response.ok) {
                    setFieldValue("bankName", data.BANK);
                    setFieldValue("bankBranch", data.BRANCH);
                } else {
                    console.log("Invalid IFSC");
                }
            } else {
                console.log("invalid")
            }

        } catch (error) {
            console.error(error);
        }

    }
    const handleSubmit = async (values) => {
        console.log(values)
        try {
            setLoader(true);
            setErrorMessage("");
            const response = await fetch(`${ENV.API_URL}/astrologer-step-form`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "step": 5,
                    "astrologer_id": astrologerId,
                    "ifsc": values.ifscCode,
                    "bankname": values.bankName,
                    "bankbranch": values.bankBranch,
                    "accounttype": values.accountType,
                    "accountnumber": values.accountNumber,
                    "bankupiid": values.bankUPI
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
            initialValues={{ ...formData }}
            validationSchema={bankDetailsSchema}
            onSubmit={(values) => handleSubmit(values)}
        >

            {({ values, setFieldValue, errors, touched }) => (
                <Form className="space-y-6 w-full max-w-4xl mx-auto bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff] shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 ">
                        BANK DETAILS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* IFSC Code */}
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-sm font-semibold text-gray-800">
                                IFSC Code<span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="ifscCode"
                                type="text"
                                placeholder="Enter your IFSC Code"
                                onChange={(e) => { handleIFSC(e.target.value, setFieldValue); }}
                                className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="ifscCode"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Bank Name */}
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-sm font-semibold text-gray-800">
                                Bank Name<span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="bankName"
                                type="text"
                                placeholder="Enter your Bank Name"
                                className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="bankName"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Bank Branch */}
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-sm font-semibold text-gray-800">
                                Bank Branch<span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="bankBranch"
                                type="text"
                                placeholder="Enter your Bank Branch"
                                className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="bankBranch"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Account Type */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-800">
                                Account Type<span className="text-red-500">*</span>
                            </label>

                            {/* Formik Select Dropdown */}
                            <Field
                                as="select"
                                name="accountType"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
                            >
                                <option value="" disabled>Select Bank</option>
                                <option value="saving">Saving</option>
                                <option value="current">Current</option>
                            </Field>

                            {/* Display Error Message */}
                            <ErrorMessage name="accountType" component="p" className="text-red-500 text-sm" />
                        </div>


                        {/* Account Number */}
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-sm font-semibold text-gray-800">
                                Account Number<span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="accountNumber"
                                type="password"
                                placeholder="Enter your bank account number"
                                className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                            <ErrorMessage
                                name="accountNumber"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        {/* Confirm Account Number */}
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-sm font-semibold text-gray-800">
                                Confirm Account Number<span className="text-red-500">*</span>
                            </label>
                            <Field
                                name="confirmAccountNumber"
                                type="text"
                                placeholder="Re-enter your bank account number"
                                className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Ensures only digits are entered.
                                }}
                            />
                            <ErrorMessage name="confirmAccountNumber" component="p" className="text-red-500 text-sm" />
                        </div>


                        {/* UPI ID (Optional) */}
                        <div className="flex flex-col gap-2 relative">
                            <label className="text-sm font-semibold text-gray-800">
                                Bank UPI ID
                            </label>
                            <Field
                                name="bankUPI"
                                type="text"
                                placeholder="Enter your UPI ID (optional)"
                                className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
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
    )
}

export default BankStep