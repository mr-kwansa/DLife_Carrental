import SiteLayout from "../components/SiteLayout";
import { FaEye, FaRocket } from "react-icons/fa6";
import WhyDlifeSection from "../components/WhyDlifeSection";
import Reviews from "../components/Reviews";

const AboutPage = () => {
  return (
    <SiteLayout mainClassName="pt-0">
      <section className="relative min-h-[460px] overflow-hidden pt-20">
        <img
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury car in dark studio setting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/30" />

        <div className="relative mx-auto flex h-full max-w-[1200px] items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl leading-tight font-black text-white sm:text-6xl">
              Redefining the
              <br />
              <span className="text-amber-400">D</span>rive of Your Life.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Experience luxury, reliability, and unparalleled service with the world&apos;s
              premier premium car rental platform.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-14">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_540px] lg:px-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-0.5 w-9 bg-amber-400" />
              <p className="text-xs font-bold tracking-[0.18em] text-blue-700 uppercase">
                Established 2026
              </p>
            </div>

            <h2 className="text-4xl leading-tight font-black text-slate-900 sm:text-5xl">
              Driven by Excellence,
              <br />
              Guided by Values.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
              Founded in 2026, D Life Car Rentals emerged from a vision to revolutionize
              the mobility experience. We don&apos;t just provide vehicles; we provide the
              keys to your next adventure, ensuring every mile is traveled with style,
              comfort, and peace of mind.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <FaRocket className="text-amber-400" />
                <h3 className="mt-3 text-xl font-bold text-slate-900">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To provide seamless premium mobility solutions that empower our customers
                  to travel without limits.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <FaEye className="text-amber-400" />
                <h3 className="mt-3 text-xl font-bold text-slate-900">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  To be the global benchmark for luxury car rentals and operational
                  excellence in fleet management.
                </p>
              </article>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Modern operations office interior"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-0 rounded-2xl bg-amber-400 px-6 py-4 shadow-[0_20px_35px_-18px_rgba(245,158,11,0.8)]">
              <p className="text-5xl font-black text-blue-900">100%</p>
              <p className="text-xs font-bold tracking-[0.15em] text-blue-900 uppercase">
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyDlifeSection />
      <Reviews/>
    </SiteLayout>
  );
};

export default AboutPage;
