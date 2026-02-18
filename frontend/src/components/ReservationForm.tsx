import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const ReservationForm = () => {
  return (
    <div className="relative z-20 -mt-10 mb-16 px-4 sm:px-6 lg:-mt-14 lg:px-12">
      <div className="mx-auto w-full max-w-[1500px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-24px_rgba(15,23,42,0.45)] lg:p-10">
        <form className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_1.2fr_1.2fr_1.2fr_1.4fr] lg:items-end lg:gap-6">
          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-500">
              <FaMapMarkerAlt className="text-slate-500" />
              Pick-Up Location
            </label>
            <div className="flex h-16 items-center justify-between rounded-xl bg-slate-100 px-5 text-xl text-slate-800">
              <span>New York City, NY</span>
              <FiChevronDown className="text-slate-500" />
            </div>
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-500">
              <FaCalendarAlt className="text-slate-500" />
              Pick-Up Date
            </label>
            <div className="flex h-16 items-center justify-between rounded-xl bg-slate-100 px-5 text-xl text-slate-800">
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="w-full bg-transparent outline-none placeholder:text-slate-500"
              />
              <FaCalendarAlt className="shrink-0 text-slate-700" />
            </div>
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-500">
              <FaClock className="text-slate-500" />
              Time
            </label>
            <div className="flex h-16 items-center justify-between rounded-xl bg-slate-100 px-5 text-xl text-slate-800">
              <input
                type="text"
                placeholder="--:-- --"
                className="w-full bg-transparent outline-none placeholder:text-slate-500"
              />
              <FaClock className="shrink-0 text-slate-700" />
            </div>
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-500">
              <FaCalendarAlt className="text-slate-500" />
              Return Date
            </label>
            <div className="flex h-16 items-center justify-between rounded-xl bg-slate-100 px-5 text-xl text-slate-800">
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="w-full bg-transparent outline-none placeholder:text-slate-500"
              />
              <FaCalendarAlt className="shrink-0 text-slate-700" />
            </div>
          </div>

          <button
            type="submit"
            className="flex h-16 items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 text-xl font-semibold text-white transition hover:bg-blue-700"
          >
            <FaSearch />
            Search Cars
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
