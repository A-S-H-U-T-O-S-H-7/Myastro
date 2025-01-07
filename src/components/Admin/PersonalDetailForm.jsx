"use client"
import { Field, ErrorMessage, Formik, Form } from "formik";


const PersonalDetails = ({ initialValues, onSubmit }) => {
 
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue}) => (
        <Form className="bg-[#0e1726] p-6 rounded-lg space-y-4">
          <div className="flex flex-col gap-2 items-center">
  {/* Label */}
  <label className="text-sm font-semibold text-gray-300">Astrologer Photo</label>
  
  {/* Photo Preview Box */}
  <div className="w-40 h-40 bg-gray-800  border-2 border-[#22c7d5] rounded-md flex items-center justify-center overflow-hidden">
    {values.photo ? (
      <img
        src={URL.createObjectURL(values.photo)}
        alt="Astrologer Photo"
        className="w-full h-full object-cover"
      />
    ) : (
      <span className="text-white text-sm">No Photo Available</span>
    )}
  </div>
  
  {/* Change Button */}
  <button
    type="button"
    className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md text-sm focus:outline-none hover:bg-purple-600"
    onClick={() => document.getElementById("photoInput").click()}
  >
    Change
  </button>

  {/* Hidden File Input */}
  <input
    id="photoInput"
    type="file"
    name="photo"
    accept="image/*"
    className="hidden"
    onChange={(e) => setFieldValue("photo", e.target.files[0])}
  />
</div>

         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Full Name */}
             <div className="flex flex-col gap-2 relative">
              <label className=" text-sm font-semibold text-gray-300 ">
                Full Name
              </label>
              <Field
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 relative">
              <label className=" text-sm font-semibold text-gray-300">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2 relative">
              <label className="  text-sm font-semibold text-gray-300">
                Phone Number
              </label>
              <Field
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              />
            </div>

            {/* WhatsApp Number */}
            <div className="flex flex-col gap-2 relative">
              <label className="  text-sm font-semibold text-gray-300">
                WhatsApp Number
              </label>
              <Field
                name="whatsapp"
                type="text"
                placeholder="Enter your WhatsApp number"
                className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              />
            </div>

            {/* Gender Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Gender</label>
              <Field
                as="select"
                name="gender"
                className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
            </div>
          
           
            {/* Date of Birth */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Date of Birth
              </label>
              <Field
                name="dob"
                type="date"
                className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              />
              </div>
            {/* Country */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Country
              </label>
              <Field
                as="select"
                name="country"
                className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="India">India</option>
              </Field>
            </div>
            {/* State */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                State
              </label>
              <Field
                name="state"
                type="text"
                placeholder="Enter State"
                className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              />
            </div>
          
{/* City */}
<div className="flex flex-col gap-2 relative">
  <label className="text-sm font-semibold text-gray-300">
    City
  </label>
  <Field
    name="city"
    type="text"
    placeholder="Enter City"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    />
</div>

{/* Complete Address */}
<div className="flex flex-col gap-2 relative">
  <label className="text-sm font-semibold text-gray-300">
    Address
  </label>
  <Field
    name="completeAddress"
    type="text"
    placeholder="Enter your full address"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    />
</div>
{/* Pincode */}
<div className="flex flex-col gap-2 relative">
  <label className="text-sm font-semibold text-gray-300">
    Pincode
  </label>
  <Field
    name="pincode"
    type="text"
    maxLength={6}
    placeholder="Enter your 6-digit pincode"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    />
</div>

{/* PAN Number */}
<div className="flex flex-col gap-2 relative">
  <label className="text-sm font-semibold text-gray-300">
    PAN Number
  </label>
  <Field
    name="pannumber"
    type="text"
    maxLength={10}
    placeholder="Enter your PAN (e.g., ABCDE1234F)"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    onInput={(e) => {
      e.target.value = e.target.value.toUpperCase();
    }}
  />
</div>

{/* Aadhar Number */}
<div className="flex flex-col gap-2 relative">
  <label className="text-sm font-semibold text-gray-300">
    Aadhar Number
  </label>
  <Field
    name="adharnumber"
    type="text"
    maxLength={12}
    placeholder="Enter your 12-digit Aadhar number"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, ''); 
    }}
  />
</div>
{/* GST Number */}
<div className="flex flex-col gap-2 relative">
  <label className="text-sm font-semibold text-gray-300">
    GST (Optional)
  </label>
  <Field
    name="gst"
    type="text"
    placeholder="Enter your GST number (optional)"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    />
</div>
{/* Marital Status Dropdown */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold text-gray-300">Marital Status</label>
  <Field
    as="select"
    name="maritalstatus"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
  >
    <option value="">Select Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
  </Field>
  <ErrorMessage name="maritalstatus" component="p" className="text-red-500 text-sm" />
</div>

{/* Primary Skill Dropdown */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold text-gray-300">Primary Skill</label>
  <Field
    as="select"
    name="primaryskill"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
  >
    <option value="">Select Primary Skill</option>
    <option value="Tarot">Tarot</option>
    <option value="Numerology">Numerology</option>
    <option value="Vastu">Vastu</option>
    <option value="Vedic">Vedic</option>
  </Field>
  <ErrorMessage name="primaryskill" component="p" className="text-red-500 text-sm" />
</div>

{/* Radio Buttons: Working on Other Platforms */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold text-gray-300">
    Are You Working on Any Other Online Platform?
  </label>
  <div className="flex gap-6 items-center">
    <label className="flex items-center gap-2 text-sm text-gray-800">
      <Field
        type="radio"
        name="workinginonlineplatform"
        value="yes"
        className="text-[#22c7d5] focus:outline-none "
      />
      Yes
    </label>
    <label className="flex items-center gap-2 text-sm text-gray-800">
      <Field
        type="radio"
        name="workinginonlineplatform"
        value="no"
        className="text-[#22c7d5] focus:outline-none "
      />
      No
    </label>
  </div>
  
</div>
{/* platform */}
<div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-300">
      Platform
    </label>
    <Field
      name="platform"
      type="text"
      placeholder="Enter the platform name"
      className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
      />
   
  </div>
          </div>     
<div className="pt-10 flex justify-center ">
          <button
            type="submit"
            className="bg-red-500 flex justify-end text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Update
          </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
