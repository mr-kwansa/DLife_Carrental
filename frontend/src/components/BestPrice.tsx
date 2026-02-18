import { FaCar, FaCreditCard, FaMapMarkerAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const BestPrice = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1: Choose & Book */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <FaCar className="text-6xl text-gray-300 mx-auto" />
              <FaCheckCircle className="absolute -top-2 -right-2 text-2xl text-blue-600 bg-white rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              <span className="text-blue-600">01.</span> Choose & Book
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Select your dates, location, and browse our wide range of vehicles.
            </p>
          </div>

          {/* Step 2: Confirm & Pay */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <FaCreditCard className="text-6xl text-gray-300 mx-auto" />
              <FaCheckCircle className="absolute -top-2 right-0 text-2xl text-blue-600 bg-white rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              <span className="text-blue-600">02.</span> Confirm & Pay
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Securely complete your booking online with our transparent, all-inclusive pricing.
            </p>
          </div>

          {/* Step 3: Pick Up & Go */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <FaMapMarkerAlt className="text-6xl text-gray-300 mx-auto" />
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1">
                <FaCar className="text-base text-blue-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              <span className="text-blue-600">03.</span> Pick Up & Go
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Show your license and confirmation at our counter, and you're ready to hit the road!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPrice;
