const Footer = () => {
    return (
      <footer className="bg-[#0b1117] text-gray-300">
        {/* TOP FOOTER */}
        <div className="mx-auto max-w-screen-2xl px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
  
            {/* BRAND */}
            <div className="space-y-6">
              <img
                src="/images/dlife2-removebg-preview.png"
                alt="DLIFE"
                className="h-auto w-auto"
              />
              <p className="text-base text-gray-400 leading-relaxed max-w-sm">
                Premium, reliable, and hassle-free car rentals tailored for your journey.
              </p>
            </div>
  
            {/* COMPANY */}
            <div>
              <h3 className="mb-6 text-xl font-semibold text-white">
                Company
              </h3>
              <ul className="space-y-3 text-base">
                <li className="hover:text-white cursor-pointer transition">About us</li>
                <li className="hover:text-white cursor-pointer transition">Pricing plan</li>
                <li className="hover:text-white cursor-pointer transition">Locations</li>
                <li className="hover:text-white cursor-pointer transition">Our news</li>
                <li className="hover:text-white cursor-pointer transition">Contact us</li>
              </ul>
            </div>
  
            {/* SOCIAL */}
            <div>
              <h3 className="mb-6 text-xl font-semibold text-white">
                Social
              </h3>
              <ul className="space-y-3 text-base">
                <li className="hover:text-white cursor-pointer transition">Facebook</li>
                <li className="hover:text-white cursor-pointer transition">Twitter / X</li>
                <li className="hover:text-white cursor-pointer transition">LinkedIn</li>
                <li className="hover:text-white cursor-pointer transition">Instagram</li>
                <li className="hover:text-white cursor-pointer transition">YouTube</li>
              </ul>
            </div>
  
            {/* CONTACT */}
            <div>
              <h3 className="mb-6 text-xl font-semibold text-white">
                Contact
              </h3>
              <ul className="space-y-4 text-base">
                <li>
                  Call:{" "}
                  <span className="text-white font-semibold">
                    +1 855 807 9484
                  </span>
                </li>
                <li>
                  Email:{" "}
                  <span className="text-red-500 font-semibold">
                    hello@dlife.com
                  </span>
                </li>
                <li className="text-gray-400 leading-relaxed">
                  Address: <br />
                  123 Business Ave, <br />
                  Accra, Ghana
                </li>
              </ul>
            </div>
  
          </div>
        </div>
  
        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-screen-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} DLIFE. All Rights Reserved.
            </p>
            <div className="flex gap-8 mt-3 md:mt-0">
              <span className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer transition">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  