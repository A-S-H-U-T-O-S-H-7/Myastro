"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#1c1c1c] px-6 py-12 lg:px-28">
      <h1 className="text-white text-2xl py-2">About Us</h1>
      <p className="text-[#d3d4d4] text-sm pb-6">
        Welcome to our myastro.org.in! We are a team of passionate astrologers
        dedicated to providing accurate and insightful information about astrology
        and its impact on our lives.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-2xl text-white mb-2">My Astro</h3>
          <p className="text-sm text-[#d3d4d4]">
            <Link href="/horoscope/daily">
              Welcome to our myastro.org.in! We are a team of passionate astrologers
              dedicated.
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-2xl text-white mb-2">Product</h3>
          <ul className="space-y-1">
            <li className="text-sm text-[#d3d4d4]">
              <Link href="/horoscope/daily">Horoscope</Link>
            </li>
            <li className="text-sm text-[#d3d4d4]">
              <Link href="/horoscope/daily">Astro-Category</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl text-white mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li className="text-sm text-[#d3d4d4]">
              <Link href="/horoscope/daily">Mantras</Link>
            </li>
            <li className="text-sm text-[#d3d4d4]">
              <Link href="/horoscope/daily">Free Kundli</Link>
            </li>
            <li className="text-sm text-[#d3d4d4]">
              <Link href="/astrologer/login">Astrologer Registration</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl text-white mb-2">Company</h3>
          <ul className="space-y-1">
            <li className="text-sm text-[#d3d4d4]">
              <Link href="/horoscope/daily">Privacy Policy</Link>
            </li>
            <li className="text-sm text-[#d3d4d4]">
              <Link href="/horoscope/daily">Terms of Use</Link>
            </li>
            <li className="text-sm text-[#d3d4d4]">
              <Link href="/horoscope/daily">Join Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl text-white mb-2">Contact</h3>
          <p className="text-sm text-[#d3d4d4]">
            <Link href="/horoscope/daily">+91 9556508941 (Customer Care)</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
