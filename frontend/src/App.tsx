import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/Services";
import Rent  from "./pages/Rent";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Rent" element={<Rent/>}/>
      <Route path="/Services" element={<ServicesPage/>} />
    </Routes>
  );
}

export default App;
