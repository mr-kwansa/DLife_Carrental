import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type FleetStatus = "Available" | "Booked" | "Maintenance";
type BadgeTag = "Sport" | "Premium" | "Luxury" | "Family" | "Economy";

type FleetCar = {
  id: string;
  name: string;
  model: string;
  year: number;
  badgeTag: BadgeTag;
  status: FleetStatus;
  pricePerDay: number;
  imageUrl: string;
};

type FleetFormState = Omit<FleetCar, "id">;

const initialCars: FleetCar[] = [
  {
    id: "car-1",
    name: "Tesla",
    model: "Model 3",
    year: 2024,
    badgeTag: "Premium",
    status: "Available",
    pricePerDay: 120,
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=300&h=180&fit=crop",
  },
  {
    id: "car-2",
    name: "BMW",
    model: "X5",
    year: 2023,
    badgeTag: "Luxury",
    status: "Booked",
    pricePerDay: 150,
    imageUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=300&h=180&fit=crop",
  },
  {
    id: "car-3",
    name: "Audi",
    model: "Q7",
    year: 2022,
    badgeTag: "Family",
    status: "Maintenance",
    pricePerDay: 135,
    imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=300&h=180&fit=crop",
  },
];

const emptyForm: FleetFormState = {
  name: "",
  model: "",
  year: new Date().getFullYear(),
  badgeTag: "Premium",
  status: "Available",
  pricePerDay: 0,
  imageUrl: "",
};

const statusClass: Record<FleetStatus, string> = {
  Available: "bg-emerald-100 text-emerald-700",
  Booked: "bg-blue-100 text-blue-700",
  Maintenance: "bg-amber-100 text-amber-700",
};

const AdminFleet = () => {
  const [cars, setCars] = useState<FleetCar[]>(initialCars);
  // Form drawer mode supports both create and update workflows.
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FleetFormState>(emptyForm);

  const modeLabel = useMemo(() => (editingId ? "Edit Car" : "Add New Car"), [editingId]);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormOpen(true);
  };

  const openEdit = (car: FleetCar) => {
    setEditingId(car.id);
    setForm({
      name: car.name,
      model: car.model,
      year: car.year,
      badgeTag: car.badgeTag,
      status: car.status,
      pricePerDay: car.pricePerDay,
      imageUrl: car.imageUrl,
    });
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    // Local preview URL allows quick image updates before persistence/API wiring.
    const previewUrl = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, imageUrl: previewUrl }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.model || !form.imageUrl || !form.pricePerDay) return;

    if (editingId) {
      setCars((prev) =>
        prev.map((car) => (car.id === editingId ? { id: editingId, ...form } : car)),
      );
    } else {
      const id = `car-${crypto.randomUUID()}`;
      setCars((prev) => [{ id, ...form }, ...prev]);
    }

    closeForm();
  };

  const handleDelete = (car: FleetCar) => {
    // Deletion requires explicit confirmation as requested.
    const confirmed = window.confirm(`Delete ${car.name} ${car.model}?`);
    if (!confirmed) return;
    setCars((prev) => prev.filter((item) => item.id !== car.id));
  };

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Fleet Management</h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage vehicle inventory, details, images, and availability status.
            </p>
          </div>
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            + Add New Car
          </button>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-[900px] w-full text-left">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                <th className="px-3 py-3">Car</th>
                <th className="px-3 py-3">Model</th>
                <th className="px-3 py-3">Type</th>
                <th className="px-3 py-3">Year</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Price / day</th>
                <th className="px-3 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id} className="border-t border-slate-200">
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={car.imageUrl}
                        alt={`${car.name} ${car.model}`}
                        className="h-12 w-18 rounded-md object-cover"
                      />
                      <p className="text-sm font-semibold text-slate-900">{car.name}</p>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-sm text-slate-700">{car.model}</td>
                  <td className="px-3 py-4 text-sm text-slate-700">{car.badgeTag}</td>
                  <td className="px-3 py-4 text-sm text-slate-700">{car.year}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass[car.status]}`}
                    >
                      {car.status}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-sm font-semibold text-slate-900">
                    ${car.pricePerDay}
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openEdit(car)}
                        className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(car)}
                        className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {formOpen ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-bold text-slate-900">{modeLabel}</h2>
          <p className="mt-1 text-sm text-slate-500">
            Update vehicle details, image, pricing, and status.
          </p>

          <form className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="text-sm text-slate-700">
              Car Name
              <input
                type="text"
                required
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
              />
            </label>
            <label className="text-sm text-slate-700">
              Model
              <input
                type="text"
                required
                value={form.model}
                onChange={(event) => setForm((prev) => ({ ...prev, model: event.target.value }))}
                className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
              />
            </label>
            <label className="text-sm text-slate-700">
              Year
              <input
                type="number"
                required
                min={2000}
                max={2100}
                value={form.year}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, year: Number(event.target.value) }))
                }
                className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
              />
            </label>
            <label className="text-sm text-slate-700">
              Vehicle Type
              <select
                value={form.badgeTag}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, badgeTag: event.target.value as BadgeTag }))
                }
                className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
              >
                <option value="Sport">Sport</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
                <option value="Family">Family</option>
                <option value="Economy">Economy</option>
              </select>
            </label>
            <label className="text-sm text-slate-700">
              Price per day
              <input
                type="number"
                required
                min={1}
                value={form.pricePerDay}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, pricePerDay: Number(event.target.value) }))
                }
                className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
              />
            </label>
            <label className="text-sm text-slate-700">
              Status
              <select
                value={form.status}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, status: event.target.value as FleetStatus }))
                }
                className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </label>
            <label className="text-sm text-slate-700">
              Image URL
              <input
                type="url"
                value={form.imageUrl}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, imageUrl: event.target.value }))
                }
                placeholder="https://..."
                className="mt-1 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
              />
            </label>
            <label className="text-sm text-slate-700 md:col-span-2">
              Upload / Change Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-slate-700 hover:file:bg-slate-200"
              />
            </label>

            {form.imageUrl ? (
              <div className="md:col-span-2">
                <p className="mb-2 text-sm text-slate-700">Preview</p>
                <img
                  src={form.imageUrl}
                  alt="Vehicle preview"
                  className="h-36 w-56 rounded-lg border border-slate-200 object-cover"
                />
              </div>
            ) : null}

            <div className="md:col-span-2 flex flex-wrap items-center gap-2">
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {editingId ? "Save Changes" : "Create Car"}
              </button>
              <button
                type="button"
                onClick={closeForm}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </section>
  );
};

export default AdminFleet;
