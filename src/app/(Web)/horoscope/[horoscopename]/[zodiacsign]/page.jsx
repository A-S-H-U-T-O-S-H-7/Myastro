import React from "react";
import Image from "next/image";

export default function ZodiacSignPage({ zodiacName }) {
  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-12 py-6 gap-8">
      <div className="flex-1">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-[32px] font-heading font-bold text-center lg:text-left">
            {zodiacName} Today's Horoscope
          </h2>
          <p className="text-center lg:text-left text-gray-600">14 December, 2024</p>
        </div>

        {/* Horoscope Box */}
        <div className="border border-red-400 flex flex-col lg:flex-row items-center px-4 py-6 rounded-lg shadow-md">
          <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] overflow-hidden rounded-full mb-4 lg:mb-0 lg:mr-6">
            <Image src="/gemini.jpg" alt="Gemini" width={150} height={150} />
          </div>
          <div className="flex flex-wrap justify-between w-full lg:w-auto text-sm gap-4">
            <div>
              <h3 className="font-bold text-lg">{zodiacName}</h3>
              <p className="text-gray-500">April 20 - May 20</p>
            </div>
            <div>
              <p className="font-semibold">Lucky Colours</p>
              <p className="text-gray-500">Yellow, LightGreen</p>
            </div>
            <div>
              <p className="font-semibold">Lucky Numbers</p>
              <p className="text-gray-500">2, 9</p>
            </div>
            <div>
              <p className="font-semibold">Lucky Alphabets</p>
              <p className="text-gray-500">R, V</p>
            </div>
          </div>
        </div>

        {/* Horoscope Details Sections */}
        {["Love", "Health", "Career", "Emotion", "Travel"].map((section) => (
          <div key={section} className="mt-8">
            <h2 className="text-[24px] font-heading font-bold">{section}</h2>
            <p className="text-gray-700 text-sm mt-4">
              {/* Placeholder content */}
              This is the {section} section. Replace this with the actual content related to {zodiacName}.
            </p>
          </div>
        ))}

        {/* Tips Section */}
        <div className="border border-red-600 rounded-lg p-6 mt-8">
          <h2 className="text-lg font-heading font-bold mb-4">Tips for You Today</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold">Vedic Tip</h3>
              <p className="text-gray-600 text-sm">
                Weak moments will come, but giving up is not an option. Reflect on what went wrong and start anew.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Tips for Singles</h3>
              <p className="text-gray-600 text-sm">
                Connect with others and explore. Reconciliation with an ex may be possible this year.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Tips for Couples</h3>
              <p className="text-gray-600 text-sm">
                Love is in the air, but challenges may arise. Dedication will help resolve issues.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
