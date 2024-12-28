"use client";
import React, { useEffect, useState } from "react";
import AstrologerCard from "./AstrologerCrad";

const ThreeAstrologerCardContainer = () => {
  const [astrologers, setAstrologers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const handleHomeAstrologer = async () => {
    setLoader(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/load-astrologers/1`, 
        {
          cache: "no-store",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch astrologers.");
      }
      const data = await response.json();
      setAstrologers(data.astrologers || []);
    } catch (err) {
      setError(err.message || "An unknown error occurred.");
      setAstrologers([]);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    handleHomeAstrologer();
  }, []);

  return (
    <div className="px-[10px] lg:px-[65px] py-4">
      {loader && (
        <div className="text-center text-gray-900">
          <p>Loading astrologers...</p>
        </div>
      )}

      {!loader && error && (
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      )}

      {!loader && !error && astrologers.length === 0 && (
        <div className="text-center text-gray-900">
          <p>No astrologers found.</p>
        </div>
      )}

      {!loader && !error && astrologers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {astrologers.slice(0, 3).map((astrologer, index) => (
            <AstrologerCard key={index} data={astrologer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreeAstrologerCardContainer;
