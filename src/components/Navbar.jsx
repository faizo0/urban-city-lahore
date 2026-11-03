import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/payment-plan", label: "Payment Plan" },
  { to: "/location", label: "Location" },
  { to: "/about", label: "About Us" },
  { to: "/blogs", label: "Blogs" },
];

export function Logo() {
  return (
    <Link to="/" className="navbar-logo" aria-label="Urban City Lahore home">
      <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="none" stroke="#c9a45c" strokeWidth="2" />
        <path d="M14 46V24l9-6v28M26 46V14l12 8v24M41 46V28l9 5v13" fill="none" stroke="#c9a45c" strokeWidth="2.4" />
      </svg>
      <span className="logo-text">
        <strong>URBAN CITY</strong>
        <em>Lahore</em>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-box">
        {/* لوگو */}
        <Logo />

        {/* موبائل برگر آئیکن */}
        <button 
          className={`burger ${open ? "is-open" : ""}`} 
          onClick={() => setOpen(!open)} 
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* مینو لنکس */}
        <nav className={`nav-links ${open ? "show" : ""}`}>
          {links.map((l) => (
            <NavLink 
              key={l.to} 
              to={l.to} 
              end={l.to === "/"} 
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* دائیں طرف والے بٹنز: Contact Us اور Book Now */}
        <div className="navbar-cta">
          <Link to="/contact" className="contact-nav-btn">Contact Us</Link>
          <Link to="/booking" className="cta-btn">Book Now</Link>
        </div>
      </div>
    </header>
  );
}