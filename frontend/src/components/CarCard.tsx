import React from "react";
import type { Car } from "./types";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="!bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg shadow-black/20 min-w-0 hover:shadow-xl transition border border-gray-200">
      {/* Car Image - zoomed to fill frame like product shots */}
      <div className="w-full h-40 overflow-hidden bg-gray-100">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-full object-cover object-center scale-125"
        />
      </div>

      {/* Car Info */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-lg font-semibold">{car.name}</h2>
            <p className="text-gray-400 text-sm">{car.brand}</p>
          </div>
          <span className="text-red-700 font-bold">${car.pricePerDay}</span>
        </div>
        <p className="text-gray-400 text-sm mb-4">Per day</p>

        {/* Features */}
        <div className="flex justify-between text-gray-600 text-xs mb-4">
          <div className="flex flex-col items-center">
            <span>🪑</span>
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center">
            <span>🛄</span>
            <span>{car.bags || 2} Bags</span>
          </div>
          <div className="flex flex-col items-center">
            <span>❄️</span>
            <span>AC</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{car.transmission === "Automatic" ? "A" : "M"}</span>
            <span>{car.transmission}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button className="flex-1 bg-red-700 text-white py-2 rounded-lg font-semibold mr-2 hover:bg-orange-600 transition">
            Rent Now
          </button>
          <button className="text-gray-600 hover:text-gray-900 text-sm">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
