{step === 3 && (
<div>
<div className="w-full max-w-4xl bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff]  shadow-lg rounded-lg p-8 space-y-6">
     <h2 className="text-lg font-bold text-center text-gray-800 dark:text-white mb-4">
       SKILL DETAILS
     </h2>

     <Formik
       initialValues={{
         username: "",
         gender: "",
         dob: "",
         completeAddress: "",
         pincode: "",
         pannumber: "",
         adharnumber: "",
         maritalstatus: "",
         primaryskill: "",
         allskills: [],
         languages: [],
         dailycontributionhour: "",
         experience: "",
         wheredidyouhereaboutmyastro: "",
         workinginonlineplatform: "",
         platform: "",
       }}
       validationSchema={skillDetailsSchema}
       onSubmit={handleNext}
     >
       {({ values, setFieldValue }) => (

         <Form>
           {/* Profile Photo */}
           <div className="flex flex-col items-center space-y-2">
             <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500 dark:border-cyan-500">
               {profileImage ? (
                 <img
                   src={profileImage}
                   alt="Profile"
                   className="w-full h-full object-cover"
                 />
               ) : (
                 <span className="text-center w-full h-full flex items-center justify-center text-sm text-gray-500 dark:text-[#888ea8]">
                   Upload Photo
                 </span>
               )}
               <label
                 htmlFor="profileImage"
                 className="absolute bottom-0 right-0 bg-purple-500 dark:bg-cyan-500 text-white p-1 rounded-full cursor-pointer"
               >
                 <FaPen />
               </label>
               <input
                 id="profileImage"
                 type="file"
                 className="hidden"
                 onChange={handleImageUpload}
               />
             </div>
             <p className="text-red-500 text-sm">Profile pic*(jpg, png, jpeg only, Max-size 2MB)</p>
             <p className="text-gray-500 text-xs">
               Only Passport size photo is accepted
             </p>
           </div>

           {/* Responsive Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"> 
      {/* Full Name */}
  <div>
    <label className="block text-xs font-semibold mb-1 text-gray-800">
      Full Name<span className="text-red-500">*</span>
    </label>
    <Field
      name="username"
      type="text"
      placeholder="Enter your Name"
      className="w-full border border-gray-300 rounded-lg px-4 py-1"
    />
    <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Gender Dropdown */}
  <div className="relative">
    <label className="block font-semibold mb-1 text-gray-800">
      Gender<span className="text-red-500">*</span>
    </label>
    <div
      className="w-full border border-gray-300 bg-white  rounded-md px-4 py-1 flex items-center justify-between cursor-pointer"
      onClick={() => toggleDropdown("gender")}
    >
      <span>{values.gender ? values.gender : "Select Gender"}</span>
      {dropdownStates.gender ? <FaCaretUp /> : <FaCaretDown />}
    </div>
    {dropdownStates.gender && (
      <div className="absolute w-full bg-white dark:bg-[#1e2737] shadow-md rounded-md z-10">
        {["Male", "Female"].map((option) => (
          <div
            key={option}
            className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#2d3747] cursor-pointer"
            onClick={() => {
              setFieldValue("gender", option);
              toggleDropdown("gender");
            }}
          >
            {option}
          </div>
        ))}
      </div>
    )}
    <ErrorMessage name="gender" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Date of Birth */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Date of Birth<span className="text-red-500">*</span>
    </label>
    <Field
      name="dob"
      type="date"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="dob" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Country */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Country<span className="text-red-500">*</span>
    </label>
    <Field
      as="select"
      name="country"
      className="w-full border border-gray-300  rounded-md px-4 py-1"
    >
      <option value="India">India</option>
    </Field>
    <ErrorMessage name="country" component="p" className="text-red-500 text-sm" />
  </div>

  {/* State */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      State<span className="text-red-500">*</span>
    </label>
    <Field
      name="state"
      type="text"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="state" component="p" className="text-red-500 text-sm" />
  </div>

  {/* City */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      City<span className="text-red-500">*</span>
    </label>
    <Field
      name="city"
      type="text"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="city" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Complete Address */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Address<span className="text-red-500">*</span>
    </label>
    <Field
      name="completeAddress"
      type="text"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="completeAddress" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Pincode */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Pincode<span className="text-red-500">*</span>
    </label>
    <Field
      name="pincode"
      type="text"
      maxLength={6}
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="pincode" component="p" className="text-red-500 text-sm" />
  </div>

  {/* PAN Number */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      PAN Number<span className="text-red-500">*</span>
    </label>
    <Field
      name="pannumber"
      type="text"
      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="pannumber" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Aadhar Number */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Aadhar Number<span className="text-red-500">*</span>
    </label>
    <Field
      name="adharnumber"
      type="text"
      maxLength={12}
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="adharnumber" component="p" className="text-red-500 text-sm" />
  </div>
  
  {/* gst number */}
   <div>
     <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      GST (Optional)
    </label>
    <Field
      name="gst"
      type="text"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-1"
    />
    <ErrorMessage name="gst" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Marital Status Dropdown */}
  <div className="relative">
    <label className="block font-semibold mb-1 text-gray-800 ">
      Marital Status<span className="text-red-500">*</span>
    </label>
    <div
      className="w-full border border-gray-300 bg-white  rounded-md px-4 py-1 flex items-center justify-between cursor-pointer"
      onClick={() => toggleDropdown("maritalstatus")}
    >
      <span>{values.maritalstatus ? values.maritalstatus : "Select Status"}</span>
      {dropdownStates.maritalstatus ? <FaCaretUp /> : <FaCaretDown />}
    </div>
    {dropdownStates.maritalstatus && (
      <div className="absolute w-full bg-white  shadow-md rounded-md z-10">
        {["Single", "Married"].map((option) => (
          <div
            key={option}
            className="px-4 py-2 hover:bg-gray-200  cursor-pointer"
            onClick={() => {
              setFieldValue("maritalstatus", option);
              toggleDropdown("maritalstatus");
            }}
          >
            {option}
          </div>
        ))}
      </div>
    )}
    <ErrorMessage name="maritalstatus" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Primary Skill */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 dark:text-white">
      Primary Skill<span className="text-red-500">*</span>
    </label>
    <Field
      as="select"
      name="primaryskill"
      className="w-full border border-gray-300 dark:border-[#2d3747] rounded-md px-4 py-2"
    >
      <option value="">Select Primary Skill</option>
      {["Tarot", "Numerology", "Vastu", "Vedic"].map((skill) => (
        <option key={skill} value={skill}>
          {skill}
        </option>
      ))}
    </Field>
    <ErrorMessage name="primaryskill" component="p" className="text-red-500 text-sm" />
  </div>

 {/* All Skills Multi-Select */}
<div className="relative">
  <label className="block font-semibold mb-1 text-gray-800">
    All Skills<span className="text-red-500">*</span>
  </label>
  <div
    className="w-full border border-gray-300 bg-white rounded-md px-4 py-1 flex items-center flex-wrap gap-2 cursor-pointer"
    onClick={() => toggleDropdown("allskills")}
  >
    {values.allskills?.length > 0
      ? values.allskills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 border border-gray-300 rounded-full px-3 py-1 flex items-center gap-2"
          >
            {skill}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent dropdown toggle
                handleMultiSelect("allskills", skill, setFieldValue, values);
              }}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </span>
        ))
      : "Select Skills"}
    {dropdownStates.allskills && (
      <FaCaretUp className="ml-auto text-gray-500" />
    )}
  </div>
  <div ref={dropdownRef}>

  {dropdownStates.allskills && (
    <div className="absolute w-full bg-white shadow-md rounded-md z-10">
      {["Tarot", "Numerology", "Vastu", "Vedic"].map((skill) => (
        <div
          key={skill}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleMultiSelect("allskills", skill, setFieldValue, values)}
        >
          {skill}
        </div>
      ))}
    </div>
  )}
  </div>

  <ErrorMessage name="allskills" component="p" className="text-red-500 text-sm" />
