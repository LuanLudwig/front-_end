import { Suspense } from "react";
import { Route, Routes } from "react-router-dom/dist";
import Home from "../components/pages/Home";

export const AuthenticatedRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        {/* Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
