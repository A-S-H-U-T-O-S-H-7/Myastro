
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ChooseTimePeriod from './ChooseTimePeriod';
import zodiacData from './zodiacData'; 

export default function ZodiacSignPage() {
  const router = useRouter();
  const { horoscopename, zodiacsign } = router.query;

  // Find the relevant zodiac sign data
  const signData = zodiacData.find((sign) => sign.name.toLowerCase() === zodiacsign?.toLowerCase());

  // Show a loader or fallback if the data is unavailable
  if (!signData) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="px-4 lg:px-16">
      {/* Page Header */}
      <header className="text-center my-6">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-2">
          {`${signData.name} ${horoscopename?.replace('-', ' ')}`}
        </h2>
        <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
      </header>

      {/* Horoscope Box */}
      <section className="flex flex-wrap lg:flex-nowrap gap-4 items-center border border-red-400 px-4 py-6 rounded-md">
        <div className="flex-shrink-0">
          <Image src={signData.image} alt={signData.name} width={150} height={150} className="rounded-md" />
        </div>
        <div className="flex flex-wrap gap-4 justify-between w-full">
          <div>
            <h3 className="text-lg font-semibold">{signData.name}</h3>
            <p className="text-gray-600">April 20 - May 20</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Lucky Colours</p>
            <p className="text-gray-600">Yellow, LightGreen</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Lucky Numbers</p>
            <p className="text-gray-600">2, 9</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Lucky Alphabets</p>
            <p className="text-gray-600">R, V</p>
          </div>
        </div>
      </section>

      {/* Horoscope Sections */}
      {['Love', 'Health', 'Career', 'Emotion', 'Travel'].map((section) => (
        <section key={section} className="my-6">
          <h2 className="text-2xl font-heading font-bold mb-2">{section}</h2>
          <p className="text-gray-700 text-sm">
            {/* Placeholder text for horoscope sections */}
            This is dynamic content for the {section.toLowerCase()} section of the {signData.name} horoscope.
          </p>
        </section>
      ))}

      {/* Tips Section */}
      <section className="border border-red-600 rounded-md p-4 my-6">
        <h2 className="text-xl font-heading font-bold mb-4">Tips for You Today</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold">Vedic Tip</h3>
            <p className="text-gray-600 text-sm">
              Analyze your weak moments, take a step back, and start fresh with determination.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Tips for Singles</h3>
            <p className="text-gray-600 text-sm">
              A great year for connecting and exploring relationships. Reconcile with an ex if needed.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Tips for Couples</h3>
            <p className="text-gray-600 text-sm">
              Dedicate yourself to your partner and resolve issues with patience and love.
            </p>
          </div>
        </div>
      </section>

      {/* Time Period Selector */}
      <ChooseTimePeriod />
    </div>
  );
}
