import type { Car } from "./types";
import { FaCarSide, FaSuitcase, FaSnowflake, FaGears } from "react-icons/fa6";

type VehicleCardProps = {
  car: Car;
};

const VehicleCard = ({ car }: VehicleCardProps) => {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 w-full overflow-hidden rounded-t-3xl">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-6 pb-6 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.brand}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-orange-600">
              ${car.pricePerDay}
            </p>
            <p className="text-xs text-gray-500">Per day</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2 text-center text-xs text-gray-600">
          <div className="flex flex-col items-center gap-2">
            <FaCarSide className="text-lg text-gray-500" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaSuitcase className="text-lg text-gray-500" />
            <span>{car.bags ?? 2} Bags</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaSnowflake className="text-lg text-gray-500" />
            <span>AC</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGears className="text-lg text-gray-500" />
            <span>Auto</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button className="flex-1 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500">
            Rent Now
          </button>
          <button className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
