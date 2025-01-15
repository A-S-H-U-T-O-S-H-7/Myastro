"use client";
import BankDetailsForm from "@/components/Admin/BankDetailsForm";
import OtherDetailsForm from "@/components/Admin/OtherDetailsForm";
import PersonalDetails from "@/components/Admin/PersonalDetailForm";
import Navbar from "@/components/Admin/UpdateNavbar";
import VerificationForm from "@/components/Admin/VerificationForm";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ENV from "@/components/Env";

function EditAstrologerPage() {
  const { astrologerid } = useParams(); 
  const [activeTab, setActiveTab] = useState(0);
  const [initialValues, setInitialValues] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dob) => {
    if (!dob) return "";
    const [day, month, year] = dob.split("/");
    if (!day || !month || !year) return ""; 
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  

  useEffect(() => {
    if (!astrologerid) return;

    const fetchAstrologerDetails = async () => {
      try {
       
        const response = await fetch(
          `${ENV.API_URL}/admin/astrologer-details/${astrologerid}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("myastro-token")}`,
              "Content-Type": "application/json",
              credentials: 'include',
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch astrologer detailsa");
        }

        const data = await response.json();
        setInitialValues({
          photo: data.astrologer.photo || '/profileplaceholder.png',
          fullName: data.astrologer.fullname || "",
          email: data.astrologer.email || "",
          phone: data.astrologer.mobile || "",
          whatsapp: data.astrologer.whatsapp || "",
          username: data.astrologer.username || "",
          gender: (data.astrologer.gender || "").toLowerCase(),
          dob: formatDate(data.astrologer.dob),
          country: data.astrologer.address?.country || "",
          state: data.astrologer.address?.state || "",
          city: data.astrologer.address?.city || "",
          completeAddress: data.astrologer.completeAddress || "",
          pincode: data.astrologer.pincode || "",
          pannumber: data.astrologer.panno || "",
          adharnumber: data.astrologer.aadharno || "",
          maritalstatus: data.astrologer.martialstatus || "",
          primaryskill: data.astrologer.primaryskills || "",
          allskills: data.astrologer.allskills || [],
          languages: data.astrologer.languages || [],
          dailycontributionhour: data.astrologer.contributedaily || "",
          workingotherplatform: data.astrologer.workingotherplatform || "",
          experience: data.astrologer.experienceinyear || "",
          wheredidyouhereaboutmyastro: data.astrologer.hearaboutmyastro || "",
          minCharges: data.astrologer.charge_perminutes?.[1] || "",
          whyOnboard: data.astrologer.onboardyou || "",
          platform: data.astrologer.platform || "",
          mainsourceincome: data.astrologer.mainsourceincome || "",
          qualification: data.astrologer.qualification || "",
          learnAstrology: data.astrologer.learastrology || "",
          referredBySomeone: data.astrologer.referastro || "",
          minEarnings: data.astrologer.minimumearningmyastro || "",
          fulltimeJob: data.astrologer.currentlyworkingfulltimejob || "",
          longBio: data.astrologer.longbio || "",
          ifscCode: data.bank?.ifsc || "",
          bankName: data.bank?.bankname || "",
          bankBranch: data.bank?.branchname || "",
          accountType: data.bank?.accounttype || "",
          accountNumber: data.bank?.accountno || "",
          confirmAccountNumber: data.bank?.accountno || "",
          bankUPI: data.bank?.upiid || "",
          aadharFront: data.astrologer.aadhar_front,
          aadharBack: data.astrologer.aadhar_back,
          biodata: data.astrologer.biodata,
          certificate: data.astrologer.certificate,
          pancard: data.astrologer.pancard,
          youtube: data.astrologer.youtube,
          instagram: data.astrologer.instagram,
          facebook: data.astrologer.facebook,
          website:data.astrologer.website,
          linkedin:data.astrologer.linkedIn,          
        });
        console.log(data)
        console.log(data.astrologer.aadhar_back);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching astrologer detailsa:", error);
        setError("Failed to load astrologer detailsa");
        setLoading(false);
      }
    };

    fetchAstrologerDetails();
  }, [astrologerid]);

  const handleSubmit = (values) => {
    console.log("Updated Values:", values);
  };

  if (loading) return <p>Loading astrologer details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div className="min-h-screen ml-[100px] p-6">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
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
            <VerificationForm initialValues={initialValues} onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditAstrologerPage;
