import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Horoscopecard = ({ name, image, description, id }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/horoscope/${name.toLowerCase()}?id=${id}`);
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer">
      <div
        className="max-w-[520px] bg-purple-200 transition-transform 
      duration-700 ease-out hover:scale-105 hover:shadow-xl hover:shadow-violet-800 justify-around border-[1px]
       py-[20px] px-[5px] border-purple-400 rounded-md gap-3 flex flex-wrap "
      >
        <div className="w-[120px] h-[100px] rounded-full overflow-hidden flex justify-center ">
          <Image src={image} alt={name} width={100} height={100} />
        </div>

        <div className="text-center max-w-[302px] px-2">
          <h3 className="font-heading font-semibold text-xl mb-1">{name}</h3>
          <p className="text-[#666666] mb-2">{description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              handleCardClick();
            }}
            className="text-xs rounded-[5px] px-4 py-[5px] text-white bg-purple-800"
          >
            More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Horoscopecard;
