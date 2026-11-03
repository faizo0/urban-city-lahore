// Hero.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

// Real Estate & Housing Society Background Images
const images = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600"
];

const highlights = [
  "Modern Infrastructure & Smart Living",
  "Prime Location on Main GT Road / Motorway Access",
  "3 & 5 Years Flexible Installment Plans",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 7 Seconds Interval for Slower Slide Transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === currentImageIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="animate-text delay-1">
          Welcome to Urban City Lahore &ndash; Premium Living &amp; Investment
        </h1>
        <p className="sub animate-text delay-2">
          LDA Approved Project | Modern Amenities | Easy Installment Plans 2026
        </p>
        <ul className="highlights animate-text delay-3">
          {highlights.map((h, index) => (
            <li key={index}>{h}</li>
          ))}
        </ul>

        {/* Hero Action Buttons with Inline VIP CSS Styling */}
        <div className="hero-actions animate-text delay-4" style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap", marginTop: "25px" }}>
          <Link 
            to="/payment-plan" 
            style={{
              display: "inline-block",
              padding: "14px 30px",
              borderRadius: "30px",
              fontWeight: "700",
              fontSize: "1rem",
              textDecoration: "none",
              cursor: "pointer",
              textAlign: "center",
              background: "linear-gradient(135deg, #f39c12 0%, #d4af37 100%)",
              color: "#111111",
              border: "none",
              boxShadow: "0 10px 20px rgba(212, 175, 55, 0.4)",
              transition: "all 0.3s ease"
            }}
          >
            Explore Payment Plans
          </Link>

          <Link 
            to="/contact" 
            style={{
              display: "inline-block",
              padding: "14px 30px",
              borderRadius: "30px",
              fontWeight: "700",
              fontSize: "1rem",
              textDecoration: "none",
              cursor: "pointer",
              textAlign: "center",
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "2px solid #d4af37",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease"
            }}
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}