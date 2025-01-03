"use client"
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import ENV from './Env';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BlogSection() {
  const pathname = usePathname();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${ENV.API_URL}/post/home`);
        const data = await response.json();

        if (data.status) {
          setPosts(data.posts);
        } else {
          console.error('No posts found');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="px-[10px] lg:px-[65px] py-4">Loading...</div>;
  }

  return (
    <div className="px-[10px] lg:px-[65px] py-4">
      <h2 className="text-[30px] pb-7 text-[#3C0184] font-heading font-bold">{pathname.startsWith('/blogs/') ? 'Related Blogs' : 'Latest Blogs'}</h2>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4'>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))
        ) : (
          <div className="px-[10px] lg:px-[65px] py-4">No posts available</div>
        )}
      </div>
      <div className='flex justify-center mt-7'>
        <div className="max-w-[250px] min-h-[41px] rounded-3xl px-8 py-2 hover:text-white text-[#317f7f] hover:bg-[#3C0184] border border-[#3C0184]">
          <h3 className="font-semibold cursor-pointer flex justify-center">
           <Link href={"/blogs"}>View All</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
