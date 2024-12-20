"use client";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const phrases = [
    "Love relation problem ?",
    "Vastu problem ?",
    "Facing Problem in Job ?",
    "Health problem ?",
    "Education problem ?"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(
    () => {
      const interval = setInterval(() => {
        setAnimate(false);
        setTimeout(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % phrases.length);
          setAnimate(true);
        }, 50);
      }, 2000);

      return () => clearInterval(interval);
    },
    [phrases.length]
  );

  return (
    <div>
      <div className=" px-[10px] lg:px-[65px] py-4 ">
        <div className="bg-[#C8A2C8] h-[200px] md:h-[300px] lg:h-[380px] rounded-lg flex">
          <Image
            className="px-3 py-3 w-[160px] h-25 md:w-auto md:h-auto lg:w-auto lg:h-auto"
            src="/Heroimage2.png"
            alt="Icon"
            width={400}
            height={400}
          />

          <div className="flex flex-col justify-center pr-5 md:px-10 ">
            <div>
              <div
                className={` text-[#3C0184] ${animate
                  ? "animate-slide-in"
                  : ""}`}
              >
                <h2 className=" text-lg md:text-2xl font-heading h-10 md:h-12 animate-slide-in overflow-hidden relative lg:text-4xl font-semibold pb-4 ]">
                  {phrases[currentIndex]}
                </h2>
              </div>
              <h2 className=" text-lg  md:text-2xl lg:text-4xl font-semibold pb-4 text-[#3C0184]">
                Ask Our Astrologers
              </h2>
            </div>

            <div className="hidden lg:flex gap-7 py-10">
            <Link href="/talk-to-astrologer" >
              <button
                className="p-4 bg-[#FF9900] text-white max-w-[247px] flex rounded-[10px]"
                type="button"
              >
                <Image
                  className="pr-3"
                  src="/call_white.svg"
                  alt="Icon"
                  width={35}
                  height={34}
                />
                Talk to Astrologer
              </button>
              </Link>

              <Link href="/chat-with-astrologer">
              <button
                className="p-4 bg-[#317F7F] text-white max-w-[247px] flex rounded-[10px]"
                type="button"
              >
                <Image
                  className="pr-3"
                  src="/chat_white.svg"
                  alt="Icon"
                  width={35}
                  height={34}
                />
                Chat with Astrologer
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex gap-4 md:gap-7 py-6 md:py-8">
        <Link href="/talk-to-astrologer" >
          <button
            className="p-3 bg-[#FF9900] text-white w-full flex items-center  justify-center rounded-[10px]"
            type="button"
          >
           <Image
              className="pr-3"
              src="/call_white.svg"
              alt="Icon"
              width={35}
              height={34}
            />
            Talk to Astrologer
          </button>
          </Link>

          <Link href="/chat-with-astrologer">
          <button
            className="p-3 bg-[#317F7F] w-full text-white items-center justify-center flex rounded-[10px]"
            type="button"
          >
            <Image
              className="pr-3"
              src="/chat_white.svg"
              alt="Icon"
              width={35}
              height={34}
            />
            Chat with Astrologer
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
