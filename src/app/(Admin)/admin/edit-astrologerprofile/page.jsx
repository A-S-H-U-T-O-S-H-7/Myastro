"use client"
import BankDetailsForm from '@/components/Admin/BankDetailsForm';
import OtherDetailsForm from '@/components/Admin/OtherDetailsForm';
import PersonalDetails from '@/components/Admin/PersonalDetailForm';
import Navbar from '@/components/Admin/UpdateNavbar';
import VerificationForm from '@/components/Admin/VerificationForm';
import { useState } from 'react';
import React from 'react'

function page() {
    const [activeTab, setActiveTab] = useState(0);

    const initialValues = {
        fullName: "Sandeep Gupta",
        email: "astrology.hints@gmail.com",
        phone: "9220848031",
        whatsapp: "9556508941",
        profileImage: null,
        username: "Ashu",
        gender: "Female",
        dob: "1990-01-01",
        state:"Odisha",
        city:"Balasore",
        completeAddress: "at-iswarpur",
        pincode: "878798",
        pannumber: "hdgdd2323p",
        adharnumber: "232332323333",
        maritalstatus: "Single",
        primaryskill: "Tarot",
        allskills: ["tarot","vastu"],
        languages: ["hindi","english"],
        dailycontributionhour: "3",
        experience: "4",
        wheredidyouhereaboutmyastro: "Online",
        minCharges: "10",
      whyOnboard: "abcd",
      mainIncomeSource: "Business",
      highestQualification: "12th",
      learnAstrology: "",
      referredBySomeone: "",
      minEarnings: "1000",
      fulltimeJob: "Yes",
      longBio: "jkdbbwbjw wbdb bwdbjbbbdw wbdbbdbd wbdbdd wbdbd d dwbdbwbdd w ",
      ifscCode: "SBIN0001234",
      bankName: "Sbi",
      bankBranch: "Bhadrak",
      accountType: "Savings",
      accountNumber: "1234567890",
      confirmAccountNumber: "1234567890",
      bankUPI: "abs@ybl",
        // Add all other fields...
      };

      const handleSubmit = (values) => {
        console.log("Updated Values:", values);
      };

  return (
    <div>
        <div className="min-h-screen ml-[100px] p-6">

            <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className="mt-6">
        {activeTab === 0 && (
          <PersonalDetails initialValues={initialValues} onSubmit={handleSubmit} />
        )}
         {activeTab === 1 && (
          <OtherDetailsForm initialValues={initialValues} onSubmit={handleSubmit} />
        )}
        {activeTab === 2 && (
          <BankDetailsForm initialValues={initialValues} onSubmit={handleSubmit} />
        )}
         {activeTab === 3 && (
          <VerificationForm initialValues={initialValues} onSubmit={handleSubmit}/>
        )}

      </div>
    </div>
      
    </div>
  )
}

export default page
