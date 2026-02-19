import {
  FaArrowRight,
  FaCarSide,
  FaLocationDot,
  FaPlaneDeparture,
  FaRegCalendarDays,
} from "react-icons/fa6";

const services = [
  {
    title: "Luxury Rentals",
    description:
      "Choose from our elite fleet of high-end vehicles including sports cars, premium SUVs, and luxury sedans for ultimate style.",
    icon: FaCarSide,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    title: "Airport Transfers",
    description:
      "Punctual pick-up and drop-off services at major airports. We monitor your flight status to ensure we're there when you arrive.",
    icon: FaPlaneDeparture,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
  },
  {
    title: "Long-term Leasing",
    description:
      "Flexible monthly and yearly leasing plans for individuals and corporations with full maintenance support included.",
    icon: FaRegCalendarDays,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    title: "Chauffeur Services",
    description:
      "Sit back and relax while our professional, highly trained drivers take you to your destination in absolute comfort.",
    icon: FaLocationDot,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
  },
];

const ServicesHero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-xs font-bold tracking-[0.16em] text-blue-700 uppercase">
            Our Services
          </span>
          <h1 className="mt-6 text-4xl leading-tight font-black text-slate-900 sm:text-5xl lg:text-7xl">
            Premium <span className="text-blue-700">Mobility</span> Solutions
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Experience unmatched quality and flexibility with D Life Car Rentals.
            From executive business travel to luxury leisure trips, we&apos;ve got
            you covered.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
              >
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${service.iconBg}`}
                >
                  <Icon className={`text-3xl ${service.iconColor}`} />
                </div>

                <h3 className="mt-8 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="mt-10 inline-flex items-center gap-2 text-xl font-bold text-blue-700 transition-colors hover:text-blue-800 sm:text-2xl"
                >
                  Learn More <FaArrowRight className="text-xl" />
                </a>
              </article>
            );
          })}
        </div>
        {/* blue section at he end */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center justify-center bg-blue-600 rounded-4xl h-72 w-full max-w-4xl text-white text-center px-6">
            <h1 className="text-3xl font-bold mb-2">Ready to hit the road?</h1>
            <p className="mb-4">
              Join thousands of satisfied customers who trust DLife Car Rentals for their<br />mobility needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center items-center">
              <button className="rounded-xl bg-white px-6 py-2 text-blue-600  text-center transition hover:-translate-y-0.5 hover:shadow-lg">
                Browse Fleet
              </button>
              <button className="rounded-xl bg-blue-600 px-6 py-2 text-white border-white border-2  text-center transition hover:-translate-y-0.5 hover:shadow-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
