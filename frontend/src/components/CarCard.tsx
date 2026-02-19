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
    <article className="mx-auto w-full max-w-[460px] min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative h-56 overflow-hidden rounded-b-none rounded-2xl bg-slate-100 p-3">
        <span className="absolute left-4 top-4 rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
          {car.badgeTag}
        </span>
        <img
          src={car.imageUrl}
          alt={car.name}
          className="h-full w-full rounded-xl object-cover object-center"
        />
      </div>

      <div className="space-y-5 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
              {car.brand} {car.name}
            </h3>
            <p className="mt-1 text-base text-slate-500">
              {transmissionLabel} • {car.fuelType}
            </p>
          </div>
          <div className="shrink-0 rounded-lg bg-slate-200 px-3 py-1.5">
            <span className="inline-flex items-center gap-1.5 text-xl font-bold text-slate-800">
              <FaStar className="text-amber-400" />
              {car.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="h-px w-full bg-slate-200" />

        <div className="flex flex-wrap items-center gap-6 text-xl text-slate-500">
          <span className="inline-flex items-center gap-2">
            <FaUser />
            {car.seats} Seats
          </span>
          <span className="inline-flex items-center gap-2">
            {car.transmission === "Automatic" ? (
              <GiGearStick />
            ) : (
              <GiGearStickPattern />
            )}
            {transmissionLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            {car.fuelType === "Electric" ? <FaBolt /> : <FaGasPump />}
            {car.fuelType}
          </span>
        </div>

        <div className="h-px w-full bg-slate-200" />

        <div className="flex items-center justify-between gap-3">
          <p className="text-xl font-semibold tracking-tight text-slate-900">
            ${car.pricePerDay}
            <span className="ml-1.5 text-xl font-medium text-slate-500">/ day</span>
          </p>
          <button className="rounded-xl bg-amber-400 px-8 py-3 text-xl font-bold text-slate-900 shadow-[0_10px_30px_-14px_rgba(245,158,11,0.9)] transition hover:bg-amber-300">
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default CarCard;
