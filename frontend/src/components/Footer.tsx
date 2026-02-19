import {
  FaAt,
  FaCamera,
  FaChevronRight,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#061943] text-slate-200"
    >
      <div className="w-full px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-10">
          <div>
            <a href="#" className="relative inline-flex h-16 w-[240px] items-start overflow-visible">
              <img
                src="images/Dlife_Logo.png"
                className="absolute -left-10 -top-8 h-48 w-auto max-w-none"
                alt="DLIFE Logo"
              />
            </a>
            <p className="mt-8 max-w-sm text-2xl leading-relaxed text-slate-300">
              Redefining the car rental experience with technology, luxury, and
              world-class service. Your journey starts here.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <FaAt className="text-xl" />
              </a>
              <a
                href="#"
                className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <FaCamera className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-8 space-y-5 text-2xl text-slate-300">
              <li><a href="#" className="hover:text-white">Our Fleet</a></li>
              <li><a href="#" className="hover:text-white">Special Offers</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Locations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-white">Company</h3>
            <ul className="mt-8 space-y-5 text-2xl text-slate-300">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold text-white">Newsletter</h3>
            <p className="mt-8 max-w-md text-2xl leading-relaxed text-slate-300">
              Subscribe to receive the latest offers and travel tips.
            </p>
            <form className="mt-7">
              <div className="flex items-center rounded-2xl bg-white/10 p-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-14 w-full bg-transparent px-4 text-2xl text-white placeholder:text-slate-400 outline-none"
                />
                <button
                  type="submit"
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500"
                  aria-label="Submit newsletter email"
                >
                  <FaChevronRight className="text-lg" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="my-14 border-white/10" />

        <p className="text-center text-2xl text-slate-400">
          © {new Date().getFullYear()} DLIFE Car Rental. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
  
