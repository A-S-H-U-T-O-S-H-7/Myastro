"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSelectAstrologer } from "@/redux/slices/astrologersSlice";
import { LiaLanguageSolid } from "react-icons/lia";
import Image from "next/image";
import { PropagateLoader } from "react-spinners";
import ENV from "./Env";

function IndivisualAstrologer() {

  const router = useRouter();
  const dispatch = useDispatch();

  const { selectAstrologersData } = useSelector((state) => state.astrologers);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ratings = [
    { rating: 5, progress: "80%" },
    { rating: 4, progress: "50%" },
    { rating: 3, progress: "30%" },
    { rating: 2, progress: "10%" },
    { rating: 1, progress: "5%" },
  ];
  const handleSingleAstrologer = async (id) => {
    try {
      const response = await fetch(`${ENV.API_URL}/load-astrologer/${id}`);
      if (!response.ok) {
        router.back();
        return;
      }
      const astrologerData = await response.json();
      setData(astrologerData.astrologer);
      dispatch(setSelectAstrologer(astrologerData.astrologer));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      router.back();
    }
  };

  useEffect(() => {
    if (!selectAstrologersData?.id) {
      router.back();
      return;
    }
    handleSingleAstrologer(selectAstrologersData.id);
  }, [selectAstrologersData?.id]);

  if (loading) {
    return <div className="bg-[#f5f5f5] h-[100vh] flex items-center justify-center"><PropagateLoader loading={loading} color='#542875' /></div>;
  }

  if (error) {
    return (
      <div className="bg-[#f5f5f5] h-[100vh] flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-16 py-8 flex flex-col gap-10 bg-gray-50">
      {/* Main Astrologer Card */}
      <div className="border rounded-2xl border-purple-300 bg-white shadow-lg p-8 flex flex-col gap-8">
        <div className="flex flex-wrap items-center gap-8">
          {/* Astrologer Image */}
          <div className="rounded-full overflow-hidden border-4 border-purple-400 shadow-lg">
            <Image src={data.photo} className="rounded-full object-fill" alt="Astrologer" width={200} height={200} />
          </div>

          {/* Astrologer Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {data.username}
              </h2>
              {data.active === true ? (<div className="rounded-lg bg-green-600 text-white text-sm px-4 py-1 animate-pulse">
                Online
              </div>) : (<div className="rounded-lg bg-green-600 text-white text-sm px-4 py-1 animate-pulse">
                Offline
              </div>)}

            </div>

            <p className="text-gray-600 font-semibold"> {data.skills.map(skill => skill.charAt(0).toUpperCase() + skill.slice(1).toLowerCase()).join(", ") }</p>
            <p className=" font-semibold">₹{data.chargesperminutes[2]}/min</p>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 border rounded-lg py-1 px-3 text-sm border-purple-300 bg-purple-50">
                <LiaLanguageSolid size={20} className="text-purple-500" /> {data.experience} years
              </div>
              <div className="flex items-center gap-2 border rounded-lg py-1 px-3 text-sm border-purple-300 bg-purple-50">
                <LiaLanguageSolid size={20} className="text-purple-500" /> { data.languages.map(language => language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()).join(", ")}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="w-[140px] md:w-40 h-10 flex items-center justify-center rounded-md bg-[#FF9900] text-white font-semibold shadow-md transition-transform transform hover:scale-105">
                <Image className="pr-3" src="/chat_white.svg" alt="Icon" width={30} height={30} />
                Chat Now
              </button>
              <button className="w-[140px] md:w-40 h-10 flex items-center justify-center rounded-md bg-[#317F7F] text-white font-semibold shadow-md transition-transform transform hover:scale-105">
                <Image className="pr-3" src="/call_white.svg" alt="Icon" width={30} height={30} />
                Call Now
              </button>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            {data.longbio}
          </p>
        </div>
      </div>

      {/* Rating & Reviews Section */}
      <div className="flex flex-wrap gap-8">
        <div className="w-full lg:w-[48%] rounded-2xl border border-purple-300 bg-white shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Rating & Reviews
          </h2>

          <div className="flex items-center gap-8">
            {/* Rating Summary */}
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold text-purple-500">5.00</p>
              <div className="flex mt-2">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <p className="text-green-500 font-semibold text-sm mt-2">
                New!
              </p>
            </div>

            {/* Rating Bars */}
            <div className="flex flex-col gap-2 w-full">
              {ratings.map((item, index) =>
                <div key={index} className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-600">
                    {item.rating}
                  </span>
                  <div className="flex-1 h-4 bg-gray-200 rounded">
                    <div
                      className="h-full bg-purple-500 rounded animate-grow"
                      style={{ width: item.progress }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Similar Consultants Section */}
        <div className="w-full lg:w-[48%] rounded-2xl border border-purple-300 bg-white shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Similar Consultants
          </h2>
          <p className="text-gray-600">
            Explore other consultants with expertise in similar domains.
          </p>
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="rounded-2xl border border-purple-300 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800">User Reviews</h2>
        <p className="text-gray-600 mt-2">
          No reviews yet. Be the first to review!
        </p>
      </div>
    </div>
  );
}

export default IndivisualAstrologer;
