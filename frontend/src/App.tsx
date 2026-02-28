import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/Services";
import RentPage from "./pages/RentPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminFleet from "./pages/AdminFleet";
import AdminCustomers from "./pages/AdminCustomers";
import AdminShell from "./components/admin/AdminShell";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/rent" element={<RentPage />} />
      {/* Public admin auth route. */}
      <Route path="/admin/login" element={<AdminLogin />} />
      {/* Admin panel now only includes Dashboard, Fleet, and Customers. */}
      <Route path="/admin" element={<AdminShell />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="fleet" element={<AdminFleet />} />
        <Route path="customers" element={<AdminCustomers />} />
      </Route>
      <Route path="/Services" element={<ServicesPage />} />
      <Route path="/Rent" element={<RentPage />} />
    </Routes>
  );
}

export default App;
