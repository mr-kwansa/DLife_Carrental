import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VehiclesPage from "./pages/VehiclesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vehicles" element={<VehiclesPage />} />
    </Routes>
  );
}

export default App;
