import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/Services";
import RentPage from "./pages/RentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/rent" element={<RentPage />} />
      <Route path="/Services" element={<ServicesPage />} />
      <Route path="/Rent" element={<RentPage />} />
    </Routes>
  );
}

export default App;
