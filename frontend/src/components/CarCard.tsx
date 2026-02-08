import React from "react";
import type { Car } from "./types";
import Icon from "@mdi/react";
import { mdiCarSeat } from "@mdi/js";
import { FaRegSnowflake } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GiGearStickPattern, GiGearStick } from "react-icons/gi";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-700/50 w-full min-w-0">
      {/* Car Image - 2x height */}
      <div className="w-full h-96 overflow-hidden bg-gray-700">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Car Info - 2x padding and typography */}
      <div className="p-10">
        {/* Name, type, and price row */}
        <div className="flex justify-between items-start gap-6 mb-8">
          <div>
            <h2 className="font-bold text-3xl text-white">{car.name}</h2>
            <p className="text-gray-400 text-base">{car.brand}</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-3xl font-bold text-white">${car.pricePerDay}</span>
            <p className="text-gray-400 text-sm">Per day</p>
          </div>
        </div>

        {/* Features: Seats, Bags, AC, Transmission */}
        <div className="flex justify-between text-gray-400 text-base mb-10">
          <div className="flex flex-col items-center gap-2">
            <Icon path={mdiCarSeat} size={1.3} className="text-gray-300" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaBagShopping className="text-gray-300 text-2xl" />
            <span>{car.bags ?? 2} Bags</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaRegSnowflake className="text-gray-300 text-2xl" />
            <span>AC</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            {car.transmission === "Automatic" ? (
              <GiGearStick className="text-gray-300 text-2xl" />
            ) : (
              <GiGearStickPattern className="text-gray-300 text-2xl" />
            )}
            <span>Auto</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6">
          <button className="flex-1 bg-orange-600 text-white py-5 rounded-xl font-semibold hover:bg-orange-500 transition text-base">
            Rent Now
          </button>
          <button className="flex-1 bg-gray-700 text-gray-200 py-5 rounded-xl font-semibold hover:bg-gray-600 transition text-base border border-gray-600">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
