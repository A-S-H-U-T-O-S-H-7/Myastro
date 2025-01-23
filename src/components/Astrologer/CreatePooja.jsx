"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreatePooja = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  }

  // Yup Validation Schema
  const validationSchema = Yup.object().shape({
    poojaName: Yup.string().required("Title is required"),
    dateOfPooja: Yup.string().required("Date of Pooja is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number"),
    discount: Yup.number()
      .required("Discount is required")
      .min(0, "Discount cannot be negative")
      .max(100, "Discount cannot exceed 100%"),
    description: Yup.string().required("Description is required"),
    content: Yup.string().required("Content is required"),
  });

  // Form Initial Values
  const initialValues = {
    poojaName: "",
    dateOfPooja: "",
    price: "",
    discount: "",
    description: "",
    content: "",
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
                  Thumbnail
                </label>
                <div className="space-y-4 border border-dashed border-gray-800 dark:border-gray-300 py-4 px-4 rounded-md text-center">
      {!uploadedImage ? (
        <>
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
          <div className="flex justify-center text-sm text-gray-400">
            <label className="relative cursor-pointer border px-4 py-1 rounded-md bg-purple-500 dark:bg-cyan-400  font-medium text-white dark:text-black hover:text-black-300">
              Upload a file
              <input
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
        </>
      ) : (
        <div className="mt-4">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="mx-auto h-40 w-auto rounded-lg border border-gray-300"
          />
          <button
            onClick={() => setUploadedImage(null)}
            className="mt-2 text-sm text-cyan-400 hover:text-cyan-300"
          >
            Upload another file
          </button>
        </div>
      )}
    </div>
              </div>

              {/* Pooja Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Title
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

                {/* Price */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Price (₹)
                  </label>
                  <Field
                    name="price"
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="Enter price"
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Discount */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Discount (%)
                  </label>
                  <Field
                    name="discount"
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="Enter discount percentage"
                  />
                  <ErrorMessage
                    name="discount"
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

              {/* Content */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Content
                </label>
                <Field
                  as="textarea"
                  name="content"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Enter pooja content"
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500 text-sm"
                />
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
