
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Posts from '@/Posts';

import {
  FaHome,
  FaDollarSign,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFire,
  FaTint,
  FaBolt,
  FaWifi,
} from 'react-icons/fa';


interface Posts {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  address: string;
  date: string;
  amenities: {
    gas: boolean;
    water: boolean;
    electricity: boolean;
    wifi: boolean;
  };
}

const ListingCards: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
  
    const handlePageChange = (newPage: number) => {
      setCurrentPage(newPage);
    };
  
    const postsPerPage = 12;
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = Posts.slice(startIndex, endIndex);
  
    return (
      <div className="relative bg-gray-100 mt-10 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedPosts.map((post) => (
  <Link key={post._id} href={`/detail/${post._id}`} passHref>
    <div className="group">
      <div className="bg-white p-10 rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 group-hover:scale-105 mt-5">
      <Image
  src={Array.isArray(post.images) ? post.images[0] : post.images}
  alt={`Post by ${post.title}`}
  className="w-full h-32 object-cover mb-5 rounded-md"
  width={350}
  height={550}
/>
        <div className="text-black">
          <h2 className="mb-2 text-2xl font-semibold">
            <FaHome className="inline-block mr-2 text-pink-500" />
            {post.title}
          </h2>
          <p className="mb-2">
            <FaDollarSign className="inline-block mr-2 text-slate-500" />
            Price: {post.price}
          </p>
          <p className="mb-2">
            <FaMapMarkerAlt className="inline-block mr-2 text-green-500" />
            Address: {post.address}
          </p>
          <p className="mb-2">
            <FaCalendarAlt className="inline-block mr-2 text-indigo-500" />
            Date: {post.date}
          </p>
          <div className="mb-2">
            <h2 className="text-xl font-semibold"> Amenities:</h2>
            <ul>
              <li>
                <FaFire className="inline-block mr-2 text-red-500" />
                Gas: {post.amenities.gas ? 'Yes' : 'No'}
                <FaTint className="inline-block mr-2 text-blue-500 ml-14" />
                Water: {post.amenities.water ? 'Yes' : 'No'}
              </li>

                    <li>
                    </li>
                    <li>
                      <FaBolt className="inline-block mr-2 text-yellow-500" />
                      Electricity: {post.amenities.electricity ? 'Yes' : 'No'}
                      <FaWifi className="inline-block mr-2 text-gray-500 ml-4" />
                      Wifi: {post.amenities.wifi ? 'Yes' : 'No'}
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
      </div>
      <div className="absolute -bottom-1/10 left-0 w-full bg-gray-100 p-4 flex items-center justify-center">
        <button
          className="py-2 px-2 bg-white border rounded-full"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4"> Page {currentPage}</span>
        <button
          className="py-2 px-5 bg-white border rounded-full"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === 5}
        >
          Next
        </button>
      </div>

    </div>
  );
};


export default ListingCards;
