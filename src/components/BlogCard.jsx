import React from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';

function BlogCard({ post }) {
  const formattedDate = new Date(post.publishdate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link href={`/blogs/${post.slug}`} passHref>
      <div className="group min-w-[250px] h-[310px] hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 flex flex-col justify-between gap-3 relative cursor-pointer rounded-xl border border-purple-500 bg-white">
        {/* Image Section */}
        <div className="h-[160px] rounded-t-xl overflow-hidden relative">
          <Image
            src={post.thumbnailurl}
            alt={post.metatitle}
            width={300}
            layout="responsive"
            height={160}
            className="rounded-t-xl object-cover group-hover:brightness-90 transition-all duration-300"
          />
          {/* View Count Badge */}
          <div className="absolute top-2 right-2 flex items-center gap-1 px-3 py-1 bg-purple-700 text-white text-xs rounded-full shadow-md">
            <FaEye size={14} />
            <span>287</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="px-4 py-2">
          <h3 className="text-sm font-semibold leading-tight text-gray-800 transition-colors duration-300">
            {post.title}
          </h3>
          <span className="text-sm text-purple-700 font-semibold cursor-pointer group-hover:underline">
            Read More
          </span>
        </div>

        {/* Author & Date Section */}
        <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
          <p className="text-xs text-gray-600">Admin</p>
          <p className="text-xs text-gray-600">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
