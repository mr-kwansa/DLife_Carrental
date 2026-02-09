import CarCard from "../components/CarCard";
import SiteLayout from "../components/SiteLayout";
import { cars } from "../data/cars";

const VehiclesPage = () => {
  return (
    <SiteLayout>
      <section className="bg-gray-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Fleet Collection
          </p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white">
                Find the right vehicle for every trip.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-300">
                Explore our curated lineup of premium sedans, SUVs, and city
                cars. Filter by category, seating, and transmission to match
                your plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80">
                120+ Vehicles
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80">
                35 Cities
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80">
                Live Availability
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            <input
              type="text"
              placeholder="Search by model or brand"
              className="w-full rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3 text-sm text-white placeholder:text-gray-400"
            />
            <select className="w-full rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3 text-sm text-white">
              <option>All categories</option>
              <option>Luxury</option>
              <option>SUV</option>
              <option>Electric</option>
              <option>Compact</option>
            </select>
            <select className="w-full rounded-xl border border-white/10 bg-gray-900/80 px-4 py-3 text-sm text-white">
              <option>Any transmission</option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
            <button className="w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700">
              Apply Filters
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-3">
            {[
              "All",
              "Executive",
              "SUV & 4x4",
              "City Cars",
              "Electric",
              "Family",
              "Sport",
            ].map((item) => (
              <button
                key={item}
                className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Need help choosing the right vehicle?
            </h2>
            <p className="mt-3 text-gray-600">
              Talk to a fleet specialist and get matched in minutes.
            </p>
            <button className="mt-6 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default VehiclesPage;
