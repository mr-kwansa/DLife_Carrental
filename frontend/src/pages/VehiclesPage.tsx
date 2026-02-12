import PayNow from "../components/PayNow";
import SiteLayout from "../components/SiteLayout";
import VehicleCard from "../components/VehicleCard";
import { cars } from "../data/cars";
import {
  FaShieldHeart,
  FaBroom,
  FaWrench,
  FaClipboardCheck,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa6";


const VehiclesPage = () => {
  const pricePerDay = 150;
  const days = 3;
  const total = pricePerDay * days;


  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[#f8f3ee] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-orange-500">
              Home <span className="text-gray-400">/</span> Vehicles
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 lg:text-6xl">
              Vehicles
            </h1>
          </div>
          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
              alt="Vehicle handoff"
              className="h-56 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase text-orange-500">
            Our Luxury Vehicles
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 lg:text-3xl">
            Discover our meticulously maintained fleet of premium vehicles, each
            designed to provide the ultimate comfort and style for your journey.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-3xl bg-gray-50 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Vehicle Type
              </label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
                <option>All Vehicles</option>
                <option>Luxury</option>
                <option>SUV</option>
                <option>Compact</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Price Range
              </label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
                <option>Any Price</option>
                <option>$0 - $100</option>
                <option>$100 - $200</option>
                <option>$200+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Passenger Capacity
              </label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
                <option>Any Capacity</option>
                <option>2-4</option>
                <option>5</option>
                <option>6</option>
                <option>7+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Sort By
              </label>
              <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <section className="bg-white px-6 pb-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Maintenance Standards
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Safety First",
                text:
                  "All vehicles undergo rigorous safety inspections and maintenance checks every 3,000 miles.",
                icon: <FaShieldHeart />,
              },
              {
                title: "Deep Cleaning",
                text:
                  "Professional cleaning and sanitization after every trip using hospital-grade disinfectants.",
                icon: <FaBroom />,
              },
              {
                title: "Regular Servicing",
                text:
                  "Scheduled maintenance with certified technicians using genuine parts and fluids.",
                icon: <FaWrench />,
              },
              {
                title: "Quality Assurance",
                text:
                  "150-point inspection checklist for every vehicle before it is cleared for service.",
                icon: <FaClipboardCheck />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-orange-100 bg-white px-6 py-8 shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-2xl text-orange-600">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-500 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 text-white lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-lg font-semibold">
            DLIFE is a premium car rental service offering professional
            chauffeurs, reliable vehicles, and exceptional comfort for every
            journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white">
              <FaApple className="text-lg" />
              Download on the App Store
            </button>
            <button className="flex items-center gap-3 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white">
              <FaGooglePlay className="text-lg" />
              Get it on Google Play
            </button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default VehiclesPage;
