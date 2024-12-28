"use client"
import React, { useEffect, useState } from 'react'
import AstrologerCard from './AstrologerCrad'
import Link from 'next/link';
import env from './Env';

const AstrologerCardContainer = () => {

  const [pageno, setPageNo] = useState(1);
  const [astrologers, setAstrologers] = useState([]);
  const [loader, setLoader] = useState(false)

  const handleHomeAstrologer = async () => {

    setLoader(true);
    try {
      const response = await fetch(
        `${env.API_URL}/load-astrologers/${pageno}`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      setAstrologers((prevAstrologer) => [...prevAstrologer, ...data.astrologers]);
      setPageNo(prevPageno => prevPageno + 1);
      setLoader(false);
    } catch (error) {
      setAstrologers([]);
      setLoader(false);
    }
  };

  useEffect(() => {
    if (pageno <= 2) {
      handleHomeAstrologer();
    }
  }, [pageno]);


  return (
    <div>
      <div className="px-[10px] lg:px-[65px] py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {astrologers.length > 0 ? (
          astrologers.map((astrologer, index) => (
            <AstrologerCard key={index} data={astrologer} />
          ))
        ):(<div className='text-gray-900'>Loading...</div>)}
      </div>
      <div className="flex justify-center py-6">
        <Link href="/astrologers">
          <div className="max-w-[250px] min-h-[41px] rounded-3xl px-8 py-2  hover:text-white   text-[#317f7f] hover:bg-[#3C0184] border border-[#3C0184] ">
            <h3 className="font-semibold cursor-pointer ">
              View All Astrologers
            </h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AstrologerCardContainer
