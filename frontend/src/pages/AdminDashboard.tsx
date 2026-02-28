import { FaEllipsisVertical, FaFilter, FaPlus } from "react-icons/fa6";

type BookingStatus = "Active" | "Pending" | "Completed";

type RecentBooking = {
  id: string;
  customerName: string;
  customerEmail: string;
  customerAvatar: string;
  vehicle: string;
  periodLabel: string;
  duration: string;
  status: BookingStatus;
  amount: string;
};

const recentBookings: RecentBooking[] = [
  {
    id: "#BK-9402",
    customerName: "James Wilson",
    customerEmail: "james.w@email.com",
    customerAvatar: "https://i.pravatar.cc/64?img=12",
    vehicle: "Tesla Model 3",
    periodLabel: "Oct 12 - Oct 15",
    duration: "3 days",
    status: "Active",
    amount: "$450.00",
  },
  {
    id: "#BK-9401",
    customerName: "Elena Rodriguez",
    customerEmail: "elena.r@yahoo.com",
    customerAvatar: "https://i.pravatar.cc/64?img=32",
    vehicle: "BMW M4 Competition",
    periodLabel: "Oct 11 - Oct 18",
    duration: "7 days",
    status: "Pending",
    amount: "$1,280.00",
  },
  {
    id: "#BK-9398",
    customerName: "Marcus Chen",
    customerEmail: "marcus.c@outlook.com",
    customerAvatar: "https://i.pravatar.cc/64?img=15",
    vehicle: "Audi Q7",
    periodLabel: "Oct 08 - Oct 10",
    duration: "2 days",
    status: "Completed",
    amount: "$320.00",
  },
  {
    id: "#BK-9396",
    customerName: "Sarah Hall",
    customerEmail: "sarah.h@gmail.com",
    customerAvatar: "https://i.pravatar.cc/64?img=45",
    vehicle: "Range Rover Sport",
    periodLabel: "Oct 05 - Oct 09",
    duration: "4 days",
    status: "Completed",
    amount: "$760.00",
  },
];

const statusClass: Record<BookingStatus, string> = {
  Active: "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
  Completed: "bg-emerald-100 text-emerald-700",
};

const AdminDashboard = () => {
  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Dashboard intentionally contains only the recent bookings section. */}
        <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-slate-900">Recent Bookings</h1>
            <p className="mt-1 text-sm text-slate-500">
              Real-time update of recent fleet booking activity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              <FaFilter className="text-xs" />
              Filter
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <FaPlus className="text-xs" />
              + New Booking
            </button>
          </div>
        </div>

        {/* Booking table with scan-friendly spacing and mobile horizontal scroll support. */}
        <div className="overflow-x-auto">
          <table className="min-w-[920px] w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                <th className="px-3 py-3">Booking ID</th>
                <th className="px-3 py-3">Customer</th>
                <th className="px-3 py-3">Vehicle</th>
                <th className="px-3 py-3">Period</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Amount</th>
                <th className="px-3 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="border-t border-slate-200">
                  <td className="px-3 py-4 text-sm font-semibold text-slate-900">{booking.id}</td>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={booking.customerAvatar}
                        alt={booking.customerName}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {booking.customerName}
                        </p>
                        <p className="text-xs text-slate-500">{booking.customerEmail}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-sm text-slate-700">{booking.vehicle}</td>
                  <td className="px-3 py-4">
                    <p className="text-sm text-slate-700">{booking.periodLabel}</p>
                    <p className="text-xs text-slate-500">{booking.duration}</p>
                  </td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass[booking.status]}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-sm font-semibold text-slate-900">
                    {booking.amount}
                  </td>
                  <td className="px-3 py-4 text-right">
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                      aria-label={`Booking actions for ${booking.id}`}
                    >
                      <FaEllipsisVertical />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Showing 1 to 4 of 4 bookings</p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="rounded-md border border-slate-200 px-2.5 py-1.5 text-slate-600 hover:bg-slate-100"
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-md bg-blue-600 px-2.5 py-1.5 font-semibold text-white"
            >
              1
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-200 px-2.5 py-1.5 text-slate-600 hover:bg-slate-100"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
