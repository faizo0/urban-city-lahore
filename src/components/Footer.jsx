import { Link } from "react-router-dom";
import { Logo } from "./Navbar.jsx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Logo />
          <p className="about">Urban City Lahore is an LDA-approved housing project offering modern infrastructure, easy access to GT Road and the Motorway, and flexible installment plans for families and investors.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/payment-plan">Payment Plan</Link></li>
            <li><Link to="/location">Location</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>+92 300 0000000</li>
            <li>+92 42 111 000 000</li>
            <li>info@urbancitylahore.com</li>
            <li>Main Office, GT Road, Lahore</li>
          </ul>
        </div>
      </div>
      <p className="copy">&copy; {new Date().getFullYear()} Urban City Lahore. All rights reserved.</p>
    </footer>
  );
}
