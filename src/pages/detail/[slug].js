import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
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

export default function DetailScreen() {
  const router = useRouter();
  const { query } = router;
  const { slug } = query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (slug) {
      const matchedPost = Posts.find((post) => post._id === slug);
      if (matchedPost) {
        setProduct(matchedPost);
      } else {
        console.error('Product not found');
      }
    }
  }, [slug]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto p-10 bg-gray-100">
        {product && product.images ? (
          <>
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                {product.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt={`Post by ${product.title}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                ))}
              </Slider>
              <div className="bg-white rounded object-cover px-5">
                <h1 className="text-3xl font-semibold mb-3">Description</h1>
                <p className="text-lg mb-4">{product.description}</p>
              </div>
            </div>

            <div className="text-black">
              <p className="mb-2">
                <FaDollarSign className="inline-block mr-2 text-slate-500" />
                Price: {product.price}
              </p>
              <p className="mb-2">
                <FaMapMarkerAlt className="inline-block mr-2 text-green-500" />
                Address: {product.address}
              </p>
              <p className="mb-2">
                <FaCalendarAlt className="inline-block mr-2 text-indigo-500" />
                Date: {product.date}
              </p>
              <div className="mb-2">
                <h2 className="text-xl font-semibold"> Amenities:</h2>
                <ul>
                  <li>
                    <FaFire className="inline-block mr-2 text-red-500" />
                    Gas: {product.amenities.gas ? 'Yes' : 'No'}
                    <FaTint className="inline-block mr-2 text-blue-500 ml-14" />
                    Water: {product.amenities.water ? 'Yes' : 'No'}
                  </li>
                  <li></li>
                  <li>
                    <FaBolt className="inline-block mr-2 text-yellow-500" />
                    Electricity: {product.amenities.electricity ? 'Yes' : 'No'}
                    <FaWifi className="inline-block mr-2 text-gray-500 ml-4" />
                    Wifi: {product.amenities.wifi ? 'Yes' : 'No'}
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
