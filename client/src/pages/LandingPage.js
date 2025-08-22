import FrontHero from "../components/FrontHero";
import UpcomingSection from "../components/UpcomingSection";
import "./landing.css";

export default function LandingPage() {
  const items = [
    { id: 1, name: "Vikendi Community Tournament #1", live: true,  mode: "2v2", time: "20:00", date: "15.05.2020", disabled: true,  expired: false },
    { id: 2, name: "Being Esports D/A/CH PUBG Summer Championship", live: false, mode: "4v4", time: "13:30", date: "16.05.2020", disabled: false, expired: false },
    { id: 3, name: "Old Spring Cup", live: false, mode: "4v4", time: "18:00", date: "01.04.2020", disabled: true,  expired: true },
  ];

  return (
    <main>
      {/* FIRST SECTION (from your Front.js) */}
      <FrontHero />

      {/* SECOND SECTION (your “next tournaments” block) */}
      <UpcomingSection items={items} />
    </main>
  );
}
