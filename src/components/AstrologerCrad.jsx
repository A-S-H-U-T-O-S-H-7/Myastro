import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";
import { IoChatbox } from "react-icons/io5";




const AstrologerCard = () => {
  return (
    <div className="min-w-[365px] h-[174px] px-[16px] py-[8px] bg-white hover:shadow-2xl transition-shadow duration-300 shadow-md hover:shadow-[#542875] rounded-lg flex border ">



      {/* Left Column */}
      <div className="relative">
        <div className="w-[128px] h-[128px] rounded-full overflow-hidden border">
          <Image 
            src="/profileplaceholder.png" 
            alt="profile" 
            width={128} 
            height={128} 
            className="object-cover"
          />
        </div>
        {/* Rating Box */}
        <div className="absolute bottom-[20px] right-[38px] w-[55px] h-[24px] bg-[#542875] text-white text-xs flex items-center justify-center rounded-full">
          ⭐ 4.8
        </div>
      </div>

      {/* Right Column */}
      <div className="ml-4 flex flex-col justify-between">
        {/* Astrologer Details */}
        <div>
          <h3 className="text-xl font-bold text-[#3C0184] font-heading">Ashutosh</h3>
          <p className="text-sm text-gray-600 font-semibold"> Vedic Astrology, Tarot</p>
          <p className="text-sm text-gray-600 font-semibold"> English, Hindi</p>
        </div>
        {/* Rate & Buttons */}
        <div>
          <p className="text-sm font-semibold text-[#EE8722]">
             ₹50/min{" "}
            <span className="line-through text-gray-400">₹100/min</span>
          </p>
          <div className="flex gap-2 mt-2">
            <button className="px-1 font-semibold py-2 gap-2 border hover:bg-[#542875] hover:text-white hover:border-[#3C0184] border-[#3C0184] text-[#3C0184] text-xs flex items-center rounded-md">
              <LuPhoneCall size={15}/>
              Call Now
            </button>
            <button className="px-1 font-semibold py-2 gap-2 border hover:bg-[#317F7F] hover:text-white hover:border-[#317F7F] border-[#317F7F] text-[#317F7F] text-xs flex items-center rounded-md">
            <IoChatbox size={15} />

              Chat Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerCard;
