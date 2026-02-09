import { useState, useEffect } from 'react';

const Hero = () => {
  // Array of sports car image URLs
  const sportsCars = [
    "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle10.jpg",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
    "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle4.jpg",
    "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle6.jpg",
    "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle8.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === sportsCars.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [sportsCars.length]);
  return (
    <section className="relative py-32 bg-white w-full ">
  <div className="w-full px-6 lg:px-12 h-full flex">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 w-full items-center">
      
      {/* LEFT */}
      <div className="space-y-6">
        <h1 className="text-8xl font-extrabold leading-tight">
          <span className="text-red-600">Rent Smart.</span><br />
          Drive Anywhere<br />
          with DLIFE.
        </h1>

        <p className="text-gray-600 max-w-md">
          Affordable, reliable, and hassle-free car rentals in minutes.
        </p>

        <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
          Start Booking
        </button>
      </div>

      {/* RIGHT - larger image, pushed to far right */}
      <div className="flex justify-end">
        <div className="relative overflow-hidden w-[600px] h-[450px] lg:w-[900px] lg:h-[550px] rounded-2xl">
        {sportsCars.map((car, index) => (
          <img
            key={index}
            src={car}
            className={`w-full h-full object-cover absolute inset-0 rounded-2xl transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            alt={`Sports car ${index + 1}`}
          />
        ))}
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Hero;
