import { Routes, Route } from "react-router-dom";

import SignIn from "./signinng_pages/SignIn";
import SignUp from "./signinng_pages/SignUp";
import ResetPage from "./signinng_pages/Reset";
import CheckEmail from "./signinng_pages/CheckEmail";
import Verification from "./signinng_pages/Verif";
import NewPass from "./signinng_pages/NewPass";
import { LogIn } from 'lucide-react';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<LogIn />} />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset" element={<ResetPage />} />
      <Route path="/check-email" element={<CheckEmail />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/newPass" element={<NewPass />} />

    </Routes>
  );
}