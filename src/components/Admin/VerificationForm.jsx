"use client"
import { Field, Formik, Form } from "formik";
import { FaUpload } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";



const VerificationForm = ({ initialValues, onSubmit }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          console.log('Uploaded file:', file);
        }
      };
 
  return (
    <div>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({  setFieldValue}) => (
        <Form className="bg-[#0e1726] p-6 rounded-lg space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
   

<div className="flex flex-col md:flex-row gap-4">
  {/* Astrologer Name */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Astrologer Name
    </label>
    <Field
      name="fullName"
      type="text"
      placeholder="Astrologer Name"
      readOnly
      className="w-full bg-gray-400 text-gray-800 rounded-md px-4 py-3 focus:outline-none cursor-not-allowed"
    />
  </div>

  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
  {/* Astrologer Phone */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Astrologer Phone
    </label>
    <Field
      name="phone"
      type="text"
      placeholder="Astrologer Phone"
      readOnly
      className="w-full bg-gray-400 text-gray-800 rounded-md px-4 py-3 focus:outline-none cursor-not-allowed"
    />
  </div>

  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
  {/* Astrologer Email */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Astrologer Email
    </label>
    <Field
      name="email"
      type="text"
      placeholder="Astrologer Email"
      readOnly
      className="w-full bg-gray-400 text-gray-800 rounded-md px-4 py-3 focus:outline-none cursor-not-allowed"
    />
  </div>

  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
  {/* Astrologer UserName */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Astrologer UserName
    </label>
    <Field
      name="username"
      type="text"
      placeholder="Astrologer Username"
      readOnly
      className="w-full bg-gray-400 text-gray-800 rounded-md px-4 py-3 focus:outline-none cursor-not-allowed"
    />
  </div>

  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
  {/* Astrologer Pan no. */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Astrologer Pan no.
    </label>
    <Field
      name="pannumber"
      type="text"
      placeholder="Astrologer Pan no."
      readOnly
      className="w-full bg-gray-400 text-gray-800 rounded-md px-4 py-3 focus:outline-none cursor-not-allowed"
    />
  </div>

  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
  {/* Astrologer Aadhar No. */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Astrologer Aadhar No.
    </label>
    <Field
      name="adharnumber"
      type="text"
      placeholder="Astrologer Aadhar No."
      readOnly
      className="w-full bg-gray-400 text-gray-800 rounded-md px-4 py-3 focus:outline-none cursor-not-allowed"
    />
  </div>

  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
  {/* Astrologer Bank A/c No. */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Astrologer Bank A/C No.
    </label>
    <Field
      name="accountNumber"
      type="text"
      placeholder="Astrologer Bank A/C No."
      readOnly
      className="w-full bg-gray-400 text-gray-800 rounded-md px-4 py-3 focus:outline-none cursor-not-allowed"
    />
  </div>

  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>

<div className="flex flex-col md:flex-row gap-4">
 {/* Astrologer Photo */}
<div className="flex flex-col gap-2 w-full">
  <label className="text-sm font-semibold text-gray-300">
    Astrologer Photo
  </label>
  <div className="flex items-center gap-4">
    {/* Icon to view the image */}
    <IoDocumentTextOutline
      className="text-purple-500 w-[40px] h-[40px] cursor-pointer"
      onClick={() => window.open('/path-to-your-image.jpg', '_blank')}
    />

    {/* Upload button */}
    <label className="flex items-center gap-2 cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
      <FaUpload className="w-4 h-4" />
      <span>Upload</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileUpload(e)}
      />
    </label>
  </div>
</div>



  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
 {/* Astrologer PanCard */}
<div className="flex flex-col gap-2 w-full">
  <label className="text-sm font-semibold text-gray-300">
    Astrologer PanCard
  </label>
  <div className="flex items-center gap-4">
    {/* Icon to view the image */}
    <IoDocumentTextOutline
      className="text-purple-500 w-[40px] h-[40px] cursor-pointer"
      onClick={() => window.open('/path-to-your-image.jpg', '_blank')}
    />

    {/* Upload button */}
    <label className="flex items-center gap-2 cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
      <FaUpload className="w-4 h-4" />
      <span>Upload</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileUpload(e)}
      />
    </label>
  </div>
</div>



  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
 {/* Astrologer Aadhar Front */}
<div className="flex flex-col gap-2 w-full">
  <label className="text-sm font-semibold text-gray-300">
    Astrologer AadharFront
  </label>
  <div className="flex items-center gap-4">
    {/* Icon to view the image */}
    <IoDocumentTextOutline
      className="text-purple-500 w-[40px] h-[40px] cursor-pointer"
      onClick={() => window.open('/path-to-your-image.jpg', '_blank')}
    />

    {/* Upload button */}
    <label className="flex items-center gap-2 cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
      <FaUpload className="w-4 h-4" />
      <span>Upload</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileUpload(e)}
      />
    </label>
  </div>
</div>



  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
 {/* Astrologer Aadhar Back*/}
<div className="flex flex-col gap-2 w-full">
  <label className="text-sm font-semibold text-gray-300">
    Astrologer Aadhar Back
  </label>
  <div className="flex items-center gap-4">
    {/* Icon to view the image */}
    <IoDocumentTextOutline
      className="text-purple-500 w-[40px] h-[40px] cursor-pointer"
      onClick={() => window.open('/path-to-your-image.jpg', '_blank')}
    />

    {/* Upload button */}
    <label className="flex items-center gap-2 cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
      <FaUpload className="w-4 h-4" />
      <span>Upload</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileUpload(e)}
      />
    </label>
  </div>
</div>



  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>
<div className="flex flex-col md:flex-row gap-4">
 {/* Astrologer Cerificate */}
<div className="flex flex-col gap-2 w-full">
  <label className="text-sm font-semibold text-gray-300">
    Astrologer Certificate
  </label>
  <div className="flex items-center gap-4">
    {/* Icon to view the image */}
    <IoDocumentTextOutline
      className="text-purple-500 w-[40px] h-[40px] cursor-pointer"
      onClick={() => window.open('/path-to-your-image.jpg', '_blank')}
    />

    {/* Upload button */}
    <label className="flex items-center gap-2 cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
      <FaUpload className="w-4 h-4" />
      <span>Upload</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileUpload(e)}
      />
    </label>
  </div>
</div>



  {/* Verify Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Verify
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Yes</option>
      <option value="Not Verified">No</option>
    </Field>
  </div>
</div>

{/* Final Approval Dropdown */}
<div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
    Final Approval
    </label>
    <Field
      as="select"
      name="verifyStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">Choose</option>
      <option value="Verified">Approved</option>
      <option value="Not Verified">Rejected</option>
    </Field>
  </div>




          </div>
               
<div className="flex justify-center pt-10">
          <button
            type="submit"
            className="bg-red-500 flex justify-end text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Submit
          </button>
          </div>
        </Form>
      )}
    </Formik>

    <div className="rounded-md bg-[#0e1726] px-[20px] py-[25px] text-[#bfc9d4] mt-[20px] ">
<h2 className="text-xl">Delete Account</h2>
<p className=" mt-[40px] mb-[20px]">Once you delete the account, there is no going back. Please be certain.</p>
<button
            type="submit"
            className="bg-red-500 flex justify-end text-white  px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete Account
          </button>
    </div>
    </div>
  );
};

export default VerificationForm;
