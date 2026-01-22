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
import AdminDashboard from "./pages/AdminDashboard";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          
          <Route path={"/admin-dashboard"} element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </PrivateRoute>
          } />
          
          <Route path={"/doctor"} element={
            <PrivateRoute allowedRoles={['doctor', 'admin']}>
              <DoctorPage />
            </PrivateRoute>
          } />
          
          <Route path={"/staff"} element={
            <PrivateRoute allowedRoles={['staff', 'admin']}>
              <StaffPage />
            </PrivateRoute>
          } />
          
          {/* Patient Routes - Public */}
          <Route path={"/appointment"} element={<Appointment />} />
          <Route path={"/validate-token"} element={<TokenPage />} />
          
          {/* Legacy routes - might need refactor or cleanup */}
          <Route path={"/patient"} element={<PatientPage />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
