import CarCard from "../components/CarCard";
import Hero from "../components/Hero";
import ReservationForm from "../components/ReservationForm";
import SiteLayout from "../components/SiteLayout";
import WhyDlifeSection from "../components/WhyDlifeSection";
import { cars } from "../data/cars";
import BestPrice from "../components/BestPrice";

const HomePage = () => {
  return (
    <SiteLayout>
      {/* main body with content */}
      <Hero />
      <ReservationForm />
      <BestPrice/>
      <WhyDlifeSection />

      {/* Premium Fleet Section */}
      <section className="py-16 px-6">
        <div className="w-full text-left">
          <div className="mb-8 flex items-start gap-4">
            <h2 className="text-5xl lg:text-6xl font-bold whitespace-nowrap">
              Our Fetured Fleet
            </h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Choose from our wide selection of vehicles, from economical compacts
            to luxurious SUVs, all maintained to the highest standards.
          </p>
        </div>
        <div className="mb-20 mt-12 w-full">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* bellow is how the cars data is pulled into the front end */}
            {cars.slice(0,4).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

    </SiteLayout>
  );
};

export default HomePage;
