import "./footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand / logo box */}
          <div className="footer-brand">
            <div className="footer-box" aria-label="Logo" />
            <p className="footer-copy">© {new Date().getFullYear()} Your Brand</p>
          </div>

          {/* Menu */}
          <nav className="footer-col" aria-label="Footer Menu">
            <h4>Menu</h4>
            <ul>
              <li><a href="#">Tournaments</a></li>
              <li><a href="#">Rules</a></li>
              <li><a href="#">Partner</a></li>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Your Teams</a></li>
            </ul>
          </nav>

          {/* Social */}
          <nav className="footer-col" aria-label="Social Media">
            <h4>Social Media</h4>
            <ul>
              <li><a href="#">Twitch</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>General questions? <br /><a href="#">Discord Server</a></li>
              <li>Business inquiry? <br /><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
