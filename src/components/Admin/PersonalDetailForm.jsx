"use client";
import { Field, ErrorMessage, Formik, Form } from "formik";
import { MultiSelect } from "react-multi-select-component";
import { useState, useEffect } from "react";
import ENV from "../Env";
import { BeatLoader } from "react-spinners"
const PersonalDetails = ({ initialValues, activeTab, setActiveTab, astrologerid }) => {

  const skillsOptions = [
    { label: "Vedic", value: "Vedic" },
    { label: "Nadi", value: "Nadi" },
    { label: "Numerology", value: "Numerology" },
    { label: "Vastu", value: "Vastu" },
    { label: "Prashana", value: "Prashana" },
    { label: "KP", value: "KP" },
    { label: "Lal Kitab", value: "Lal Kitab" },
    { label: "Western", value: "Western" },
    { label: "Tarot", value: "Tarot" },
    { label: "Palmistry", value: "Palmistry" },
    { label: "Horary", value: "Horary" },
    { label: "Face Reading", value: "Face Reading" },
    { label: "Psychic", value: "Psychic" },
    { label: "Life Coach", value: "Life Coach" },
    { label: "Cartomancy", value: "Cartomancy" },
    { label: "Loshu Grid", value: "Loshu Grid" },
    { label: "Psychologist", value: "Psychologist" }
  ];
  const languageOptions = [
    { label: "English", value: "english" },
    { label: "Hindi", value: "hindi" },
    { label: "Bengali", value: "bengali" },
    { label: "Telugu", value: "telugu" },
    { label: "Marathi", value: "marathi" },
    { label: "Tamil", value: "tamil" },
    { label: "Urdu", value: "urdu" },
    { label: "Kannada", value: "kannada" },
    { label: "Gujarati", value: "gujarati" },
    { label: "Odia", value: "odia" },
    { label: "Malayalam", value: "malayalam" },
    { label: "Punjabi", value: "punjabi" },
    { label: "Assamese", value: "assamese" },
    { label: "Maithili", value: "maithili" }
  ];

  const [skillSelected, setSkillSelected] = useState([]);
  const [languageSelected, setLanguageSelected] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(initialValues.country);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(initialValues.state);
  const [cities, setCities] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setSkillSelected(
      initialValues.allskills.map((skill) => ({ label: skill, value: skill }))
    );
    setLanguageSelected(
      initialValues.languages.map((language) => ({ label: language, value: language }))
    );
  }, [initialValues]);

  // countries api
  const fetchCountries = async () => {
    try {
      const response = await fetch(`${ENV.API_URL}/countries`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching countries");
      }

      const data = await response.json();

      setCountries(data.countries);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchStates = async (country) => {
    try {
      const response = await fetch(`${ENV.API_URL}/states/${selectedCountry}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching states");
      }

      const data = await response.json();
      setStates(data.states);
    } catch (error) {
    }
  };

  useEffect(() => {
    if (selectedCountry) {
      fetchStates(selectedCountry);
    }
  }, [selectedCountry]);

  const fetchCities = async (state) => {
    try {
      const response = await fetch(`${ENV.API_URL}/cities/${selectedState}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching cities");
      }

      const data = await response.json();
      setCities(data.cities);
    } catch (error) {
    }
  };

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
    }
  }, [selectedState]);

  const handleSubmit = async (values) => {
    try {
      setLoader(true);
      const data = await fetch(`${ENV.API_URL}/admin/astrologer/personal-detail-update/${astrologerid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("myastro-token")}`
        },
        body: JSON.stringify({
          "step": 3,
          "astrologer_id": astrologerid,
          "username": values.username,
          "gender": values.gender,
          "dob": values.dob,
          "address": {
            "country": values.country,
            "state": values.state,
            "city": values.city
          },
          "completeAddress": values.completeAddress,
          "pincode": values.pincode,
          "pannumber": values.pannumber,
          "adharnumber": values.adharnumber,
          "gst": values.gst,
          "maritalstatus": values.maritalstatus,
          "primaryskill": values.primaryskill,
          "allskills": values.allskills,
          "languages": values.languages,
          "dailycontributionhour": values.dailycontributionhour,
          "experience": values.experience,
          "wheredidyouhereaboutmyastro": values.wheredidyouhereaboutmyastro,
          "workinginonlineplatform": values.workingotherplatform,
          "platform": values.platform
        })
      });
      if (!data.ok) {
        throw new Error("Failed to update astrologer details");
      }
      const json = await data.json();
      if (json.status) {
        setLoader(false)
        setActiveTab(preval => preval + 1);
      } else {
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
    }
  }
  return <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values)}>
    {({ values, setFieldValue }) => <Form className="bg-[#0e1726] p-6 rounded-lg space-y-4">
      <div className="flex flex-col gap-2 items-center">
        {/* Label */}
        <label className="text-sm font-semibold text-gray-300">
          Astrologer Photo
        </label>

        {/* Photo Preview Box */}
        <div className="w-40 h-40 bg-gray-800  border-2 border-[#22c7d5] rounded-md flex items-center justify-center overflow-hidden">
          <img
            src={initialValues.photo}
            alt="Astrologer Photo"
            className="w-full h-full object-cover rounded-md"
          />

        </div>

        {/* Change Button */}
        <button type="button" className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md text-sm focus:outline-none hover:bg-purple-600" onClick={() => document
          .getElementById("photoInput")
          .click()}>
          Change
        </button>

        {/* Hidden File Input */}
        <input id="photoInput" type="file" name="photo" accept="image/*" className="hidden" onChange={e => setFieldValue("photo", e.target.files[0])} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2 relative">
          <label className=" text-sm font-semibold text-gray-300 ">
            Full Name
          </label>
          <Field name="fullName" type="text" placeholder="Enter your full name" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 relative">
          <label className=" text-sm font-semibold text-gray-300">
            Email
          </label>
          <Field name="email" type="email" placeholder="Enter your email" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2 relative">
          <label className="  text-sm font-semibold text-gray-300">
            Phone Number
          </label>
          <Field name="phone" type="text" placeholder="Enter your phone number" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " />
        </div>

        {/* WhatsApp Number */}
        <div className="flex flex-col gap-2 relative">
          <label className="  text-sm font-semibold text-gray-300">
            WhatsApp Number
          </label>
          <Field name="whatsapp" type="text" placeholder="Enter your WhatsApp number" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " />
        </div>

        {/* Gender Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-300">
            Gender
          </label>
          <Field as="select" name="gender" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] ">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Field>
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            Date of Birth
          </label>
          <Field name="dob" type="date" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            Country
          </label>
          <Field as="select" name="country" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " onChange={e => {
            setFieldValue("country", e.target.value);
            setSelectedCountry(e.target.value);
          }}>
            <option value="">Select Country</option>
            {countries.map(countryI =>
              <option key={countryI._id} value={countryI.name}>
                {countryI.name}
              </option>
            )}
          </Field>
        </div>
        {/* State */}
        <div className="flex flex-col gap-2 relative ">
          <label className="text-sm font-semibold text-gray-300">
            State
          </label>
          <Field as="select" name="state" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " onChange={e => {
            setFieldValue("state", e.target.value);
            setSelectedState(e.target.value);
          }}>
            <option value="">Select State</option>
            {states.map(state =>
              <option key={state._id} value={state.name}>
                {state.name}
              </option>
            )}
          </Field>
        </div>

        {/* City */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            City
          </label>
          <Field as="select" name="city" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " onChange={e => setFieldValue("city", e.target.value)}>
            <option value="">Select City</option>
            {cities.map(city => <option key={city._id} value={city.name}>
              {city.name}
            </option>)}
          </Field>
        </div>

        {/* Complete Address */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            Address
          </label>
          <Field name="completeAddress" type="text" placeholder="Enter your full address" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " />
        </div>
        {/* Pincode */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            Pincode
          </label>
          <Field name="pincode" type="text" maxLength={6} placeholder="Enter your 6-digit pincode" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " />
        </div>

        {/* PAN Number */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            PAN Number
          </label>
          <Field name="pannumber" type="text" maxLength={10} placeholder="Enter your PAN (e.g., ABCDE1234F)" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " onInput={e => {
            e.target.value = e.target.value.toUpperCase();
          }} />
        </div>

        {/* Aadhar Number */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            Aadhar Number
          </label>
          <Field name="adharnumber" type="text" maxLength={12} placeholder="Enter your 12-digit Aadhar number" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " onInput={e => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }} />
        </div>
        {/* GST Number */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            GST (Optional)
          </label>
          <Field name="gst" type="text" placeholder="Enter your GST number (optional)" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] " />
        </div>
        {/* Marital Status Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-300">
            Marital Status
          </label>
          <Field as="select" name="maritalstatus" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] ">
            <option value="">Select Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </Field>
          <ErrorMessage name="maritalstatus" component="p" className="text-red-500 text-sm" />
        </div>
        {/* Languages Multi-Select */}
        <div className="flex flex-col gap-2  relative">
          <label className="text-sm font-semibold text-gray-300">
            Languages
          </label>
          <MultiSelect
            className="bg-[#1b2e4b] !important text-[#22c7d5]"
            name="languages"
            options={languageOptions}
            value={languageSelected}
            onChange={selected => {
              const selectedValues = selected.map(option => option.value);
              setFieldValue("languages", selectedValues);
              setLanguageSelected(selected);
            }} labelledBy="Select languages" />
        </div>

        {/* All Skill Dropdown */}
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-300">
            All Skills
          </label>
          <MultiSelect
            className="bg-[#1b2e4b] !important text-[#22c7d5]"
            name="allskills"
            options={skillsOptions}
            value={skillSelected}
            onChange={selected => {
              const selectedValues = selected.map(option => option.value);
              setFieldValue("allskills", selectedValues);
              setSkillSelected(selected);
            }} labelledBy="Select Other Skill" />
        </div>

        {/* Primary Skill Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-300">
            Primary Skill
          </label>
          <Field as="select" name="primaryskill" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#22c7d5] ">
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
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <Field type="radio" name="workingotherplatform" value="Yes" className="text-[#22c7d5] focus:outline-none " />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <Field type="radio" name="workingotherplatform" value="No" className="text-[#22c7d5] focus:outline-none " />
              No
            </label>
          </div>
        </div>
        {/* platform */}
        <Field name="workingotherplatform">
          {({ field }) => field.value === "Yes" && <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-300">
              Platform
            </label>
            <Field name="platform" type="text" placeholder="Enter the platform name" className="w-full  bg-[#1b2e4b] text-[#22c7d5]  rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#22c7d5]" />
          </div>}
        </Field>
      </div>
      <div className="pt-10 flex justify-center ">
        <button
          disabled={loader}
          type="submit"
          className="bg-red-500 flex justify-end text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          {loader ? <BeatLoader color="#fff" /> : "Update"}
        </button>
      </div>
    </Form>}
  </Formik>;
};

export default PersonalDetails;
