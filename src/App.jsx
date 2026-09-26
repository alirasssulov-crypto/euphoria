import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactDetails from "./pages/ContactDetails";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/account" element={<ContactDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}
