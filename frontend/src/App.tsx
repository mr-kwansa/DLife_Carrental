import CarCard from "./components/CarCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ReservationForm from "./components/ReservationForm";
import ThreeSteps from "./components/ThreeSteps";
import TopBar from "./components/Topbar";
import type { Car } from "./components/types";

const cars: Car[] = [
  {
    id: "1",
    name: "Model S",
    brand: "Tesla",
    imageUrl: "/images/banner3.png",
    pricePerDay: 120,
    seats: 5,
    transmission: "Automatic",
  },
  {
    id: "2",
    name: "Model 3",
    brand: "Tesla",
    imageUrl: "/images/banner3.png",
    pricePerDay: 100,
    seats: 5,
    transmission: "Automatic",
  },
  {
    id: "3",
    name: "Model X",
    brand: "Tesla",
    imageUrl: "/images/banner3.png",
    pricePerDay: 150,
    seats: 7,
    transmission: "Automatic",
  },
  {
    id: "4",
    name: "Model Y",
    brand: "Tesla",
    imageUrl: "/images/banner3.png",
    pricePerDay: 110,
    seats: 5,
    transmission: "Automatic",
  },
  {
    id: "5",
    name: "Corolla Altis",
    brand: "Toyota",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle7.jpg",
    pricePerDay: 85,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "6",
    name: "Civic",
    brand: "Honda",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle5.jpg",
    pricePerDay: 80,
    seats: 5,
    transmission: "Automatic"
  },
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
    id: "10",
    name: "Range Rover Sport",
    brand: "Land Rover",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle6.jpg",
    pricePerDay: 200,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "11",
    name: "Camaro",
    brand: "Chevrolet",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle9.jpg",
    pricePerDay: 130,
    seats: 4,
    transmission: "Manual"
  },
  {
    id: "12",
    name: "Swift",
    brand: "Suzuki",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle12.jpg",
    pricePerDay: 45,
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
  },
  {
    id: "17",
    name: "CX-5",
    brand: "Mazda",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle16.jpg",
    pricePerDay: 95,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "18",
    name: "Seltos",
    brand: "Kia",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle15.jpg",
    pricePerDay: 85,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "19",
    name: "Micra",
    brand: "Nissan",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle17.jpg",
    pricePerDay: 50,
    seats: 5,
    transmission: "Automatic"
  },
  {
    id: "20",
    name: "Polo",
    brand: "Volkswagen",
    imageUrl: "https://templates.envytheme.com/rentq/assets/images/vehicles/vehicle18.jpg",
    pricePerDay: 55,
    seats: 5,
    transmission: "Manual"
  },
];

function App() {
  return (
    <div className="min-h-screen w-ful bg-white p-6 box-border">
      <Navbar/>

      {/* main body with content */}
      <Hero/>
      <ReservationForm/>
      <ThreeSteps/>

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

      
            <Footer/>
    </div>
  );
}

export default App;
