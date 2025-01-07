"use client"
import { Field, ErrorMessage, Formik, Form } from "formik";


const OtherDetailsForm = ({ initialValues, onSubmit }) => {
 
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue}) => (
        <Form className="bg-[#0e1726] p-6 rounded-lg space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

   {/* Main Source of Income Dropdown */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold text-gray-300">
    Main source of income (other than astrology)?
  </label>
  <Field
    as="select"
    name="mainIncomeSource"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    >
    <option value="">--Select Source Income--</option>
    <option value="Business">Business</option>
    <option value="Private Job">Private Job</option>
    <option value="Government Job">Government Job</option>
  </Field>
  
</div>


    {/* Highest Qualification Dropdown */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold text-gray-300">
    Select your highest qualification:
  </label>
  <Field
    as="select"
    name="highestQualification"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
  >
    <option value="">--Select Qualification--</option>
    <option value="10th">10th</option>
    <option value="12th">12th</option>
    <option value="Graduate">Graduate</option>
    <option value="Post Graduate">Post Graduate</option>
    <option value="PhD">PhD</option>
  </Field>
  <ErrorMessage
    name="highestQualification"
    component="p"
    className="text-red-500 text-sm"
  />
</div>


      {/* From where did you learn Astrology? */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-300">
          From where did you learn Astrology?:
        </label>
        <Field
          name="learnAstrology"
          type="text"
          placeholder="From where did you learn Astrology..."
          className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
          />
       
      </div>

      {/* Social Media Links */}
      {["Instagram", "Facebook", "LinkedIn", "YouTube", "Website"].map(
        (platform) => (
          <div className="flex flex-col gap-2" key={platform}>
            <label className="text-sm font-semibold text-gray-300">
              {platform} profile link (optional):
            </label>
            <Field
              name={`${platform.toLowerCase()}Link`}
              type="text"
              placeholder={`Enter your ${platform} profile link...`}
              className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
              />
          </div>
        )
      )}

      {/* Minimum charges per minute */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-300">
          Minimum charges per minute from customer:
        </label>
        <Field
          name="minCharges"
          type="number"
          placeholder="Enter Minimum charges per minute..."
          className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
        />
       
      </div>

      {/* Monthly Earning Expectation */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-300">
          Monthly Earning Expectation from Myastro:
        </label>
        <Field
          name="minEarnings"
          type="number"
          placeholder="Enter Expected Monthly Earning ..."
          className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
        />
        
      </div>

      {/* Full-Time Job Dropdown */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold text-gray-300">
    Are you currently working a full-time job?
  </label>
  <Field
    as="select"
    name="fulltimeJob"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    >
    <option value="">--Select Option--</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </Field>
  <ErrorMessage
    name="fulltimeJob"
    component="p"
    className="text-red-500 text-sm"
  />
</div>


     {/* Long Bio */}
<div className="flex flex-col gap-2">
  <label className="block text-sm font-semibold mb-1 text-gray-300">
    Long Bio:
    <span className="text-sm text-gray-500 mt-1">
      Word Count:{" "}
      {values.longBio?.trim()
        ? values.longBio.trim().split(/\s+/).length
        : 0}
    </span>
  </label>
  <Field
    as="textarea"
    name="longBio"
    className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
  />
</div>




          </div>
         
             
          <div className="pt-10 flex justify-center">

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

export default OtherDetailsForm;
