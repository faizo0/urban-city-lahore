import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ width: "100%", fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", paddingBottom: "60px" }}>
      
      {/* رسپانسو میڈیا کوئریز کے لیے ان لائن سٹائل ٹیگ */}
      <style>
        {`
          @media (max-width: 900px) {
            .vision-grid-responsive {
              grid-template-columns: 1fr !important;
              padding: 25px !important;
            }
            .about-hero-responsive {
              padding: 80px 15px 60px 15px !important;
            }
            .about-title-responsive {
              font-size: 2.2rem !important;
            }
          }
          @media (max-width: 480px) {
            .cta-buttons-responsive {
              flex-direction: column !important;
              width: 100% !important;
            }
            .cta-btn-responsive {
              width: 100% !important;
              text-align: center !important;
              box-sizing: border-box !important;
            }
          }
        `}
      </style>

      {/* 1. Header Section with Background Banner Image */}
      <div className="about-hero-responsive" style={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 20px 80px 20px",
        textAlign: "center",
        color: "#ffffff",
        borderBottom: "3px solid #d4af37"
      }}>
        <h1 className="about-title-responsive" style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "15px", letterSpacing: "1px", color: "#ffffff" }}>
          About Urban City Lahore
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "750px", margin: "0 auto", opacity: "0.9", lineHeight: "1.6", color: "#e2e8f0" }}>
          Building a modern, well-planned community in Lahore with smart living solutions and world-class infrastructure.
        </p>

        {/* Floating Stats Bar */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "45px"
        }}>
          {[
            { title: "100%", desc: "LDA Approved" },
            { title: "3 & 5 Years", desc: "Easy Installments" },
            { title: "24/7", desc: "Security & Utilities" }
          ].map((stat, idx) => (
            <div key={idx} style={{
              background: "rgba(26, 28, 35, 0.8)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              padding: "15px 25px",
              borderRadius: "30px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
            }}>
              <span style={{ color: "#d4af37", fontWeight: "bold", fontSize: "1.2rem", display: "block" }}>{stat.title}</span>
              <span style={{ color: "#ffffff", fontSize: "0.85rem" }}>{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Vision & Content Section (Side-by-Side Grid) */}
      <section style={{ maxWidth: "1150px", margin: "60px auto 0", padding: "0 20px" }}>
        
        <div className="vision-grid-responsive" style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "45px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          marginBottom: "60px",
          borderLeft: "6px solid #d4af37",
          border: "1px solid rgba(212, 175, 55, 0.2)"
        }}>
          <div>
            <h2 style={{ fontSize: "2.2rem", color: "#111111", marginBottom: "20px", fontWeight: "700" }}>Our Vision &amp; Legacy</h2>
            <p style={{ fontSize: "1.05rem", color: "#444444", lineHeight: "1.8", marginBottom: "15px" }}>
              Urban City Lahore is an LDA-approved housing project designed around modern infrastructure, lush green spaces, and a waterfront setting. We offer transparent 3 and 5-year installment plans so more families can own a plot and secure their future.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#444444", lineHeight: "1.8" }}>
              Our mission is to redefine suburban living by integrating sustainable development, advanced security systems, and high-ROI investment opportunities for overseas and local Pakistanis.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800" 
              alt="Urban City Lahore Vision" 
              style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "14px", border: "1px solid #d4af37" }}
            />
          </div>
        </div>

        {/* 3. Professional Grid Cards Section */}
        <h3 style={{ fontSize: "2rem", color: "#111111", marginBottom: "35px", textAlign: "center", fontWeight: "700" }}>
          Why Choose Urban City Lahore?
        </h3>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          marginBottom: "60px"
        }}>
          
          {/* Card 1 */}
          <div style={{
            backgroundColor: "#ffffff",
            padding: "35px 30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.06)",
            borderTop: "4px solid #d4af37",
            border: "1px solid #eee"
          }}>
            <h3 style={{ fontSize: "1.4rem", color: "#111111", marginBottom: "12px", fontWeight: "700" }}>Transparency</h3>
            <p style={{ color: "#555555", lineHeight: "1.7", fontSize: "0.95rem" }}>
              Clear pricing and documented payment schedules with zero hidden charges, ensuring complete peace of mind for every investor.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: "#ffffff",
            padding: "35px 30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.06)",
            borderTop: "4px solid #d4af37",
            border: "1px solid #eee"
          }}>
            <h3 style={{ fontSize: "1.4rem", color: "#111111", marginBottom: "12px", fontWeight: "700" }}>Quality Infrastructure</h3>
            <p style={{ color: "#555555", lineHeight: "1.7", fontSize: "0.95rem" }}>
              Planned development featuring wide carpeted roads, underground electricity, lush green parks, and modern commercial hubs.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            backgroundColor: "#ffffff",
            padding: "35px 30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.06)",
            borderTop: "4px solid #d4af37",
            border: "1px solid #eee"
          }}>
            <h3 style={{ fontSize: "1.4rem", color: "#111111", marginBottom: "12px", fontWeight: "700" }}>Dedicated Support</h3>
            <p style={{ color: "#555555", lineHeight: "1.7", fontSize: "0.95rem" }}>
              A professional sales and customer care team ready to assist you with booking procedures, queries, and after-sale services.
            </p>
          </div>

        </div>

        {/* 4. Luxury CTA Banner with Capsule Buttons */}
        <div style={{
          backgroundColor: "#111111",
          backgroundImage: "linear-gradient(135deg, #111111 0%, #1a1c23 100%)",
          borderRadius: "20px",
          padding: "50px 30px",
          textAlign: "center",
          color: "#ffffff",
          border: "2px solid #d4af37",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
        }}>
          <h2 style={{ fontSize: "2.2rem", color: "#d4af37", marginBottom: "15px", fontWeight: "700" }}>
            Ready to Invest in Your Future?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "650px", margin: "0 auto 30px auto", lineHeight: "1.6" }}>
            Secure your residential or commercial plot today with flexible installment plans and guaranteed high returns.
          </p>
          <div className="cta-buttons-responsive" style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link 
              to="/payment-plan" 
              className="cta-btn-responsive"
              style={{
                display: "inline-block",
                padding: "14px 30px",
                borderRadius: "30px",
                fontWeight: "700",
                fontSize: "1rem",
                textDecoration: "none",
                background: "linear-gradient(135deg, #f39c12 0%, #d4af37 100%)",
                color: "#111111",
                boxShadow: "0 8px 25px rgba(212, 175, 55, 0.4)",
                transition: "all 0.3s ease"
              }}
            >
              Explore Payment Plans
            </Link>
            <Link 
              to="/contact" 
              className="cta-btn-responsive"
              style={{
                display: "inline-block",
                padding: "14px 30px",
                borderRadius: "30px",
                fontWeight: "700",
                fontSize: "1rem",
                textDecoration: "none",
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "2px solid #d4af37",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease"
              }}
            >
              Contact Sales Expert
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
