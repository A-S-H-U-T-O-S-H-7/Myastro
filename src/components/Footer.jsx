"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return <div className="bg-[#1c1c1c] px-6 py-12 lg:px-28">
      <h1 className="text-white text-2xl py-2">About Us</h1>
      <p className="text-[#d3d4d4] text-sm pb-6">
        Welcome to myastro.org.in! Our passionate astrologers aim to guide you
        in self-discovery and personal growth through astrology. We provide
        articles, horoscopes, and personalized readings, blending ancient
        wisdom with modern insights to offer accurate and inclusive
        astrological guidance for everyone
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-2xl text-white mb-2">My Astro</h3>
          <p className="text-sm text-[#d3d4d4]">
            <Link href="/horoscope/daily">
              Welcome to our myastro.org.in! We are a team of passionate
              astrologers dedicated.
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-2xl text-white mb-2">Products</h3>
          <ul className="space-y-4">
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/todays-horoscope">
                Today’s Horoscope!
              </Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/horoscope-2025">Horoscope 2025!</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/weekly-horoscope">Weekly Horoscope</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/monthly-horoscope">
                Monthly Horoscope
              </Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/yearly-horoscope">Yearly horoscope</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/daily-horoscope">Daily horoscope</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/tomorrows-horoscope">
                Tomorrow’s Horoscope
              </Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/yesterdays-horoscope">
                Yesterday’s Horoscope
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl text-white mb-2">Useful Links</h3>
          <ul className="space-y-4">
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/talk-to-astrologer">Talk to Astrologer</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/chat-with-astrologer">Chat with Astrologer</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/horoscope/free-kundli">Free Kundli</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/kundli-matching">Kundli Matching</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/blogs">Blog</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-red-500">
              <Link href="/astrologer/call-history ">
                Astrologer Dashboard
              </Link>
            </li>
            <li className="text-sm  hover:text-purple-500 text-red-500">
              <Link href="/astrologer/call-history ">Astrologer Login (testing)</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-red-500">
              <Link href="/admin/manageuser">Admin (testing)</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-red-500">
              <Link href="/astrologer-login">Astro login (testing)</Link>
            </li>
            <li className="text-sm hover:text-purple-500 text-red-500">
              <Link href="/admin-login/login">Admin login (testing)</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl text-white mb-2">Company</h3>
          <ul className="space-y-4">
            <li className="text-sm  hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-sm  hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li className="text-sm  hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
            <li className="text-sm  hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl text-white mb-2">Contact</h3>
          <ul className="space-y-4">
            <li className="text-sm  hover:text-purple-500 text-[#d3d4d4]">
              +0120-4348458 <br /> (Customer Care)
            </li>
            <li className="  hover:text-purple-500 text-[#d3d4d4]">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>;
};

export default Footer;
