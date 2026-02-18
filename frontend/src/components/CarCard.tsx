import React from "react";
import type { Car } from "./types";
import { FaBolt, FaGasPump, FaStar, FaUser } from "react-icons/fa";
import { GiGearStickPattern, GiGearStick } from "react-icons/gi";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const transmissionLabel =
    car.transmission === "Automatic" ? "Automatic" : "Manual";

  return (
    <article className="w-full min-w-0 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative h-72 overflow-hidden rounded-b-none rounded-[28px] bg-slate-100 p-4">
        <span className="absolute left-5 top-5 rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.14em] text-white">
          {car.badgeTag}
        </span>
        <img
          src={car.imageUrl}
          alt={car.name}
          className="h-full w-full rounded-2xl object-cover object-center"
        />
      </div>

      <div className="space-y-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
              {car.brand} {car.name}
            </h3>
            <p className="mt-1 text-xl text-slate-500">
              {transmissionLabel} • {car.fuelType}
            </p>
          </div>
          <div className="shrink-0 rounded-xl bg-slate-200 px-4 py-2">
            <span className="inline-flex items-center gap-2 text-2xl font-bold text-slate-800">
              <FaStar className="text-amber-400" />
              {car.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-slate-200" />

        <div className="flex flex-wrap items-center gap-8 text-2xl text-slate-500">
          <span className="inline-flex items-center gap-3">
            <FaUser />
            {car.seats} Seats
          </span>
          <span className="inline-flex items-center gap-3">
            {car.transmission === "Automatic" ? (
              <GiGearStick />
            ) : (
              <GiGearStickPattern />
            )}
            {transmissionLabel}
          </span>
          <span className="inline-flex items-center gap-3">
            {car.fuelType === "Electric" ? <FaBolt /> : <FaGasPump />}
            {car.fuelType}
          </span>
        </div>

        <div className="h-px w-full bg-slate-200" />

        <div className="flex items-center justify-between gap-4">
          <p className="text-4xl font-semibold tracking-tight text-slate-900">
            ${car.pricePerDay}
            <span className="ml-2 text-2xl font-medium text-slate-500">/ day</span>
          </p>
          <button className="rounded-2xl bg-amber-400 px-10 py-4 text-3xl font-bold text-slate-900 shadow-[0_10px_30px_-14px_rgba(245,158,11,0.9)] transition hover:bg-amber-300">
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default CarCard;