</div>

{/* Languages Multi-Select */}
<div className="relative">
  <label className="block font-semibold mb-1 text-gray-800">
    Languages<span className="text-red-500">*</span>
  </label>
  <div
    className="w-full border border-gray-300 bg-white rounded-md px-4 py-1 flex items-center flex-wrap gap-2 cursor-pointer"
    onClick={() => toggleDropdown("languages")}
  >
    {values.languages?.length > 0
      ? values.languages.map((lang) => (
          <span
            key={lang}
            className="bg-gray-200 border border-gray-300 rounded-full px-3 py-1 flex items-center gap-2"
          >
            {lang}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent dropdown toggle
                handleMultiSelect("languages", lang, setFieldValue, values);
              }}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </span>
        ))
      : "Select Languages"}

      <div ref={dropdownRef}>

    {dropdownStates.languages && (
      <FaCaretUp className="ml-auto text-gray-500" />
    )}
  </div>
  {dropdownStates.languages && (
    <div className="absolute w-full bg-white shadow-md rounded-md z-10">
      {["Hindi", "English", "Odia"].map((lang) => (
        <div
          key={lang}
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleMultiSelect("languages", lang, setFieldValue, values)}
        >
          {lang}
        </div>
      ))}
    </div>
  )}
  </div>
  <ErrorMessage name="languages" component="p" className="text-red-500 text-sm" />
