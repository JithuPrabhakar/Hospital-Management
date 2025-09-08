import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import PatientPage from "./pages/PatientPage";
import StaffPage from "./pages/StaffPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/doctor"} element={<DoctorPage />} />
        <Route path={"/patient"} element={<PatientPage />} />
        <Route path={"/staff"} element={<StaffPage />} />
      </Routes>
    </Router>
  );
}

export default App;
