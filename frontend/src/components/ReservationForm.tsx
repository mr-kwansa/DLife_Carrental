const ReservationForm = () => {
  return (
    <div className="relative -mt-2 mb-10 z-20">
      <div className="mx-auto max-w-[2000px] w-full px-6 rounded-2xl bg-white p-8 shadow-xl">
        <h3 className="mb-5 text-2xl font-semibold text-gray-800">
          Start a Reservation
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <input
            type="text"
            placeholder="Pick-up location"
            className="rounded-lg border px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="text"
            placeholder="Drop-off location"
            className="rounded-lg border px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="date"
            className="rounded-lg border px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="rounded-lg bg-orange-600 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-500 transition"
          >
            Search Cars
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
