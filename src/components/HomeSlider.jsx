import React from 'react'
import { useState, useEffect } from 'react';

const NavSilder = () => {
  const slides = [
    {
      id: 1,
      title: "First Slide",
      description: "This is the first slide content",
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "Second Slide",
      description: "This is the second slide content",
      bgColor: "bg-green-500"
    },
    {
      id: 3,
      title: "Third Slide",
      description: "This is the third slide content",
      bgColor: "bg-purple-500"
    },
  ];

  const recommendationBrand = [
    {
      id: 1,
      title: "Brand A",
      img: "Description for Brand A",
    },
    {
      id: 2,
      title: "Brand B",
      img: "Description for Brand B",

    },
    {
      id: 3,
      title: "Brand C",
      img: "Description for Brand C",
    },
    {
      id: 4,
      title: "Brand C",
      img: "Description for Brand C",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalTime = 5000; // 5 seconds

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(nextSlide, intervalTime);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);
  return (
    <>
      <div className="m-auto py-4 w-[90%]">

        <div
          className="relative overflow-hidden rounded-xl shadow-lg h-60 md:h-96 "
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Slides container */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-full flex-shrink-0 flex items-center justify-center ${slide.bgColor} text-white`}
              >
                <div className="text-center p-6">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
      <div className="w-[90%] h-auto py-2 m-auto flex flex-col justify-between">
        <h1 className="text-2xl font-bold">Recommendation Brands</h1>
        <div className="w-full h-[140px] overflow-x-scroll scroll-smooth flex items-center gap-4 snap-x snap-proximity scrollbar-none">
          {recommendationBrand.map((brand) => (
            <div key={brand.id} className="min-w-[100px] min-h-[100px] bg-gray-200 rounded-full flex flex-col items-center justify-center p-2 text-center crusor-pointer">
              <h2 className="text-sm font-semibold snap-center">{brand.title}</h2>
              <p className="text-xs">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default NavSilder
