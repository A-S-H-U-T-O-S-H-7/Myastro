"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreatePooja = () => {
  const [benefits, setBenefits] = useState(["", "", "", ""]);
  const [howItHappens, setHowItHappens] = useState(["", "", "", ""]);
  const [aboutPooja, setAboutPooja] = useState(["", "", "", ""]);

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    poojaName: Yup.string().required("Pooja Name is required"),
    dateOfPooja: Yup.string().required("Date of Pooja is required"),
    description: Yup.string().required("Description is required"),
    benefits: Yup.array()
      .of(Yup.string().required("Benefit cannot be blank"))
      .required(),
    howItHappens: Yup.array()
      .of(Yup.string().required("Step cannot be blank"))
      .required(),
    aboutPooja: Yup.array()
      .of(Yup.string().required("Point cannot be blank"))
      .required(),
  });

  // Form Initial Values
  const initialValues = {
    poojaName: "",
    dateOfPooja: "",
    description: "",
    benefits: benefits,
    howItHappens: howItHappens,
    aboutPooja: aboutPooja,
  };

  // Form Submit Handler
  const handleSubmit = (values) => {
    console.log("Form Submitted with values:", values);
    alert("Pooja created successfully!");
  };

  return (
    <div className="min-h-screen ml-[120px] mr-[10px] bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-full mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg">
        <div className="border-b border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-cyan-400">
            Create New Pooja
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="p-6 space-y-6">
              {/* Pooja Photo */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Pooja Photo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label className="relative cursor-pointer font-medium text-purple-600 dark:text-cyan-400 hover:text-purple-500 dark:hover:text-cyan-300">
                        Upload a file
                        <input type="file" className="sr-only" accept="image/*" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Pooja Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Pooja Name
                  </label>
                  <Field
                    name="poojaName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="Enter pooja name"
                  />
                  <ErrorMessage
                    name="poojaName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Date of Pooja
                  </label>
                  <Field
                    name="dateOfPooja"
                    type="datetime-local"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <ErrorMessage
                    name="dateOfPooja"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter pooja description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Benefits
                </label>
                {values.benefits.map((benefit, index) => (
                  <div key={index} className="space-y-2">
                    <Field
                      name={`benefits[${index}]`}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder={`Benefit ${index + 1}`}
                    />
                    <ErrorMessage
                      name={`benefits[${index}]`}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
              </div>

              {/* How It Happens */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  How Will It Happen
                </label>
                {values.howItHappens.map((step, index) => (
                  <div key={index} className="space-y-2">
                    <Field
                      name={`howItHappens[${index}]`}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder={`Step ${index + 1}`}
                    />
                    <ErrorMessage
                      name={`howItHappens[${index}]`}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
              </div>

              {/* About Pooja */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  About This Pooja
                </label>
                {values.aboutPooja.map((point, index) => (
                  <div key={index} className="space-y-2">
                    <Field
                      name={`aboutPooja[${index}]`}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      placeholder={`Point ${index + 1}`}
                    />
                    <ErrorMessage
                      name={`aboutPooja[${index}]`}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 dark:bg-cyan-500 text-white rounded-md hover:bg-purple-700 dark:hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:ring-offset-2"
                >
                  Create Pooja
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreatePooja;
