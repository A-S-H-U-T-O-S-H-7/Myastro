import React from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import { Fullscreen } from 'lucide-react';
import Link from 'next/link';

function BlogCard() {
  return (
    <Link href="/blog"> 
    <div className="group min-w-[250px] h-[310px] hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 flex flex-col justify-between gap-3 relative cursor-pointer rounded-xl border border-purple-500 bg-white">
      {/* Image Section */}
      <div className="h-[160px] rounded-t-xl overflow-hidden relative">
        <Image
          src="/blog1.jpg"
          alt="Blog Thumbnail"
          width={300}
          layout="responsive"
          height={160}
          className="rounded-t-xl group-hover:brightness-90 transition-all duration-300"
        />
        {/* View Count Badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-3 py-1 bg-purple-700 text-white text-xs rounded-full shadow-md">
          <FaEye size={14} />
          <span>2345</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="px-4 py-2">
        <h3 className="text-sm font-semibold leading-tight text-gray-800  transition-colors duration-300">
          Embrace Change, Embrace Life: The Svadhisthana Experience
        </h3>
        <span className="text-sm text-purple-700 font-semibold cursor-pointer group-hover:underline">
          Read More
        </span>
      </div>

      {/* Author & Date Section */}
      <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
        <p className="text-xs text-gray-600">Ashutosh</p>
        <p className="text-xs text-gray-600">Dec 16, 2024</p>
      </div>
    </div>
    </Link>   
  );
}

export default BlogCard;
