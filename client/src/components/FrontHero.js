import { NavLink } from "react-router-dom";
import "./front.css";

/**
 * Landing-page first section (from your Front.js),
 * without embedding a Navbar (so you don't get two navbars).
 */
export default function FrontHero() {
  return (
    <section className="front-hero" aria-label="Featured tournament">
      <div className="front-container">
        <h2 className="front-step">01 / 03</h2>
        <h1 className="front-title">
          Vikendi <br /> Tournament #1
        </h1>

        {/* Keep your original route; change to /tournaments if needed */}
        <NavLink to="/tournaments" className="front-cta">
          To the Tournament
        </NavLink>

        {/* Tournament Cards */}
        <div className="tournament-cards">
          <article className="tournament-card">
            <strong>01</strong>
            <div>
              <h4>Vikendi Tournament #1</h4>
              <p>The biggest tournament today</p>
            </div>
          </article>

          <article className="tournament-card disabled" aria-disabled="true">
            <strong>02</strong>
            <div>
              <h4>Tournament 02</h4>
              <p>Coming Soon...</p>
            </div>
          </article>

          <article className="tournament-card disabled" aria-disabled="true">
            <strong>03</strong>
            <div>
              <h4>Tournament 03</h4>
              <p>Coming Soon...</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
