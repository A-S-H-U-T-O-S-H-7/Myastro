"use client";
import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import { IoChatbox } from "react-icons/io5";
import { setSelectAstrologer } from '@/redux/slices/astrologersSlice';
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { useRouter, usePathname  } from "next/navigation";
import {} from "next/navigation";

import { useCallback } from "react";

const AstrologerCard = ({ data }) => {
  const pathname = usePathname();


  const router = useRouter();
  const dispatch = useDispatch();
  const { selectAstrologersData } = useSelector((state) => state.astrologers);
  
  const handleSelectAstrologer = useCallback(
    debounce((astrologer) => {
      dispatch(setSelectAstrologer({ ...astrologer }));
      const formattedUsername = astrologer.username
        .toLowerCase()
        .replace(/\s+/g, '-');
      router.push(`/best-astrologer/${formattedUsername}`);
    }, 300), []);

  console.log(selectAstrologersData);

  return (
    <div
      className="min-w-[360px] h-[174px] px-[12px] py-[8px] bg-gray-100 hover:shadow-2xl transition-shadow duration-300 shadow-md hover:shadow-[#542875] rounded-lg flex border "
      id={`astrologer_${data.id}`}
    >
      {/* Left Column */}
      <div className="relative">
        <div
          className="w-[128px] h-[128px] rounded-full overflow-hidden border cursor-pointer"
          onClick={() => handleSelectAstrologer(data)}
        >
          <Image
            src={data.photo}
            alt={data.username}
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        {/* Rating Box */}
        <div className="absolute bottom-[20px] right-[38px] w-[55px] h-[24px] bg-[#542875] text-white text-xs flex items-center justify-center rounded-full">
          ⭐ {data.ratting}
        </div>
      </div>

      {/* Right Column */}
      <div className="ml-4 flex flex-col w-full justify-between">
        {/* Astrologer Details */}
        <div>
          <h3
            className="text-lg font-bold text-[#3C0184] font-heading cursor-pointer"
            onClick={() => handleSelectAstrologer(data)}
          >
            {data.username}
          </h3>
          <p className="text-sm text-gray-600 font-semibold">
            {data.skills
              .slice(0, 3)
              .map(skill =>
                skill.charAt(0).toUpperCase() + skill.slice(1).toLowerCase()
              )
              .join(", ")}{" "}
            {data.skills.length > 3 ? "..." : ""}
          </p>
          <p className="text-sm text-gray-600 font-semibold">
            {data.languages
              .slice(0, 3)
              .map(language =>
                language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()
              )
              .join(", ")}{" "}
            {data.languages.length > 3 ? "..." : ""}
          </p>
        </div>
        {/* Rate & Buttons */}
        <div>
          <p className="text-sm font-semibold text-[#EE8722]">
            ₹{data.chargesperminutes[2]}/min{" "}
            <span className="line-through text-gray-400">
              ₹{data.maximumperminutescharges}/min
            </span>
          </p>

          <div className="flex gap-2 mt-2">
          {pathname !== "/chat-with-astrologer" && (
              <button className="px-1 w-full justify-center font-semibold py-2 gap-2 border hover:bg-[#542875] hover:text-white hover:border-[#3C0184] border-[#3C0184] text-[#3C0184] text-xs flex items-center rounded-md">
                <LuPhoneCall size={15} />
                Call Now
              </button>
            )}
            {/* Hide "Chat Now" button on /call-with-astrologer */}
            {pathname !== "/talk-to-astrologer" && (
              <button className="px-1  w-full justify-center font-semibold  py-2 gap-2 border hover:bg-[#317F7F] hover:text-white hover:border-[#317F7F] border-[#317F7F] text-[#317F7F] text-xs flex items-center rounded-md">
                <IoChatbox size={15} />
                Chat Now
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AstrologerCard;
