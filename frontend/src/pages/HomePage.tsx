import CarCard from "../components/CarCard";
import BusinessReadySection from "../components/BusinessReadySection";
import FlexiblePlansSection from "../components/FlexiblePlansSection";
import Hero from "../components/Hero";
import PremiumCareSection from "../components/PremiumCareSection";
import ReservationForm from "../components/ReservationForm";
import Reviews from "../components/Reviews";
import SiteLayout from "../components/SiteLayout";
import ThreeSteps from "../components/ThreeSteps";
import WhyDlifeSection from "../components/WhyDlifeSection";
import { cars } from "../data/cars";
import BestPrice from "../components/bestprice";

const HomePage = () => {
  return (
    <SiteLayout>
      {/* main body with content */}
      <Hero />
      <ReservationForm />
      <BestPrice/>
      {/* <section id="services">
        <ThreeSteps />
      </section> */}
      <WhyDlifeSection />
      <FlexiblePlansSection />
      <BusinessReadySection />

      {/* Premium Fleet Section */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              <div className="w-8 h-0.5 bg-orange-600" />
              <div className="w-0.5 h-12 bg-orange-600" />
              <div className="w-0.5 h-12 bg-orange-600" />
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
              Explore Our Premium Fleet
            </h2>

            <div className="flex items-center gap-1">
              <div className="w-0.5 h-12 bg-orange-600" />
              <div className="w-0.5 h-12 bg-orange-600" />
              <div className="w-8 h-0.5 bg-orange-600" />
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Choose from our wide selection of vehicles, from economical compacts
            to luxurious SUVs, all maintained to the highest standards.
          </p>
        </div>
        <div className="mb-20 mt-12 w-full px-12">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.slice(0, 9).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <PremiumCareSection />
      <Reviews />
    </SiteLayout>
  );
};

export default HomePage;
