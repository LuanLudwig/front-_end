import { Suspense } from "react";
import { Route, Routes } from "react-router-dom/dist";
import Login from "../components/pages/auth/Login";
import Register from "../components/pages/auth/Register";

export const UnhatenticatedRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        {/* Home */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Suspense>
  );
};
