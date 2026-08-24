import React, { useState, useEffect } from 'react';

// Import your webp images here
import hero1 from '../../assets/images/hydro.png';
import hero2 from '../../assets/images/solar.jpg';
import hero3 from '../../assets/images/wind.webp';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array containing slide data so you can easily update text and images
  const slides = [
    {
      id: 1,
      image: hero1,
      title: "Vision: 50 GW renewable energy\ncapacity by 2030",
      subtitle: "Building a Carbon free Future."
    },
    {
      id: 2,
      image: hero2,
      title: "Pioneering Sustainable\nWind Power Solutions",
      subtitle: "Harnessing nature for tomorrow."
    },
    {
      id: 3,
      image: hero3,
      title: "Innovative Solar Parks\nAcross the Nation",
      subtitle: "Empowering communities with clean energy."
    }
  ];

  // Auto-scrolling logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Changes slide every 5 seconds

    // Cleanup interval on unmount
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay to make white text pop (adjust opacity as needed) */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Text Content matching reference image */}
          {/* CHANGED: Swapped justify-center for justify-end and added bottom padding (pb-24 md:pb-32) */}
          <div className="relative h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-24 max-w-5xl text-white">
            
            {/* CHANGED: Scaled down text classes (text-3xl, 4xl, 5xl) and reduced bottom margin (mb-4) */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 whitespace-pre-line leading-tight">
              {slide.title}
            </h1>
            
            {/* Subtitle with a thin accent line on the left, matching reference */}
            <div className="flex items-center space-x-4 pl-4 border-l-2 border-blue-500/80">
              
              {/* CHANGED: Scaled down text classes (text-base md:text-lg) */}
              <p className="text-base md:text-lg font-light text-gray-200">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots (Bottom Right) */}
      <div className="absolute bottom-10 right-10 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;