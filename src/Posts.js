// src/posts.js

const Posts = [
    {
      _id: '1',
      title: 'Beautiful Home',
      description: 'A cozy home with a lovely garden. As you enter, you\'ll be greeted by an open-concept living space adorned with contemporary furnishings and floor-to-ceiling windows framing spectacular city views. The kitchen is a chef\'s dream, equipped with stainless steel appliances and sleek countertops. This apartment offers two luxurious bedrooms, each with its own ensuite bathroom featuring spa-like amenities. The building amenities are equally impressive, including a fitness center, rooftop lounge, and concierge services. Located in the heart of downtown, this apartment is the epitome of luxury living with easy access to the city\'s vibrant cultural scene and culinary delights.',
      images: [
        '/1701096014060_sidekix-media-0sDzRgrN_pI-unsplash.jpg',
        '/guven-gunes-EzYs7CQR3ig-unsplash.jpg',
      ],
        price: '2000',
      address: '123 Main Street',
      date: '2023-01-01',
      amenities: {
        gas: true,
        water: true,
        electricity: true,
        wifi: false,
      },
    },
    {
      _id: '2',
      title: 'Modern Apartment',
      description: 'Welcome to urban sophistication in this modern apartment perched high above the cityscape. As you enter, you\'ll be greeted by an open-concept living space adorned with contemporary furnishings and floor-to-ceiling windows framing spectacular city views. The kitchen is a chef\'s dream, equipped with stainless steel appliances and sleek countertops. This apartment offers two luxurious bedrooms, each with its own ensuite bathroom featuring spa-like amenities. The building amenities are equally impressive, including a fitness center, rooftop lounge, and concierge services. Located in the heart of downtown, this apartment is the epitome of luxury living with easy access to the city\'s vibrant cultural scene and culinary delights.',
      images:[
        '/1701095800924_vinicius-amnx-amano-17NCG_wOkMY-unsplash.jpg',
        '/yeongkyeong-lee-AkNRiespFjA-unsplash.jpg',
      ],
      price: '1500',
      address: '456 Downtown Avenue',
      date: '2023-02-15',
      amenities: {
        gas: true,
        water: true,
        electricity: true,
        wifi: true,
      },
    },
    {
      _id: '3',
      title: 'Countryside Retreat',
      description: 'Escape to the countryside in this peaceful retreat. As you enter, you\'ll be greeted by an open-concept living space adorned with contemporary furnishings and floor-to-ceiling windows framing spectacular city views. The kitchen is a chef\'s dream, equipped with stainless steel appliances and sleek countertops. This apartment offers two luxurious bedrooms, each with its own ensuite bathroom featuring spa-like amenities. The building amenities are equally impressive, including a fitness center, rooftop lounge, and concierge services. Located in the heart of downtown, this apartment is the epitome of luxury living with easy access to the city\'s vibrant cultural scene and culinary delights.',
      images:[
        '/sven-brandsma-GZ5cKOgeIB0-unsplash.jpg',
        '/sven-brandsma-GmRiN7tVW1w-unsplash.jpg',
      ],
      price: '1800',
      address: '789 Tranquil Lane',
      date: '2023-03-20',
      amenities: {
        gas: true,
        water: true,
        electricity: true,
        wifi: false,
      },
    },
    {
      _id: '4',
      title: 'Beachfront Villa',
      description: 'Enjoy the sun and sand in this beautiful beachfront villa. As you enter, you\'ll be greeted by an open-concept living space adorned with contemporary furnishings and floor-to-ceiling windows framing spectacular city views. The kitchen is a chef\'s dream, equipped with stainless steel appliances and sleek countertops. This apartment offers two luxurious bedrooms, each with its own ensuite bathroom featuring spa-like amenities. The building amenities are equally impressive, including a fitness center, rooftop lounge, and concierge services. Located in the heart of downtown, this apartment is the epitome of luxury living with easy access to the city\'s vibrant cultural scene and culinary delights.',
      images:[
        '/spacejoy-YI2YkyaREHk-unsplash.jpg',
        'sidekix-media-1vMz2_MclrM-unsplash.jpg',
      ],
      price: '2500',
      address: '101 Oceanfront Boulevard',
      date: '2023-04-10',
      amenities: {
        gas: true,
        water: true,
        electricity: true,
        wifi: true,
      },
    },
    {
      _id: '5',
      title: 'Mountain Cabin',
      description: 'Cozy cabin nestled in the mountains for a serene getaway.',
      images:[
        '/roberto-nickson-tleCJiDOri0-unsplash.jpg',
        'naomi-hebert-2dcYhvbHV-M-unsplash.jpg',
        '/roberto-nickson-tleCJiDOri0-unsplash.jpg',
      ],
      price: '1200',
      address: '222 Mountain View Road',
      date: '2023-05-05',
      amenities: {
        gas: false,
        water: true,
        electricity: true,
        wifi: false,
      },
    },
    // Add more posts as needed
  ];
  
  export default Posts;
  