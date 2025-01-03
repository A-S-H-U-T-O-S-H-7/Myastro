"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ENV from "./Env";
import DOMPurify from 'dompurify';

export default function IndividualBlogContent() {

  const pathname = usePathname();
  const [slug] = pathname.split("/").slice(-1);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const fetchPost = async () => {
      try {
        const response = await fetch(`${ENV.API_URL}/post/${slug}`);
        const data = await response.json();
        if (response.ok) {
          setPost(data.post);
        } else {
          console.error("Error fetching post data");
        }
      } catch (error) {
        console.error("Error fetching post data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen px-6 lg:px-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen px-6 lg:px-20">
        <p>Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 lg:px-20 bg-gray-50">
      {/* Blog Heading */}
      <div className="py-10">
        <h1 className="text-4xl md:text-5xl font-medium font-heading text-[#212529] text-center">
          {post.title}
        </h1>
      </div>

      {/* Blog Image */}
      <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
        <Image
          src={post.thumbnailurl || "/default-thumbnail.jpg"}
          alt="Blog Image"
          layout="fill"
          objectFit="fill"
          className="rounded-xl"
        />
      </div>

      {/* Blog Content */}
      <div className="py-8"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
      {/* Blog Author and Date */}
      <div className="flex justify-between items-center border-t py-6">
        <p className="text-sm text-gray-600">
          Author: <span className="font-semibold">{"Admin"}</span>
        </p>
        <p className="text-sm text-gray-600">
          Published: {new Date(post.publishdate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
