import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function PoojaCard({details}) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[400px]">
        {/* Date Section */}
        <div className="mb-3 flex items-end">
          <div className="w-[40px] flex flex-col justify-center items-center">
            <div className="rounded-full border border-[#666666] text-[#666666] text-[13px] flex justify-center items-center h-[25px] w-[25px]">
              18
            </div>
            <p className="text-center text-[13px] text-[#666666]">Jan</p>
          </div>
          <div className="border-b mb-5 h-2 flex-grow border-[#666666]"></div>
        </div>

        {/* Card */}
        <Link href={`/book-a-pooja/poojaname`} passHref>
        <div className="cursor-pointer rounded-[10px] h-[230px] shadow-lg hover:shadow-[0_0_10px_0_rgba(0,0,0,0.1)] hover:shadow-purple-800 transition-all duration-300 ease-in-out bg-white">
          {/* Card Top Section */}
          <div className="h-[190px] relative flex gap-2 flex-col-reverse overflow-hidden rounded-t-[10px]  bg-cover bg-center"
          style={{ backgroundImage: `url(${details.bgImage})` }}>

            {/* Content Overlay */}
            <div className="h-[61px] px-[15px] py-[10px] w-full border-t-[1.5px] border-white bg-[#212529] bg-opacity-50">
              <p className="text-sm font-medium mb-[2px] text-white truncate">
              {details.mainTitle}
              </p>
              <p className="text-xs text-[#eeeeee] truncate">
              {details.subTitle}
              </p>
            </div>

            {/* Astrologer Image */}
            <div className="absolute top-2 right-2 w-10 h-10 rounded-full overflow-hidden border border-purple-500">
              <Image
                src={details.astrologerImage}
                alt="Priest Avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Tagline */}
            <div className="h-5 flex items-center text-[10px] bg-purple-400 rounded-r-md px-2  w-[60%]">
              <p className="truncate">{details.thumbnailTitle}</p>
            </div>
          </div>

          {/* Card Bottom Section */}
          <div className="bg-white flex text-[13px] rounded-b-[10px] justify-between px-[14px] py-[7.5px]">
            <p className="text-[#555555] font-semibold">{details.date}</p>
            <p className="text-[#555555] flex gap-2 items-center font-semibold">
              Book Now <FaArrowRight />
            </p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
