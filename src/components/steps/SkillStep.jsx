"use client"
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaPen } from 'react-icons/fa';
import { MultiSelect } from "react-multi-select-component";
import ENV from '../Env';
import { useAstrologer } from '@/lib/AstrologerRegistrationContext';
import { SkillDetailsSchema } from '../validations/AstrologerRegistrationValidation';
function SkillStep() {

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
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const {
    skillData,
    setSkillData,
    step,
    setStep,
    astrologerId,
    setAstrologerId,
    loader,
    setLoader,
    errorMessage,
    setErrorMessage
  } = useAstrologer();

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


  //   end countries api

  // state api start

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

  // Fetch states when the country changes
  useEffect(() => {
    if (selectedCountry) {
      fetchStates(selectedCountry);
    }
  }, [selectedCountry]);

  // end state api

  // start city api
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

  // Fetch cities when the state changes
  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
    }
  }, [selectedState]);

  const handleSkills = async (values) => {
    console.log("Formatted")
    try {
      setSkillData({ ...values });
      setLoader(true);
      setErrorMessage("");
      const response = await fetch(`${ENV.API_URL}/astrologer-step-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "step": 3,
          "astrologer_id": astrologerId,
          "username": values.username,
          "gender": values.gender,
          "dob": values.dob,
          "country": values.country,
          "state": values.state,
          "city": values.city,
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
          "workinginonlineplatform": values.workinginonlineplatform,
          "platform": values.platform
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

  const handleSelfiedImage = async (e, setFieldValue) => {

    try {
      setFieldValue("profileImage", e.target.files[0]);
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("photo", file);
      setErrorMessage("");
      const response = await fetch(`${ENV.API_URL}/astrologer-upload-photo/${astrologerId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Something went wrong.");
      } else {

      }
    } catch (error) {
      setErrorMessage("Error submitting data: " + error.message);
    } finally {
      setLoader(false);
    }
  }
  return <Formik initialValues={{ ...skillData }} validationSchema={SkillDetailsSchema} onSubmit={values => {
    handleSkills(values);
  }}>
    {({ values, setFieldValue, errors, touched }) => <div className="w-full max-w-4xl bg-gradient-to-b from-white via-[#f8f4ff] to-[#eae0ff] shadow-lg rounded-lg p-8 space-y-6">
      <Form className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 ">
          SKILL DETAILS
        </h2>

        {/* Profile Photo */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500 dark:border-cyan-500">
            {values.profileImage ? <img src={URL.createObjectURL(values.profileImage)} alt="Profile" className="w-full h-full object-cover" /> : <span className="text-center w-full h-full flex items-center justify-center text-sm text-gray-500 dark:text-[#888ea8]">
              Upload Photo
            </span>}
            <label htmlFor="profileImage" className="absolute bottom-0 right-0 bg-purple-500 dark:bg-cyan-500 text-white p-1 rounded-full cursor-pointer">
              <FaPen />
            </label>
            <input id="profileImage" type="file" accept="image/jpeg,image/png,image/jpg" className="w-24 h-24 opacity-0 z-50" onChange={e => {
              handleSelfiedImage(e, setFieldValue);
            }} />
          </div>
          {errors.profileImage && touched.profileImage && <p className="text-red-500 text-sm">
            {errors.profileImage}
          </p>}
          <p className="text-red-500 border border-dashed rounded-md py-1 px-1 border-gray-800 text-xs">
            Only Passport size photo is accepted
          </p>
          <p className="text-orange-500 text-xs">
            Supported formats: jpg, png, jpeg. Max size: 2MB.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Full name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              User Name
              <span className="text-red-500">*</span>
            </label>
            <Field name="username" type="text" placeholder="Enter your name" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow" />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Gender Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              Gender<span className="text-red-500">*</span>
            </label>

            {/* Formik Select Dropdown */}
            <Field as="select" name="gender" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow">
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Field>

            {/* Display Error Message */}
            <ErrorMessage name="gender" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Date of Birth */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              Date of Birth<span className="text-red-500">*</span>
            </label>
            <Field name="dob" type="date" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            <ErrorMessage name="dob" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Country */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              Country<span className="text-red-500">*</span>
            </label>
            <Field as="select" name="country" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
              onChange={e => {
                setFieldValue("country", e.target.value)
                setSelectedCountry(e.target.value);
              }}>
              <option value="">
                Select Country
              </option>
              {countries.map(countryI =>
                <option key={countryI._id} value={countryI.name}>
                  {countryI.name}
                </option>
              )}
            </Field>
            <ErrorMessage name="country" component="p" className="text-red-500 text-sm" />
          </div>
          {/* State */}
          <div className="flex flex-col gap-2 relative ">
            <label className="text-sm font-semibold text-gray-800">
              State<span className="text-red-500">*</span>
            </label>
            <Field
              as="select"
              name="state"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
              onChange={(e) => {
                setFieldValue("state", e.target.value)
                setSelectedState(e.target.value);

              }}
            >
              <option value="">
                Select State
              </option>
              {states.map(state =>
                <option key={state._id} value={state.name}>
                  {state.name}
                </option>
              )}
            </Field>
            <ErrorMessage name="state" component="p" className="text-red-500 text-sm" />
          </div>
          {/* City */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              City<span className="text-red-500">*</span>
            </label>
            <Field
              as="select"
              name="City"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-shadow"
              onChange={(e) => setFieldValue("city", e.target.value)}
            >
              <option value="">
                Select City
              </option>
              {cities.map(city =>
                <option key={city._id} value={city.name}>
                  {city.name}
                </option>
              )}
            </Field>
            <ErrorMessage name="state" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Complete Address */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              Address<span className="text-red-500">*</span>
            </label>
            <Field name="completeAddress" type="text" placeholder="Enter your full address" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            <ErrorMessage name="completeAddress" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Pincode */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              Pincode<span className="text-red-500">*</span>
            </label>
            <Field name="pincode" type="text" maxLength={6} placeholder="Enter your 6-digit pincode" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            <ErrorMessage name="pincode" component="p" className="text-red-500 text-sm" />
          </div>
          {/* PAN Number */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              PAN Number<span className="text-red-500">*</span>
            </label>
            <Field name="pannumber" type="text" maxLength={10} placeholder="Enter your PAN (e.g., ABCDE1234F)" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" onInput={e => {
              e.target.value = e.target.value.toUpperCase();
            }} />
            <ErrorMessage name="pannumber" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Aadhar Number */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              Aadhar Number<span className="text-red-500">*</span>
            </label>
            <Field name="adharnumber" type="text" maxLength={12} placeholder="Enter your 12-digit Aadhar number" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" onInput={e => {
              e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Ensures only digits are entered.
            }} />
            <ErrorMessage name="adharnumber" component="p" className="text-red-500 text-sm" />
          </div>
          {/* GST Number */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              GST (Optional)
            </label>
            <Field name="gst" type="text" placeholder="Enter your GST number (optional)" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
          </div>
          {/* Marital Status Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              Marital Status<span className="text-red-500">*</span>
            </label>
            <Field as="select" name="maritalstatus" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option value="" disabled>
                Select Status
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </Field>
            <ErrorMessage name="maritalstatus" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Languages Multi-Select */}
          <div className="flex flex-col gap-2  relative">
            <label className="text-sm font-semibold text-gray-800">
              Languages<span className="text-red-500">*</span>
            </label>
            <MultiSelect name="languages" options={languageOptions} value={languageSelected} onChange={selected => {
              const selectedValues = selected.map(option => option.value);
              setFieldValue("languages", selectedValues);
              setLanguageSelected(selected);
            }} labelledBy="Select languages" />
            <ErrorMessage name="languages" component="p" className="text-red-500 text-sm" />
          </div>

          {/* All Skill Dropdown */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              All Skills<span className="text-red-500">*</span>
            </label>
            <MultiSelect name="allskills" options={skillsOptions} value={skillSelected} onChange={selected => {
              const selectedValues = selected.map(option => option.value);
              setFieldValue("allskills", selectedValues);
              setSkillSelected(selected);
            }} labelledBy="Select Other Skill" />
            <ErrorMessage name="allskills" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Primary Skill Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              Primary Skill<span className="text-red-500">*</span>
            </label>
            <Field as="select" name="primaryskill" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder=" Select Primary Skill">
              <option value="" disabled>
                Select Primary Skill
              </option>
              <option value="Vedic">Vedic</option>
              <option value="Nadi">Nadi</option>
              <option value="Numerology">Numerology</option>
              <option value="Vastu">Vastu</option>
              <option value="Prashana">Prashana</option>
              <option value="KP">KP</option>
              <option value="Lal Kitab">Lal Kitab</option>
              <option value="Western">Western</option>
              <option value="Tarot">Tarot</option>
              <option value="Palmistry">Palmistry</option>
              <option value="Horary">Horary</option>
              <option value="Face Reading">Face Reading</option>
              <option value="Psychic">Psychic</option>
              <option value="Life Coach">Life Coach</option>
              <option value="Cartomancy">Cartomancy</option>
              <option value="Loshu Grid">Loshu Grid</option>
              <option value="Psychologist">Psychologist</option>
            </Field>
            <ErrorMessage name="primaryskill" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Daily Contribution Hours */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              Daily Contribution Hours<span className="text-red-500">*</span>
            </label>
            <Field name="dailycontributionhour" type="number" min="1" max="20" placeholder="Enter hours (1-20)" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            <ErrorMessage name="dailycontributionhour" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Experience in Years */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-800">
              Experience in Years<span className="text-red-500">*</span>
            </label>
            <Field name="experience" type="number" min="0" placeholder="Enter your experience in years" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            <ErrorMessage name="experience" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Where Did You Hear About MyAstro */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              Where Did You Hear About MyAstro?<span className="text-red-500">*</span>
            </label>
            <Field as="select" name="wheredidyouhereaboutmyastro" className="w-full border bg-white border-gray-300 rounded-lg px-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option value="" disabled>
                Select Source
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
            </Field>
            <ErrorMessage name="wheredidyouhereaboutmyastro" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Radio Buttons: Working on Other Platforms */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              Are You Working on Any Other Online Platform?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <Field type="radio" name="workinginonlineplatform" value="yes" className="text-purple-500 focus:ring-purple-500" />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-800">
                <Field type="radio" name="workinginonlineplatform" value="no" className="text-purple-500 focus:ring-purple-500" />
                No
              </label>
            </div>
            <ErrorMessage name="workinginonlineplatform" component="p" className="text-red-500 text-sm" />
          </div>
          {/* Platform */}
          {values.workinginonlineplatform === "yes" && <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-800">
              Platform<span className="text-red-500">*</span>
            </label>
            <Field name="platform" type="text" placeholder="Enter the platform name" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            <ErrorMessage name="platform" component="p" className="text-red-500 text-sm" />
          </div>}
        </div>

        <div className="flex justify-end mt-6">
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg">
            Next
          </button>
        </div>
      </Form>
    </div>}
  </Formik>;
}

export default SkillStep