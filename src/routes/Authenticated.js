import { Suspense } from "react";
import { Route, Routes } from "react-router-dom/dist";
import Home from "../pages/Authenticated/Home/Home";
import { Send } from "../pages/Authenticated/Send";
import { Profile } from "../pages/Authenticated/Profile";

export const AuthenticatedRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
