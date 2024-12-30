"use client";

import React from "react";
import Image from "next/image";

export default function IndividualBlogContent() {
  return (
    <div className="min-h-screen px-6 lg:px-20 bg-gray-50">
      {/* Blog Heading */}
      <div className="py-10">
        <h1 className="text-4xl md:text-5xl font-medium font-heading text-[#212529] text-center">
          Exploring the Wonders of the Svadhisthana Experience
        </h1>
      </div>

      {/* Blog Image */}
      <div className="relative w-full h-[380px] overflow-hidden rounded-xl shadow-lg">
        <Image
          src="/blog1.jpg"
          alt="Blog Image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* Blog Content */}
      <div className="py-8  ">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          lacus eget nulla tincidunt varius. Vivamus volutpat ipsum vitae
          aliquet consequat. Integer dictum venenatis felis, in sagittis arcu
          dictum id. Praesent interdum erat non ex vehicula, nec feugiat eros
          tincidunt. Ut malesuada, elit ac consequat efficitur, lorem lectus
          iaculis lorem, eget interdum enim erat at felis.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Curabitur vel quam euismod, aliquam massa non, viverra quam. Sed ut
          felis fermentum, aliquam est eget, dapibus eros. Nulla facilisi.
          Aliquam erat volutpat. Nullam at libero nec magna iaculis tempor.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Fusce tristique arcu sed purus placerat, vel accumsan lorem eleifend.
          Donec at turpis vel turpis scelerisque gravida quis vel tortor.
          Pellentesque non magna sed ligula sollicitudin tincidunt.
        </p>
      </div>

      {/* Blog Author and Date */}
      <div className="flex justify-between items-center border-t py-6 ">
        <p className="text-sm text-gray-600">Author: <span className="font-semibold">Ashutosh</span></p>
        <p className="text-sm text-gray-600">Published: Dec 16, 2024</p>
      </div>
    </div>
  );
}
