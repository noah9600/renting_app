/* eslint-disable @next/next/no-img-element */
// components/Testimonials/Testimonials.tsx
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan tellus nec risus tincidunt, vitae auctor ligula laoreet.',
      image: '/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg', // Remove '/public'
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Sed auctor quam vel turpis venenatis, et vehicula lacus sollicitudin. Vivamus aliquet, sem id dapibus fermentum, libero dolor ultricies quam.',
      image: '/jurica-koletic-7YVZYZeITc8-unsplash.jpg', // Remove '/public'
    },
    {
      id: 3,
      name: 'Michelle Kim',
      feedback: 'Sed auctor quam vel turpis venenatis, et vehicula lacus sollicitudin. Vivamus aliquet, sem id dapibus fermentum, libero dolor ultricies quam.',
      image: '/ph-m-duy-quang-QGr6H7pri-Q-unsplash.jpg', // Remove '/public'
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-md shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
              />
              <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
              <p className="text-gray-800 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
