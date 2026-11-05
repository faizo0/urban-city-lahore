import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./home.css";

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
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Hero Banner Section */}
      <Hero />

      {/* VIP Highlights / Stats Bar */}
      <section
        style={{
          backgroundColor: "#0d0f12",
          borderTop: "2px solid #d4af37",
          borderBottom: "2px solid #d4af37",
          padding: "35px 20px",
          color: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "25px",
            textAlign: "center"
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} style={{ padding: "10px" }}>
              <h3 style={{ fontSize: "2.4rem", color: "#d4af37", margin: "0 0 5px 0", fontWeight: "800" }}>
                {stat.number}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0, fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Features Section - Blog Card Style */}
      <section
        style={{
          padding: "90px 20px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
            <span
              style={{
                color: "#d4af37",
                fontWeight: "700",
                fontSize: "0.9rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "10px"
              }}
            >
              PREMIUM COMMUNITY & LIFESTYLE
            </span>
            <h2
              style={{
                fontSize: "2.8rem",
                margin: "0 0 16px 0",
                color: "#0f172a",
                fontWeight: "800",
                letterSpacing: "0.5px"
              }}
            >
              Why Choose Urban City Lahore
            </h2>
            <p style={{ color: "#475569", fontSize: "1.15rem", lineHeight: "1.7", margin: 0 }}>
              A master-planned residential & commercial community built for families who seek luxury living and smart investors aiming for high long-term returns. Click any card to read full details.
            </p>
          </div>

          {/* 6 Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px"
            }}
          >
            {features.map((f) => (
              <article
                key={f.id}
                onClick={() => setActiveModal(f)}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.06)";
                }}
              >
                {/* Card Image Box */}
                <div style={{ position: "relative", height: "220px", width: "100%", overflow: "hidden" }}>
                  <img
                    src={f.image}
                    alt={f.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={handleImageError}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      color: "#d4af37",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      border: "1px solid rgba(212, 175, 55, 0.4)",
                      backdropFilter: "blur(4px)"
                    }}
                  >
                    {f.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.35rem",
                        marginTop: 0,
                        marginBottom: "10px",
                        color: "#0f172a",
                        fontWeight: "700"
                      }}
                    >
                      {f.title}
                    </h3>
                    <p style={{ color: "#475569", fontSize: "0.98rem", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                      {f.desc}
                    </p>
                  </div>
                  <span
                    style={{
                      color: "#d4af37",
                      fontSize: "0.92rem",
                      fontWeight: "700",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    Click to view details →
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Luxury Call to Action (CTA) Banner connected to Booking & Contact Pages */}
      <section
        style={{
          backgroundColor: "#0d0f12",
          backgroundImage: "linear-gradient(rgba(13, 15, 18, 0.8), rgba(13, 15, 18, 0.85)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "90px 20px",
          textAlign: "center",
          borderTop: "2px solid #d4af37",
          borderBottom: "4px solid #d4af37",
          color: "#ffffff",
          marginBottom: "40px"
        }}
      >
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <span
            style={{
              color: "#d4af37",
              fontSize: "0.85rem",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px"
            }}
          >
            LIMITED TIME INVESTMENT OPPORTUNITY
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              margin: "0 0 15px 0",
              color: "#ffffff"
            }}
          >
            Ready to Secure Your Plot in Urban City Lahore?
          </h2>
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              marginBottom: "35px"
            }}
          >
            Book your residential or commercial plot today with easy installment plans and guaranteed high returns. Contact our official sales team now.
          </p>

          {/* 🌟 Connected Navigation Links */}
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/booking"
              style={{
                background: "linear-gradient(135deg, #f39c12 0%, #d4af37 100%)",
                color: "#111111",
                padding: "14px 32px",
                borderRadius: "30px",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 8px 25px rgba(212, 175, 55, 0.45)",
                transition: "all 0.3s ease"
              }}
            >
              Book Your Plot Now
            </Link>
            <Link
              to="/contact"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "2px solid #d4af37",
                padding: "14px 32px",
                borderRadius: "30px",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "1rem",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease"
              }}
            >
              Contact Sales Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Detail Popup Modal */}
      {activeModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "2px solid #d4af37",
              borderRadius: "16px",
              maxWidth: "650px",
              width: "100%",
              padding: "35px",
              color: "#0f172a",
              position: "relative",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              maxHeight: "90vh",
              overflowY: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "#0f172a",
                fontSize: "2rem",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              &times;
            </button>

            {/* Modal Badge & Title */}
            <span
              style={{
                color: "#d4af37",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                fontWeight: "700",
                letterSpacing: "2px"
              }}
            >
              {activeModal.badge}
            </span>
            <h2 style={{ fontSize: "2rem", margin: "8px 0 16px 0", color: "#0f172a", fontWeight: "800" }}>
              {activeModal.title}
            </h2>

            {/* Modal Image */}
            <div style={{ width: "100%", height: "260px", marginBottom: "20px", borderRadius: "10px", overflow: "hidden" }}>
              <img
                src={activeModal.image}
                alt={activeModal.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={handleImageError}
              />
            </div>

            {/* Modal Description Details */}
            <p style={{ color: "#334155", fontSize: "1.08rem", lineHeight: "1.8", marginBottom: "30px" }}>
              {activeModal.details}
            </p>

            {/* Back Button */}
            <div>
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "25px", background: "linear-gradient(135deg, #f39c12 0%, #d4af37 100%)",
                  color: "#111111",                 
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease"
                }}
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
