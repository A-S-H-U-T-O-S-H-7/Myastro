"use client"
import { Field, ErrorMessage, Formik, Form } from "formik";


const BankDetailsForm = ({ initialValues, onSubmit }) => {
 
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({  setFieldValue}) => (
        <Form className="bg-[#0e1726] p-6 rounded-lg space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* IFSC Code */}
         <div className="flex flex-col gap-2 relative">
           <label className="text-sm font-semibold text-gray-300">
             IFSC Code
           </label>
           <Field
             name="ifscCode"
             type="text"
             placeholder="Enter your IFSC Code"
             className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
             />
           
         </div>
         
                   {/* Bank Name */}
         <div className="flex flex-col gap-2 relative">
           <label className="text-sm font-semibold text-gray-300">
             Bank Name
           </label>
           <Field
             name="bankName"
             type="text"
             placeholder="Enter your Bank Name"
             className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
             />
           
         </div>
         
                  {/* Bank Branch */}
         <div className="flex flex-col gap-2 relative">
           <label className="text-sm font-semibold text-gray-300">
             Bank Branch
           </label>
           <Field
             name="bankBranch"
             type="text"
             placeholder="Enter your Bank Branch"
             className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
             />
           
         </div>
         
    {/* Account Type */}
<div className="flex flex-col gap-2">
  <label className="text-sm font-semibold text-gray-300">
    Account Type
  </label>
  <Field
    as="select"
    name="accountType"
    className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
    >
    <option value="">--Choose Account Type--</option>
    <option value="Savings">Savings</option>
    <option value="Current">Current</option>
  </Field>
  <ErrorMessage
    name="accountType"
    component="p"
    className="text-red-500 text-sm"
  />
</div>

                {/* Account Number */}
                <div className="flex flex-col gap-2 relative">
           <label className="text-sm font-semibold text-gray-300">
             Account Number
           </label>
           <Field
             name="accountNumber"
             type="text"
             placeholder="Enter your bank account number"
             className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
             />
           
         </div>
         
                   {/* UPI ID (Optional) */}
         <div className="flex flex-col gap-2 relative">
           <label className="text-sm font-semibold text-gray-300">
             Bank UPI ID
           </label>
           <Field
             name="bankUPI"
             type="text"
             placeholder="Enter your UPI ID (optional)"
             className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] "
             />
         </div>

         {/* Profit Sharing and Account Status */}
<div className="flex flex-col md:flex-row gap-4">
  {/* Profit Sharing Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Profit Sharing
    </label>
    <Field
      as="select"
      name="profitSharing"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">--Select Percentage--</option>
      <option value="30%">30%</option>
      <option value="40%">40%</option>
      <option value="50%">50%</option>
    </Field>
   
  </div>

  {/* Account Status Dropdown */}
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-semibold text-gray-300">
      Account Status
    </label>
    <Field
      as="select"
      name="accountStatus"
      className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    >
      <option value="">--Select Status--</option>
      <option value="Verified">Verified</option>
      <option value="Not Verified">Not Verified</option>
    </Field>
   
  </div>
</div>

{/* Comments */}
<div className="flex flex-col gap-2 mt-4">
  <label className="text-sm font-semibold text-gray-300">
    Comments
  </label>
  <Field
    as="textarea"
    name="comments"
    className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
    placeholder="Add your comments here..."
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

export default BankDetailsForm;