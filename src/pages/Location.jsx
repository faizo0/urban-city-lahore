import React, { useState } from "react";

const locationFeatures = [
  {
    id: 1,
    title: "Main GT Road",
    badge: "0 Mins Direct Access",
    desc: "Direct frontage for easy travel into Lahore city.",
    image: "public/images/gtroad.jpeg",
    details: "Urban City Lahore is directly located on the main Grand Trunk (GT Road), providing unmatched accessibility. It offers direct entry and exit points for residents commuting to central Lahore, commercial hubs, and nearby towns without facing inner-city traffic congestion."
  },
  {
    id: 2,
    title: "Motorway Access",
    badge: "5 Mins Drive",
    desc: "Fast links to Islamabad, Faisalabad and Multan.",
    image: "public/images/moterwy.jpeg",
    details: "Located just a short 5-minute drive from the Lahore-Islamabad Motorway (M-2) interchange. This ensures seamless and rapid inter-city travel towards Islamabad, Faisalabad, Multan, and other major economic corridors across Pakistan."
  },
  {
    id: 3,
    title: "Nearby",
    badge: "10 Mins Away",
    desc: "Schools, hospitals and markets within a short drive.",
    image: "public/images/mrktschol.jpeg",
    details: "Everything you need is right around the corner. Top-tier educational institutions, modern healthcare clinics, commercial markets, shopping centers, and recreational spots are all situated within a 10-minute radius for ultimate family convenience."
  }
];

export default function Location() {
  const [activeModal, setActiveModal] = useState(null);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80";
  };

  const heroStyle = {
    position: "relative",
    height : "400px",
    backgroundImage: "linear-gradient(rgba(3, 3, 3, 0.45)), url('https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "90px 20px",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: "50px"
  };

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div className="page-head" style={heroStyle}>
        <h1 style={{ fontSize: "4.8rem", fontWeight: "900", marginTop:"25px", marginBottom: "12px", letterSpacing: "2px", color: "#ffffff" }}>
          Location
        </h1>
        <p style={{ fontSize: "1.35rem", color: "#e5e7eb", fontWeight: "500", maxWidth: "700px", margin: "0 auto" }}>
          Placed on the Main GT Road with quick Motorway access.
        </p>
      </div>

      <section className="section" style={{ padding: "20px 20px 90px 20px", maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <span
            style={{
              color: "#d4af37",
              fontWeight: "700",
              fontSize: "1rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "12px"
            }}
          >
            STRATEGIC CONNECTIVITY
          </span>
          <h2
            style={{
              fontSize: "3rem",
              margin: "0 0 18px 0",
              color: "#0f172a",
              fontWeight: "800",
              letterSpacing: "0.5px"
            }}
          >
            Prime Location Advantages
          </h2>
          <p style={{ color: "#475569", fontSize: "1.15rem", lineHeight: "1.7", margin: 0 }}>
            Situated at the most accessible junction in Lahore, connecting major roadways, commercial centers, and essential urban facilities seamlessly.
          </p>
        </div>

        {/* Location Cards Grid (Blog & Home Card Style) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", marginBottom: "50px" }}>
          {locationFeatures.map((item) => (
            <article 
              key={item.id}
              onClick={() => setActiveModal(item)}
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
              {/* Card Image Box with Badge */}
              <div style={{ position: "relative", height: "220px", width: "100%", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
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
                  {item.badge}
                </span>
              </div>

              {/* Card Content Area */}
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
                    {item.title}
                  </h3>
                  <p style={{ color: "#475569", fontSize: "0.98rem", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                    {item.desc}
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

        {/* Map Frame */}
        <iframe 
          title="Urban City Lahore map" 
          style={{ width: "100%", height: "450px", border: 0, marginTop: "30px", borderRadius: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }} 
          src="https://www.google.com/maps?q=Urban+City+Lahore&output=embed" 
        />
      </section>

      {/* Detail Popup Modal */}
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
            {/* Close Cross Button */}
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

            {/* Modal Header */}
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

            {/* Modal Description */}
            <p style={{ color: "#334155", fontSize: "1.08rem", lineHeight: "1.8", marginBottom: "30px" }}>
              {activeModal.details}
            </p>

            {/* 🌟 Single VIP Gold Capsule Action Button */}
            <div>
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "linear-gradient(135deg, #f39c12 0%, #d4af37 100%)",
                  color: "#111111",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  boxShadow: "0 8px 25px rgba(212, 175, 55, 0.45)",
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