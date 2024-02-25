/* eslint-disable @next/next/no-img-element */
// AboutUs.tsx

import Image from 'next/image';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-18 mt-10 bg-gray-100">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-center mb-12 rounded-md shadow-md">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="francesca-tosolini-LL9V0iMpStM-unsplash.jpg"
              alt="About Us"
              className="w-full h-auto rounded-md shadow-md mb-12 mt-8"
              
            />
          </div>
          
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-4xl font-bold text-orange-600 mb-12 text-center">
              Welcome to MonRent!
            </h2>

            <p className="text-lg mb-4 text-center">
              At MonRent, we believe that your living space should reflect your
            </p>
            <p className="text-lg mb-4 text-center">
            Our mission is to simplify the process of finding and renting homes,
              ensuring a smooth and enjoyable experience for our users.
            </p>

            <p className="text-lg text-center">
              Whether you are  searching for a cozy apartment, a spacious house, or anything in
              between, we have got you covered. Our platform connects landlords with tenants,
              creating a community where people can find the home that suits their needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
