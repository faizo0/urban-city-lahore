import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PlanDetail.css";

// تمام پلاٹس کا تفصیلی ڈیٹا اور ان کے اصلی 3D نقشے اور ڈیزائنز کی تصاویر
const plotDetailsData = {
  "3-marla": {
    size: "3 Marla",
    dimensions: "20' x 37.5'",
    totalArea: "675 Sq. Ft.",
    downPayment: 450000,
    m3Installment: 24000,
    m5Installment: 15500,
    possessionFee: 200000,
    confirmation: 150000,
    halfYearly: 75000,
    totalPrice: 2150000,
    bannerImg: "/images/3marla.jpg",
    // 3 مرلہ کے لیے شاندار 3D فرنٹ اور ف্লোر پلان کا لنک
    mapImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    locationBlock: "Executive Block (Near Main Boulevard)",
    features: [
      "2 Bed Upper & Lower House Compatibility",
      "24/7 Security Patrol & CCTV Surveillance",
      "Underground Electricity & Fiber Optic Cable",
      "5 Minutes Walk to Central Park & Jamia Mosque",
      "Flexible 3 to 5 Years Easy Installment Plan"
    ]
  },
  "5-marla": {
    size: "5 Marla",
    dimensions: "25' x 45'",
    totalArea: "1125 Sq. Ft.",
    downPayment: 750000,
    m3Installment: 40000,
    m5Installment: 26000,
    possessionFee: 350000,
    confirmation: 250000,
    halfYearly: 125000,
    totalPrice: 3650000,
    bannerImg: "/images/5marla.jpg",
    // 5 مرلہ کے لیے ماڈرن ڈبل سٹوری ولا 3D ڈیزائن
    mapImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    locationBlock: "Overseas Block (100 Ft. Wide Road)",
    features: [
      "3-4 Master Bedroom Double Story Villa Plan",
      "Dedicated Garage / Car Porch (Sedan/SUV)",
      "Direct Access to Commercial Hub & Sports Complex",
      "Gated Community with Smart Gate Entry Pass",
      "High Return on Investment (ROI) Potential"
    ]
  },
  "10-marla": {
    size: "10 Marla",
    dimensions: "35' x 65'",
    totalArea: "2250 Sq. Ft.",
    downPayment: 1400000,
    m3Installment: 76000,
    m5Installment: 49000,
    possessionFee: 650000,
    confirmation: 450000,
    halfYearly: 225000,
    totalPrice: 6800000,
    bannerImg: "/images/10marla.jpg",
    // 10 مرلہ کے لیے لگژری بنگلہ 3D ڈیزائن اور فرنٹ ایلیویشن
    mapImg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    locationBlock: "Premium Golf Block (Park Facing)",
    features: [
      "4-5 Deluxe Bedrooms with Attached Jacuzzi Baths",
      "Spacious Lawn & 2 Car Covered Parking",
      "Servant Quarter with Separate Side Entrance",
      "Corner & Main Boulevard Premium Plot Options",
      "Instant Possession upon 50% Clear Payment"
    ]
  },
  "1-kanal": {
    size: "1 Kanal",
    dimensions: "50' x 90'",
    totalArea: "4500 Sq. Ft.",
    downPayment: 2600000,
    m3Installment: 142000,
    m5Installment: 92000,
    possessionFee: 1200000,
    confirmation: 850000,
    halfYearly: 450000,
    totalPrice: 12500000,
    bannerImg: "/images/1kanal.jpg",
    // 1 کنال کے لیے شاندار شاہانہ مینشن / وی آئی پی ہاؤس ڈیزائن
    mapImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    locationBlock: "Royal VVIP Estate Block",
    features: [
      "Executive Mansion Architectural Floor Design",
      "Private Swimming Pool & Backyard Lawn Provision",
      "Parking Space for 4 Luxury SUV Vehicles",
      "Facing Grand Lake & Central Commercial Boulevard",
      "Priority VIP Allotment & On-spot Possession"
    ]
  }
};

const pkr = (n) => "PKR " + (n ? n.toLocaleString("en-PK") : "0");

