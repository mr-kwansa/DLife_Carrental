import ReservationForm from "./ReservationForm";

const Hero = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-20 px-6">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Rent Smart. <span className="text-orange-600">Drive Anywhere</span>
          </h1>
          <p className="text-gray-600">
            Affordable, reliable, and hassle-free car rentals in minutes.
          </p>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500">
            Start Booking
          </button>
          <ReservationForm />
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="/car-image.png" 
            alt="Car"
            className="rounded-xl shadow-lg relative z-10"
          />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-orange-100 rounded-l-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
