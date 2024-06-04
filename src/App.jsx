import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUrl from "./pages/CreateUrl";
import AllUrl from "./pages/AllUrl";
import MonthlyURL from "./pages/MonthlyURL";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-url" element={<CreateUrl />} />
        <Route path="/monthly-url" element={<MonthlyURL />} />
        <Route path="/all-url" element={<AllUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
