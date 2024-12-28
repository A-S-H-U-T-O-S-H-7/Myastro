"use client"
import React, { useEffect, useState, useRef } from 'react';
import AstrologerCard from './AstrologerCrad'
import { PropagateLoader } from 'react-spinners';

const AstrologerCardContainer = () => {
  const [pageno, setPageNo] = useState(1);
  const [astrologers, setAstrologers] = useState([]);
  const [loader, setLoader] = useState(false);
  const observerRef = useRef(null);

  const handleFullAstrologer = async () => {
    setLoader(true);
    try {

      if (pageno > 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/load-astrologers/${pageno}`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      if (data.status === true) {
        setAstrologers((prevAstrologer) => [...prevAstrologer, ...data.astrologers]);
        setPageNo((prevPageno) => prevPageno + 1);
        setLoader(false);
      }
    } catch (error) {
      console.error("Failed to fetch astrologers", error);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loader) {
          handleFullAstrologer();
        }
      },
      { threshold: 1.0 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [pageno]);
  console.log(loader)
  return (
    <div>
      <div className="px-[10px] lg:px-[65px] py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {astrologers.length > 0 && (
          astrologers.map((astrologer, index) => (
            <AstrologerCard key={index} data={astrologer} />
          ))
        )}
      </div>
      <div ref={observerRef} className="h-10 my-4 flex justify-center items-center">
        {loader && <PropagateLoader loading={loader} color='#542875' />}
      </div>
    </div>
  );
};

export default AstrologerCardContainer;
