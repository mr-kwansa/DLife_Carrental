import CarCard from "./components/CarCard";
import BusinessReadySection from "./components/BusinessReadySection";
import FlexiblePlansSection from "./components/FlexiblePlansSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import PremiumCareSection from "./components/PremiumCareSection";
import ReservationForm from "./components/ReservationForm";
import Reviews from "./components/Reviews";
import ThreeSteps from "./components/ThreeSteps";
import WhyDlifeSection from "./components/WhyDlifeSection";
import type { Car } from "./components/types";

const cars: Car[] = [
  {
    id: "7",
    name: "Mustang GT",
    brand: "Ford",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle10.jpg",
    pricePerDay: 160,
    seats: 4,
    transmission: "Manual"
  },
  {
    id: "8",
    name: "Q8",
    brand: "Audi",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle11.jpg",
    pricePerDay: 170,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "9",
    name: "E-Class",
    brand: "Mercedes-Benz",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle4.jpg",
    pricePerDay: 140,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "13",
    name: "XC90",
    brand: "Volvo",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle8.jpg",
    pricePerDay: 155,
    seats: 7,
    transmission: "Automatic"
  },
  {
    id: "14",
    name: "A4",
    brand: "Audi",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle13.jpg",
    pricePerDay: 120,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "15",
    name: "Mazda3",
    brand: "Mazda",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle3.jpg",
    pricePerDay: 70,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "16",
    name: "Outlander",
    brand: "Mitsubishi",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle14.jpg",
    pricePerDay: 90,
    seats: 7,
    transmission: "Automatic"
  }
];

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar/>

      {/* main body with content */}
      <Hero/>
      <ReservationForm/>
      <ThreeSteps/>
      <WhyDlifeSection />
      <FlexiblePlansSection />
      <BusinessReadySection />

      {/* Premium Fleet Section */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading with decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {/* Left decorative elements */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-0.5 bg-orange-600"></div>
              <div className="w-0.5 h-12 bg-orange-600"></div>
              <div className="w-0.5 h-12 bg-orange-600"></div>
            </div>
            
            {/* Main heading */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
              Explore Our Premium Fleet
            </h2>
            
            {/* Right decorative elements */}
            <div className="flex items-center gap-1">
              <div className="w-0.5 h-12 bg-orange-600"></div>
              <div className="w-0.5 h-12 bg-orange-600"></div>
              <div className="w-8 h-0.5 bg-orange-600"></div>
            </div>
          </div>
          
          {/* Descriptive paragraph */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Choose from our wide selection of vehicles, from economical compacts to luxurious SUVs, all maintained to the highest standards.
          </p>
        </div>
        {/* Car grid: 2 columns so each card is wider */}
        <div className="mb-20 mt-12 w-full px-12">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
           <CarCard key={car.id} car={car} />
            ))}
        </div>
          </div>

      </section>
      <PremiumCareSection />
      <Reviews />      
            <Footer/>
    </div>
  );
}

export default App;