</div>


  {/* Daily Contribution Hours */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Daily Contribution Hours<span className="text-red-500">*</span>
    </label>
    <Field
      name="dailycontributionhour"
      type="number"
      min="1"
      max="20"
      className="w-full border border-gray-300  rounded-md px-4 py-1"
    />
    <ErrorMessage name="dailycontributionhour" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Experience */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Experience in Years<span className="text-red-500">*</span>
    </label>
    <Field
      name="experience"
      type="number"
      min="0"
      className="w-full border border-gray-300 ] rounded-md px-4 py-1"
    />
    <ErrorMessage name="experience" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Where Did You Hear About MyAstro */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Where Did You Hear About MyAstro?<span className="text-red-500">*</span>
    </label>
    <Field
      as="select"
      name="wheredidyouhereaboutmyastro"
      className="w-full border border-gray-300  rounded-md px-4 py-2"
    >
      <option value="">Select Source</option>
      {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((source) => (
        <option key={source} value={source}>
          {source}
        </option>
      ))}
    </Field>
    <ErrorMessage name="wheredidyouhereaboutmyastro" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Radio Buttons: Working on Other Platforms */}
  <div>
    <label className="block font-semibold mb-1 text-gray-800 ">
      Are You Working on Any Other Online Platform?<span className="text-red-500">*</span>
    </label>
    <div className="flex gap-4">
      <label className="flex items-center gap-2">
        <Field type="radio" name="workinginonlineplatform" value="yes" />
        Yes
      </label>
      <label className="flex items-center gap-2">
        <Field type="radio" name="workinginonlineplatform" value="no" />
        No
      </label>
    </div>
    <ErrorMessage name="workinginonlineplatform" component="p" className="text-red-500 text-sm" />
  </div>

  {/* Platform */}
  {values.workinginonlineplatform === "yes" && (
    <div>
      <label className="block font-semibold mb-1 text-gray-800 ">
        Platform<span className="text-red-500">*</span>
      </label>
      <Field
        name="platform"
        type="text"
        className="w-full border border-gray-300  rounded-md px-4 py-1"
      />
      <ErrorMessage name="platform" component="p" className="text-red-500 text-sm" />
    </div>
  )}

</div>


           {/* Submit/Back Buttons */}
           <div className="flex justify-between mt-6">
           
             <button
               type="submit"
               className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md"
             >
               Next
             </button>
           </div>

         </Form>
         
       )}
     </Formik>
</div>
   </div>
)} 