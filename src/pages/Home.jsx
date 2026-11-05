import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./Home.css";

const features = [
  {
    id: 1,
    title: "LDA Approved Project",
    desc: "A legally verified project securing your investment with transparent registry.",
    badge: "100% Verified",
    image: "public/images/images.jfif",
    details: "Urban City Lahore is fully approved by the Lahore Development Authority (LDA). Your investment is 100% secure with clear legal documentation, transparent registries, and verified NOC papers. Invest with absolute peace of mind knowing your property has zero legal risks."
  },
  {
    id: 2,
    title: "Smart Infrastructure",
    desc: "Underground utilities, wide boulevards, and modern urban planning.",
    badge: "Modern Living",
    image: "public/images/buying-a-home.webp",
    details: "Designed according to international urban standards, featuring wide carpeted main boulevards, underground electricity supply, advanced sewerage & water treatment systems, and a scenic waterfront green belt."
  },
  {
    id: 3,
    title: "Prime Access & Links",
    desc: "Direct connectivity to Main GT Road and Lahore-Islamabad Motorway.",
    badge: "5 Mins Drive",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    details: "Ideally located with direct frontage on Grand Trunk (GT Road) and close proximity to the M-2 Motorway interchange. Enjoy hassle-free commuting to central Lahore, commercial hubs, and airports."
  },
  {
    id: 4,
    title: "Lush Green Parks",
    desc: "Beautifully landscaped theme parks, jogging tracks, and open spaces.",
    badge: "Eco-Friendly",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
    details: "Experience fresh air and healthy family living with multiple theme parks, international standard sports complex, jogging tracks, and serene green belts scattered throughout the community."
  },
  {
    id: 5,
    title: "Commercial & Business Hubs",
    desc: "Dedicated commercial zones, high-end shopping plazas, and dining hubs.",
    badge: "High ROI",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    details: "Prime commercial plots and shopping districts designed to attract international brands, food chains, and local retail outlets, promising high rental yields and capital appreciation."
  },
  {
    id: 6,
    title: "24/7 Gated Security",
    desc: "State-of-the-art CCTV surveillance and round-the-clock security patrols.",
    badge: "Safe Environment",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    details: "Your family's safety is our top priority. Featuring gated entry points, RFID vehicle scanning, 24/7 active CCTV camera networks, and highly trained security personnel on continuous patrol."
  }
];

const stats = [
  { number: "100%", label: "LDA Approved" },
  { number: "3 & 5 Yr", label: "Easy Installments" },
  { number: "5 Mins", label: "From Motorway" },
  { number: "24/7", label: "Gated Security" }
];

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="home-container">
      {/* Hero Banner Section */}
      <Hero />

      {/* VIP Highlights / Stats Bar */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Features Section - Blog Card Style */}
      <section className="features-section">
        <div className="features-wrapper">
          
          {/* Section Header */}
          <div className="section-header">
            <span className="section-subtitle">
              PREMIUM COMMUNITY & LIFESTYLE
            </span>
            <h2 className="section-title">
              Why Choose Urban City Lahore
            </h2>
            <p className="section-desc">
              A master-planned residential & commercial community built for families who seek luxury living and smart investors aiming for high long-term returns. Click any card to read full details.
            </p>
          </div>

          {/* 6 Features Grid */}
          <div className="features-grid">
            {features.map((f) => (
              <article
                key={f.id}
                onClick={() => setActiveModal(f)}
                className="feature-card"
              >
                {/* Card Image Box */}
                <div className="card-img-box">
                  <img
                    src={f.image}
                    alt={f.title}
                    onError={handleImageError}
                  />
                  <span className="card-badge">
                    {f.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <div>
                    <h3 className="card-title">
                      {f.title}
                    </h3>
                    <p className="card-description">
                      {f.desc}
                    </p>
                  </div>
                  <span className="card-link">
                    Click to view details →
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Luxury Call to Action (CTA) Banner */}
      <section className="cta-banner-section">
        <div className="cta-banner-wrapper">
          <span className="cta-subtitle">
            LIMITED TIME INVESTMENT OPPORTUNITY
          </span>
          <h2 className="cta-title">
            Ready to Secure Your Plot in Urban City Lahore?
          </h2>
          <p className="cta-desc">
            Book your residential or commercial plot today with easy installment plans and guaranteed high returns. Contact our official sales team now.
          </p>

          <div className="home-cta-buttons">
            <Link to="/booking" className="btn-gold-fill">
              Book Your Plot Now
            </Link>
            <Link to="/contact" className="btn-gold-outline">
              Contact Sales Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Detail Popup Modal */}
      {activeModal && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="modal-close-btn"
            >
              &times;
            </button>

            {/* Modal Badge & Title */}
            <span className="modal-badge">
              {activeModal.badge}
            </span>
            <h2 className="modal-title">
              {activeModal.title}
            </h2>

            {/* Modal Image */}
            <div className="modal-img-box">
              <img
                src={activeModal.image}
                alt={activeModal.title}
                onError={handleImageError}
              />
            </div>

            {/* Modal Description Details */}
            <p className="modal-text">
              {activeModal.details}
            </p>

            {/* Back Button */}
            <div>
              <button
                onClick={() => setActiveModal(null)}
                className="modal-back-btn"
              >
                ← Back to Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
