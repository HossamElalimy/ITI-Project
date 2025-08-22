import { Routes, Route } from "react-router-dom";

// USE YOUR EXISTING NAVBAR – do not change this file
import NavBar from "./components/NavBar";

// Optional: keep your existing Footer if you have one; otherwise remove this line
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import Tournaments from "./pages/Tournaments";
import TeamRegister from "./pages/TeamRegister";

// (Optional) simple stubs so navbar links don't 404; delete if you have real pages
const Rules = () => <main style={{padding:28}}>Rules page</main>;
const Partners = () => <main style={{padding:28}}>Partners page</main>;
const Teams = () => <main style={{padding:28}}>Teams page</main>;

export default function App() {
  return (
    <>
      {/* Navbar appears ONCE for the whole app */}
      <NavBar />

      {/* Route-only content; pages contain no navbar code */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/teamregister" element={<TeamRegister />} />
        {/* keep/dummy routes if your navbar links point to them */}
        <Route path="/rules" element={<Rules />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>

      {/* Optional global footer */}
      <Footer />
    </>
  );
}
