import { useState } from "react";
import {
  FaLocationDot,
  FaMagnifyingGlass,
  FaRegCalendarDays,
  FaUsers,
} from "react-icons/fa6";

const RentSearchBar = () => {
  const [location, setLocation] = useState("New York, JFK Airport");
  const [pickupDate, setPickupDate] = useState("2026-10-24");
  const [guests, setGuests] = useState("2 Adults, 1 Child");

  return (
    <div className="w-full border-b border-slate-200 bg-white px-0 py-4">
      <div className="flex w-full flex-col gap-3 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-3 md:flex-row">
          <div className="relative flex h-11 flex-1 items-center rounded-lg bg-slate-100">
            <FaLocationDot className="pointer-events-none absolute left-3 text-blue-600" />
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="h-full w-full rounded-lg bg-transparent pr-3 pl-9 text-sm text-slate-700 outline-none placeholder:text-slate-500"
              placeholder="Pick-up location"
            />
          </div>

          <div className="relative flex h-11 flex-1 items-center rounded-lg bg-slate-100">
            <FaRegCalendarDays className="pointer-events-none absolute left-3 text-blue-600" />
            <input
              type="date"
              value={pickupDate}
              onChange={(event) => setPickupDate(event.target.value)}
              className="h-full w-full rounded-lg bg-transparent pr-3 pl-9 text-sm text-slate-700 outline-none"
            />
          </div>

          <div className="relative flex h-11 flex-1 items-center rounded-lg bg-slate-100"
          >
            <FaUsers className="pointer-events-none absolute left-3 text-blue-600" />
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="h-full w-full rounded-lg bg-transparent pr-3 pl-9 text-sm text-slate-700 outline-none"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>4 Adults</option>
              <option>5 Adults</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          <FaMagnifyingGlass className="text-xs" />
          Update Search
        </button>
      </div>
    </div>
  );
};

export default RentSearchBar;
