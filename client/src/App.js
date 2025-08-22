import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // optional if you added it
import LandingPage from "./pages/LandingPage";
import Tournaments from "./pages/Tournaments";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tournaments" element={<Tournaments />} />
      </Routes>
      <Footer />
    </>
  );
}
