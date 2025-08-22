import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./nav.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("body--lock", open);
    return () => document.body.classList.remove("body--lock");
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close when clicking outside on mobile
  useEffect(() => {
    const onClick = (e) => {
      if (!menuRef.current || !toggleRef.current) return;
      if (
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // close menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // helper to apply "active" class via NavLink
  const linkClass = ({ isActive }) =>
    `navlink ${isActive ? "active" : ""}`;

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <div className="container">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-label="Logo" />
          </Link>

          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-menu"
            ref={toggleRef}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <div
            id="primary-menu"
            className={`nav-content ${open ? "open" : ""}`}
            ref={menuRef}
          >
            <ul className="nav-links" role="menubar">
              <li role="none">
                <NavLink to="/tournaments" className={linkClass} role="menuitem">
                  Tournaments
                </NavLink>
              </li>
              <li role="none">
                <NavLink to="/rules" className={linkClass} role="menuitem">
                  Rules
                </NavLink>
              </li>
              <li role="none">
                <NavLink to="/partners" className={linkClass} role="menuitem">
                  Partners
                </NavLink>
              </li>
              <li role="none">
                <NavLink to="/teams" className={linkClass} role="menuitem">
                  Teams
                </NavLink>
              </li>
              <li role="none">
                <NavLink to="/teamregister" className={linkClass} role="menuitem">
                  Your Teams
                </NavLink>
              </li>
            </ul>

            <div className="nav-actions">
              <Link className="btn" to="/login">Login</Link>
              <Link className="btn btn-primary" to="/register">Registration</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
