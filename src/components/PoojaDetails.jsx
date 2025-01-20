import React from 'react'
import Image from 'next/image';

function PoojaDetails() {
  return <div>
      <div className="container mx-auto px-4 lg:px-8 py-6">
        {/* Header Section */}
        <div className="flex flex-wrap gap-4">
          <div className="relative lg:max-w-[50%] rounded-lg overflow-hidden">
            <img src="/FK1.png" alt="Boondi Pooja" className="w-full  h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-white text-lg lg:text-xl font-bold text-center">
                Boondi chadhayein aur Shakti paayein
              </h1>
            </div>
          </div>
          <div>
            <h2 className="text-[#3C0184] font-bold text-[18px] md:text-[22px]">
              Hanuman Sindoor/ Boondi Arpan
            </h2>
            <p className="text-[#555555] text-base">
              Increase Happiness & Act as a Protector Against Troubles
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-green-500 bg-green-100 text-xs font-bold py-1 px-2 rounded">
                02 days left
              </span>
              <span className="text-gray-700 font-medium text-xs">
                02d : 15h : 39m : 57s left
              </span>
            </div>
            <button className="mt-4 flex w-full justify-center bg-yellow-400 hover:bg-yellow-500 text-[#444444] text-lg  py-3 px-4 rounded">
              Book Now
            </button>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {/* Left Column */}
          <div className="border rounded-md px-4 py-4">
            <div className='flex items-center gap-4 mb-3'>
              <div className="w-15 h-15 rounded-full overflow-hidden border border-purple-500">
                <Image src="/Adminprofile.jpg" alt='profilepic' width={70} height={70} />
              </div>
              <h3 className="text-[18px] font-bold ">Ashutosh</h3>
            </div>
            <div>
              <p>
                With 14 years of experience and fluency in Hindi and Gujarati,
                Adhyatma excels in Vedic, Nadi, Vastu, and Prashana, offering
                profound insights and remedies.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className='border rounded-md px-4 py-4'>
            <h3 className="font-bold text-lg">What are the benefits?</h3>
            <ul className="text-base text-gray-700 list-disc list-inside mt-2">
              <li>
                This chalisa brings happiness and acts as a protective shield
              </li>
              <li>Helps in overcoming anxiety issues</li>
              <li>Overcoming obstacles and challenges</li>
              <li>Fosters inner peace and devotion</li>
            </ul>
          </div>
        </div>

        {/* Other Sections
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="font-bold text-lg">How will it happen?</h3>
            <ul className="text-base text-gray-700 list-disc list-inside mt-2">
              <li>Book the Pooja</li>
              <li>Input your Name and Surname/Gotra for Sankalp</li>
              <li>You can attend Pooja live on video call</li>
              <li>Take the blessings</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">About Bajrang Bali</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
              <li>He is known for his strength, devotion, and loyalty</li>
              <li>Worshipped for overcoming obstacles and challenges</li>
              <li>Revered for selfless service and devotion</li>
              <li>Symbol of courage and protection</li>
            </ul>
          </div>
        </div> */}

        {/* Testimonials */}
        <div className="mt-8">
          <h3 className="font-bold text-lg">Customer Testimonials</h3>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow">
            <div className="flex items-center space-x-4">
              <img src="/images/user-avatar.jpg" /* Replace with user avatar */ alt="User" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-sm font-bold">Ayushi</h4>
                <span className="text-xs text-gray-500">Feb 7, 2024</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              Ye Bajrang Baan Aarti ghar mein shanti aur samriddhi layi. 🙏
            </p>
          </div>
        </div>
      </div>
    </div>;
}

export default PoojaDetails
