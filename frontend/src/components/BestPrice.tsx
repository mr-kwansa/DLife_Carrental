import { FaCalendarCheck, FaHeadset, FaShieldAlt } from "react-icons/fa";

const BestPrice = () => {
  const items = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Best Price Guarantee",
      description:
        "We match any price you find elsewhere for the same vehicle and rental terms.",
    },
    {
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      title: "24/7 Roadside Support",
      description:
        "Our team is always on standby to assist you with any issues during your trip.",
    },
    {
      icon: <FaCalendarCheck className="text-3xl text-blue-600" />,
      title: "Flexible Cancellations",
      description:
        "Free cancellation up to 48 hours before your booking start date.",
    },
  ];

  return (
    <section className="bg-slate-100 px-8 py-24 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1700px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
          {items.map((item) => (
            <article key={item.title} className="flex items-start gap-7">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-blue-100">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="max-w-xl text-l leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPrice;
