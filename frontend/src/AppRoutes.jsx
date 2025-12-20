// src/AppRoutes.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Pacientes from "./pages/Pacientes";
import Agenda from "./pages/Agenda";
import Historico from "./pages/Historico";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/historico" element={<Historico />} />

        {/* Redireciona qualquer rota inválida pra Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
