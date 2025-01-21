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
  const [persoanlDetails, setPersonalDetails] = useState(null);
  const [otherDetails, setOtherDetails] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [verificationDetails, setVerificationDetails] = useState(null);
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
        if (data.status) {
          setPersonalDetails({
            photo: data.astrologer.photo || '/profileplaceholder.png',
            fullName: data.astrologer.fullname || "",
            email: data.astrologer.email || "",
            phone: data.astrologer.mobile || "",
            whatsapp: data.astrologer.whatsapp || "",
            username: data.astrologer.username || "",
            gender: data.astrologer.gender || "",
            dob: formatDate(data.astrologer.dob),
            country: data.astrologer.address?.country || "",
            state: data.astrologer.address?.state || "",
            city: data.astrologer.address?.city || "",
            completeAddress: data.astrologer.completeAddress || "",
            pincode: data.astrologer.pincode || "",
            pannumber: data.astrologer.panno || "",
            adharnumber: data.astrologer.aadharno || "",
            gst: data.astrologer.gst || "",
            maritalstatus: data.astrologer.martialstatus || "",
            primaryskill: data.astrologer.primaryskills || "",
            allskills: data.astrologer.allskills || [],
            languages: data.astrologer.languages || [],
            dailycontributionhour: data.astrologer.contributedaily || "",
            workingotherplatform: data.astrologer.workingotherplatform || "",
            experience: data.astrologer.experienceinyear || "",
            wheredidyouhereaboutmyastro: data.astrologer.hearaboutmyastro || "",
            platform: data.astrologer.platform || ""
          });
          setOtherDetails({
            whyOnboard: data.astrologer.onboardyou || "",
            mainsourceincome: data.astrologer.mainsourceincome || "",
            qualification: data.astrologer.qualification || "",
            learnAstrology: data.astrologer.learastrology || "",
            referredBySomeone: data.astrologer.referastro || "",
            minEarnings: data.astrologer.minimumearningmyastro || "",
            fulltimeJob: data.astrologer.currentlyworkingfulltimejob || "",
            minCharges: data.astrologer.charge_perminutes?.[2] || "",
            longBio: data.astrologer.longbio || "",
            youtube: data.astrologer.youtube,
            instagram: data.astrologer.instagram,
            facebook: data.astrologer.facebook,
            website: data.astrologer.website,
            linkedin: data.astrologer.linkedIn,
          });
          setBankDetails({
            ifscCode: data.bank?.ifsccode || "",
            bankName: data.bank?.bankname || "",
            bankBranch: data.bank?.bankbranch || "",
            accountType: data.bank?.accounttype || "",
            accountNumber: data.bank?.accountno || "",
            bankUPI: data.bank?.bankupi || "",
            profitSharing: data.bank?.profit_share,
            accountStatus: data.bank?.status || "",
            comments: data.bank?.comments || "",
          });
          setVerificationDetails({
            photo: data.astrologer.photo || '/profileplaceholder.png',
            fullName: data.astrologer.fullname || "",
            email: data.astrologer.email || "",
            phone: data.astrologer.mobile || "",
            whatsapp: data.astrologer.whatsapp || "",
            username: data.astrologer.username || "",
            accountNumber: data.bank?.accountno || "",
            pannumber: data.astrologer.panno || "",
            adharnumber: data.astrologer.aadharno || "",
            aadharFront: data.astrologer.aadhar_front,
            aadharBack: data.astrologer.aadhar_back,
            biodata: data.astrologer.biodata,
            certificate: data.astrologer.certificate,
            pancard: data.astrologer.pancard,
            veri_name: data.veriDetails?.veri_name || "",
            veri_mobile: data.veriDetails?.veri_mobile || "",
            veri_email: data.veriDetails?.veri_email || "",
            veri_username: data.veriDetails?.veri_username || "",
            veri_panno: data.veriDetails?.veri_panno || "",
            veri_aadhar: data.veriDetails?.veri_aadhar || "",
            veri_acno: data.veriDetails?.veri_acno || "",
            veri_photo: data.veriDetails?.veri_photo || "",
            veri_pancard: data.veriDetails?.veri_pancard || "",
            veri_aadharfront: data.veriDetails?.veri_aadharfront || "",
            veri_aadharback: data.veriDetails?.veri_aadharback || "",
            veri_certificate: data.veriDetails?.veri_certificate || "",
            veri_biodata: data.veriDetails?.veri_biodata || "",
            final_veri: data.veriDetails?.final_veri || ""
          });
        }
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching astrologer detailsa:", error);
        setError("Failed to load astrologer detailsa");
        setLoading(false);
      }
    };
    fetchAstrologerDetails();
  }, [astrologerid]);


  if (loading) return <p>Loading astrologer details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <div className="min-h-screen ml-[100px] p-6">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-6">
          {activeTab === 0 && (
            <PersonalDetails initialValues={persoanlDetails} activeTab={activeTab} setActiveTab={setActiveTab} astrologerid={astrologerid} />
          )}
          {activeTab === 1 && (
            <OtherDetailsForm initialValues={otherDetails} activeTab={activeTab} setActiveTab={setActiveTab} astrologerid={astrologerid} />
          )}
          {activeTab === 2 && (
            <BankDetailsForm initialValues={bankDetails} activeTab={activeTab} setActiveTab={setActiveTab} astrologerid={astrologerid} />
          )}
          {activeTab === 3 && (
            <VerificationForm initialValues={verificationDetails} activeTab={activeTab} setActiveTab={setActiveTab} astrologerid={astrologerid} />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditAstrologerPage;
