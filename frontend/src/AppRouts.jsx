// AppRoutes.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
