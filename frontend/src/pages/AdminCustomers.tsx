type CustomerStatus = "Active" | "Inactive" | "VIP";

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalBookings: number;
  status: CustomerStatus;
};

const customers: Customer[] = [
  {
    id: "cust-1",
    name: "James Wilson",
    email: "james.w@email.com",
    phone: "+1 (212) 555-1412",
    totalBookings: 12,
    status: "VIP",
  },
  {
    id: "cust-2",
    name: "Elena Rodriguez",
    email: "elena.r@yahoo.com",
    phone: "+1 (646) 555-9912",
    totalBookings: 8,
    status: "Active",
  },
  {
    id: "cust-3",
    name: "Marcus Chen",
    email: "marcus.c@outlook.com",
    phone: "+1 (917) 555-2088",
    totalBookings: 3,
    status: "Inactive",
  },
];

const statusClass: Record<CustomerStatus, string> = {
  Active: "bg-blue-100 text-blue-700",
  Inactive: "bg-slate-200 text-slate-600",
  VIP: "bg-emerald-100 text-emerald-700",
};

const AdminCustomers = () => {
  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-bold text-slate-900">Customers</h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage customer contacts and booking activity.
          </p>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-[820px] w-full text-left">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                <th className="px-3 py-3">Customer Name</th>
                <th className="px-3 py-3">Email</th>
                <th className="px-3 py-3">Phone</th>
                <th className="px-3 py-3">Total Bookings</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-t border-slate-200">
                  <td className="px-3 py-4 text-sm font-semibold text-slate-900">
                    {customer.name}
                  </td>
                  <td className="px-3 py-4 text-sm text-slate-700">{customer.email}</td>
                  <td className="px-3 py-4 text-sm text-slate-700">{customer.phone}</td>
                  <td className="px-3 py-4 text-sm text-slate-700">{customer.totalBookings}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass[customer.status]}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100"
                      >
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminCustomers;

