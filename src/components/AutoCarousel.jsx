import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.uzum.uz/cvcg2f3vgbkm5ehkika0/main_page_banner.jpg',
    caption: 'Welcome to Our Store',
    link: '/welcome',
  },
  {
    id: 2,
    image: 'https://images.uzum.uz/d0hes233uvph509ttlq0/main_page_banner.jpg',
    caption: 'Big Discounts Available',
    link: '/discounts',
  },
  {
    id: 3,
    image: 'https://images.uzum.uz/d0ddtc0n274j5scll7v0/main_page_banner.jpg',
    caption: 'Shop Your Favorite Products',
    link: '/products',
  },
];

const AutoCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 sekundda bir aylanadi

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[85%] m-auto mt-6 relative overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-64 md:h-96">
        {slides.map((slide, index) => (
          <Link
            key={slide.id}
            to={slide.link}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black/40 text-white px-4 py-2">
              {slide.caption}
            </div>
          </Link>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
