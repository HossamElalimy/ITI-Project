import { useMemo, useState } from "react";
import "./upcoming-table.css";

export default function UpcomingTournamentsTable({ items = [] }) {
  const [tab, setTab] = useState("active"); // active | expired

  const filtered = useMemo(
    () => items.filter(x => (tab === "active" ? !x.expired : x.expired)),
    [items, tab]
  );

  return (
    <div className="ut">
      <div className="ut__tabs" role="tablist" aria-label="Tournament status">
        <button
          className={`ut__tab ${tab === "active" ? "is-active" : ""}`}
          role="tab"
          aria-selected={tab === "active"}
          onClick={() => setTab("active")}
        >
          Active
        </button>
        <button
          className={`ut__tab ${tab === "expired" ? "is-active" : ""}`}
          role="tab"
          aria-selected={tab === "expired"}
          onClick={() => setTab("expired")}
        >
          Expired
        </button>
      </div>

      <div className="ut__table">
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
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="ut__empty">No tournaments in this list.</td>
              </tr>
            )}

            {filtered.map(r => (
              <tr key={r.id ?? `${r.name}-${r.date}`}>
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
    </div>
  );
}