export default function PlanDetail() {
  const { slug } = useParams();
  const [years, setYears] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  const plan = plotDetailsData[slug] || plotDetailsData["3-marla"];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="plan-detail-wrapper">
      <div 
        className="detail-hero-banner"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.85)), url("${plan.bannerImg}")` }}
      >
        <div className="banner-content">
          <Link to="/payment-plan" className="back-btn">← Back to Payment Plans</Link>
          <h1>{plan.size} VIP Plot Specifications</h1>
          <p className="subtitle">Location: <strong>{plan.locationBlock}</strong> | Dimensions: <strong>{plan.dimensions}</strong></p>
        </div>
      </div>

      <div className="detail-container">
        <div className="main-info">
          <div className="plan-toggle-box">
            <h3>Choose Installment Duration:</h3>
            <div className="toggle" role="group">
              {[3, 5].map((y) => (
                <button 
                  key={y} 
                  className={years === y ? "on" : ""} 
                  onClick={() => setYears(y)}
                >
                  {y} Years Plan
                </button>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <div className="card-header">
              <h2>Complete Financial Plan ({years} Years)</h2>
              <span className="total-badge">Total: {pkr(plan.totalPrice)}</span>
            </div>
            <table className="vip-table">
              <tbody>
                <tr>
                  <td>Plot Size & Category</td>
                  <td><strong>{plan.size} Residential</strong></td>
                </tr>
                <tr>
                  <td>Dimensions / Total Area</td>
                  <td>{plan.dimensions} ({plan.totalArea})</td>
                </tr>
                <tr>
                  <td>Down Payment (Booking)</td>
                  <td className="gold-text">{pkr(plan.downPayment)}</td>
                </tr>
                <tr>
                  <td>Confirmation Fee (Within 60 Days)</td>
                  <td>{pkr(plan.confirmation)}</td>
                </tr>
                <tr>
                  <td>Monthly Installment ({years * 12} Months)</td>
                  <td className="gold-text"><strong>{pkr(years === 3 ? plan.m3Installment : plan.m5Installment)}</strong></td>
                </tr>
                <tr>
                  <td>Half-Yearly Installment ({years * 2} Payments)</td>
                  <td>{pkr(plan.halfYearly)}</td>
                </tr>
                <tr>
                  <td>Possession & Allotment Fee</td>
                  <td>{pkr(plan.possessionFee)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* یہاں اب ہر سائز کا اپنا اورجنل 3D ڈیزائن اور نقشہ شو ہوگا */}
          <div className="detail-card">
            <h2>Proposed 3D Architectural Design & Floor Map</h2>
            <p className="section-desc">Professional 3D front elevation and layout structure designed for {plan.size} category.</p>
            <div className="map-wrapper">
              <img 
                src={plan.mapImg} 
                alt={`${plan.size} 3D Architectural Design`} 
              />
            </div>
          </div>

          <div className="detail-card">
            <h2>Key Project Highlights & Amenities</h2>
            <ul className="vip-features-list">
              {plan.features.map((item, index) => (
                <li key={index}>
                  <span className="gold-check">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sidebar-info">
          <div className="booking-card">
            <h3>Book {plan.size} Plot</h3>
            <p className="form-subtext">Reserve your plot today with easy booking installments.</p>

            {submitted ? (
              <div className="success-box">
                <span className="success-icon">🎉</span>
                <h4>Request Received!</h4>
                <p>Our real estate consultant will call you shortly regarding your <strong>{plan.size}</strong> booking.</p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="vip-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="e.g. Muhammad Ali" required />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp Number</label>
                  <input type="tel" placeholder="+92 300 1234567" required />
                </div>
                <div className="form-group">
                  <label>Selected Payment Plan</label>
                  <input type="text" value={`${plan.size} - (${years} Years Plan)`} readOnly className="readonly-input" />
                </div>
                <div className="form-group">
                  <label>Specific Preference</label>
                  <textarea rows="3" placeholder="e.g. Park facing, Corner plot, Near Main Gate..."></textarea>
                </div>
                <button type="submit" className="btn-gold-submit">
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}