import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import PatientPage from "./pages/PatientPage";
import StaffPage from "./pages/StaffPage";
import Dashboard from "./components/doctor/Dashboard";
import Appointment from "./components/patient/Appointment";
import TokenPage from "./components/patient/TokenPage";
import LoginPage from "./pages/LoginPage";
import PrescriptionForm from "./components/doctor/PrescriptionForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/doctor"} element={<DoctorPage />} />
        <Route path={"/patient"} element={<PatientPage />} />
        <Route path={"/staff"} element={<StaffPage />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/appointment"} element={<Appointment />} />
        <Route path={"/validate-token"} element={<TokenPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/prescription"} element={<PrescriptionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
