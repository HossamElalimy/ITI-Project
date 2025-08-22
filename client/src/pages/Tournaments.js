import "./tournament.css";
import { useState } from "react";

const rows = [
  {
    name: "Vikendi Community Tournament #1",
    live: true,
    mode: "2v2",
    time: "20:00",
    date: "15.05.2020",
    disabled: true,
  },
  {
    name: "Being Esports D/A/CH PUBG Summer Championship",
    live: false,
    mode: "4v4",
    time: "13:30",
    date: "16.05.2020",
    disabled: false,
  },
];

export default function Tournaments() {
  const [tab, setTab] = useState("active");

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>All Tournaments</h1>
        </div>
      </section>

      <section className="tournament-tabs">
        <div className="container">
          <button
            className={`tab ${tab === "active" ? "active" : ""}`}
            onClick={() => setTab("active")}
          >
            Active
          </button>
          <button
            className={`tab ${tab === "expired" ? "active" : ""}`}
            onClick={() => setTab("expired")}
          >
            Expired
          </button>
        </div>
      </section>

      {tab === "active" && (
        <>
          <section className="tournament-table">
            <div className="container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Mode</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Registration</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td>
                        {r.name}
                        {r.live && <span className="live-badge">LIVE</span>}
                      </td>
                      <td>{r.mode}</td>
                      <td>{r.time}</td>
                      <td>{r.date}</td>
                      <td>
                        <button disabled={r.disabled}>Check-in</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <aside className="tournament-details">
            <h3>Being Esports D/A/CH PUBG Summer Championship</h3>
            <p>Duo — 16.05.2020 — 13:30</p>
            <div className="maps">
              <strong>Maps:</strong> Vikendi, Erangel, Vikendi, Erangel
            </div>
            <div className="prizes">
              <strong>Prizes:</strong>
              <ul>
                <li>1st Place: 200€</li>
                <li>2nd Place: 100€</li>
                <li>3rd Place: 50€</li>
              </ul>
            </div>
            <button>Check-in</button>
          </aside>
        </>
      )}

      {tab === "expired" && (
        <section className="tournament-table">
          <div className="container">
            <p>No expired tournaments.</p>
          </div>
        </section>
      )}
    </main>
  );
}
