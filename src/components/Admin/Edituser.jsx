"use client";
import { Field,  Formik, Form } from "formik";
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from "react-icons/io";

const Edituser = ({ initialValues, onSubmit }) => {
  return (
    <Formik initialValues={initialValues} 
    onSubmit={onSubmit}>

        
      {({ setFieldValue }) => (
        <Form className="bg-[#0e1726] mt-10 ml-[120px] mr-[15px] p-6 rounded-lg space-y-4">
            <h1 className="text-2xl text-center pb-10 font-bold text-[#22c7d5]">User Details</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* First Name */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                First Name
              </label>
              <Field
                name="firstName"
                type="text"
                placeholder="Enter your First Name"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
             
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Last Name
              </label>
              <Field
                name="lastName"
                type="text"
                placeholder="Enter your Last Name"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
              
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Mobile Number
              </label>
              <Field
                name="mobile"
                type="text"
                placeholder="Enter your Mobile Number"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
              
            </div>

             {/* Email */}
             <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your Email"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
             
            </div>

            {/* State */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                State
              </label>
              <Field
                name="state"
                type="text"
                placeholder="Enter your State"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
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
                placeholder="Enter your City"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
              
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Date of Birth
              </label>
              <Field
                name="dob"
                type="date"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
             
            </div>

            {/* Time of Birth */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Time of Birth
              </label>
              <Field
                name="tob"
                type="time"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
             
            </div>

            {/* Place of Birth */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Place of Birth
              </label>
              <Field
                name="pob"
                type="text"
                placeholder="Enter your Place of Birth"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
             
            </div>

            {/* Anniversary Date */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-gray-300">
                Anniversary Date
              </label>
              <Field
                name="anniversaryDate"
                type="date"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              />
              
            </div>

            {/* Zodiac Sign */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">
                Zodiac Sign
              </label>
              <Field
                as="select"
                name="zodiacSign"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              >
                <option value="">--Select Zodiac Sign--</option>
                <option value="Aries">Aries</option>
                <option value="Taurus">Taurus</option>
                <option value="Gemini">Gemini</option>
                <option value="Cancer">Cancer</option>
                <option value="Leo">Leo</option>
                <option value="Virgo">Virgo</option>
                <option value="Libra">Libra</option>
                <option value="Scorpio">Scorpio</option>
                <option value="Sagittarius">Sagittarius</option>
                <option value="Capricorn">Capricorn</option>
                <option value="Aquarius">Aquarius</option>
                <option value="Pisces">Pisces</option>
              </Field>
             
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">
                Gender
              </label>
              <Field
                as="select"
                name="gender"
                className="w-full bg-[#1b2e4b] text-[#22c7d5] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]"
              >
                <option value="">--Select Gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Field>
              
            </div>

           
          </div>

          <div className="pt-10 flex justify-center">
            <button
              type="submit"
              className="bg-[#22c7d5] text-white px-4 py-2 rounded-md hover:bg-[#27a0ab]"
            >
            Update
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Edituser;
