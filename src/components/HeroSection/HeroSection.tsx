import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Find Your Room
        </h1>
        <p className="text-lg mb-8">
          Your Trusted Partner in Finding Your Home
        </p>
        <Link href="/listings" passHref legacyBehavior>
          <a className="bg-white hover:bg-slate-300 text-black py-2 px-6 rounded-full text-lg mr-5">
            For Rent
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
