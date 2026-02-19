import { useMemo, useState } from "react";
import SiteLayout from "../components/SiteLayout";
import CarCard from "../components/CarCard";
import RentSearchBar from "../components/RentSearchBar";
import { cars } from "../data/cars";

const RentPage = () => {
  const priceMax = Math.max(...cars.map((car) => car.pricePerDay));

  const vehicleTypes = useMemo(() => {
    const map = new Map<string, number>();

    cars.forEach((car) => {
      map.set(car.badgeTag, (map.get(car.badgeTag) ?? 0) + 1);
    });

    return Array.from(map.entries()).map(([type, count]) => ({ type, count }));
  }, []);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(priceMax);
  const [transmission, setTransmission] = useState<"All" | "Automatic" | "Manual">("All");
  const [fuelType, setFuelType] = useState<"All" | "Gas" | "Electric" | "Hybrid">("All");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(car.badgeTag);
      const matchesPrice = car.pricePerDay <= maxPrice;
      const matchesTransmission =
        transmission === "All" || car.transmission === transmission;
      const matchesFuel = fuelType === "All" || car.fuelType === fuelType;

      return matchesType && matchesPrice && matchesTransmission && matchesFuel;
    });
  }, [selectedTypes, maxPrice, transmission, fuelType]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type],
    );
  };

  return (
    <SiteLayout>
      <div className="-mt-20">
        <RentSearchBar />
      </div>
      <section className="w-full bg-slate-100 py-10 pr-6 pl-0">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-bold tracking-wide text-slate-900 uppercase">
              Vehicle Type
            </h2>
            <div className="mt-4 space-y-3">
              {vehicleTypes.map((item) => (
                <label
                  key={item.type}
                  className="flex cursor-pointer items-center justify-between text-sm text-slate-600"
                >
                  <span className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                      checked={selectedTypes.includes(item.type)}
                      onChange={() => toggleType(item.type)}
                    />
                    {item.type}
                  </span>
                  <span>({item.count})</span>
                </label>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">
                Daily Price
              </h3>
              <input
                type="range"
                min={40}
                max={priceMax}
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
                className="mt-4 w-full accent-blue-600"
              />
              <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                <span>$40</span>
                <span>${maxPrice}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">
                Transmission
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(["All", "Automatic", "Manual"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTransmission(option)}
                    className={`rounded-lg border px-2 py-2 text-xs font-semibold transition ${
                      transmission === option
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">
                Fuel Type
              </h3>
              <div className="mt-3 space-y-2">
                {(["All", "Gas", "Electric", "Hybrid"] as const).map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
                  >
                    <input
                      type="radio"
                      className="h-4 w-4 accent-blue-600"
                      name="fuelType"
                      checked={fuelType === option}
                      onChange={() => setFuelType(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-end justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Available Vehicles
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredCars.length} result(s) found
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <p className="mt-8 text-sm text-slate-500">
                No cars match these filters. Try widening your price range or selecting
                fewer filter options.
              </p>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default RentPage;
