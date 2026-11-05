import React, { useState } from "react";
import "./booking.css";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    plotSize: "3 Marla",
    paymentPlan: "3 Years Plan",
    preference: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="booking-page-wrapper">
      <div className="booking-hero">
        <div className="hero-content">
          <h1>Plot Booking & Information</h1>
          <p>Read the details below and fill out the online booking form to reserve your residential plot.</p>
        </div>
      </div>

      <div className="booking-container">
        <div className="booking-info-section">
          <h2>Booking Instructions & Requirements</h2>
          <p>Please review the following essential details before submitting your booking application:</p>
          
          <div className="info-box">
            <h3>📌 Step-by-Step Process:</h3>
            <ul>
              <li><strong>1. Form Submission:</strong> Complete the booking request form with accurate personal details.</li>
              <li><strong>2. Agent Contact:</strong> Our real estate representative will contact you within 24 hours to confirm plot availability.</li>
              <li><strong>3. Payment & Receipt:</strong> Submit the down payment via Pay Order / Bank Deposit to receive your official allotment paper.</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>📑 Required Documents for Allotment:</h3>
            <ul>
              <li>✓ Copy of Applicant's CNIC / Passport</li>
              <li>✓ Copy of Next-of-Kin (Nominee) CNIC</li>
              <li>✓ 2 Passport Size Photos</li>
              <li>✓ Down Payment Receipt / Pay Order Proof</li>
            </ul>
          </div>
        </div>

        <div className="booking-form-section">
          <div className="booking-card-box">
            <h3>Online Booking Form</h3>
            <p className="form-desc">Fill in your information to book your plot today.</p>

            {submitted ? (
              <div className="success-alert">
                <span className="icon">🎉</span>
                <h4>Booking Request Received!</h4>
                <p>Thank you, <strong>{formData.fullName}</strong>. Our consultant will reach out to you shortly regarding your <strong>{formData.plotSize}</strong> plot reservation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-form">
                <div className="input-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    placeholder="e.g. Muhammad Ali" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="input-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+92 300 1234567" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="input-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="name@example.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>

                <div className="input-group">
                  <label>Select Plot Size *</label>
                  <select name="plotSize" value={formData.plotSize} onChange={handleChange}>
                    <option value="3 Marla">3 Marla</option>
                    <option value="5 Marla">5 Marla</option>
                    <option value="10 Marla">10 Marla</option>
                    <option value="1 Kanal">1 Kanal</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Installment Plan *</label>
                  <select name="paymentPlan" value={formData.paymentPlan} onChange={handleChange}>
                    <option value="3 Years Plan">3 Years Easy Installment Plan</option>
                    <option value="5 Years Plan">5 Years Easy Installment Plan</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Special Requirement / Preference</label>
                  <textarea 
                    name="preference" 
                    rows="3" 
                    placeholder="e.g. Corner Plot, Park Facing, Main Boulevard..." 
                    value={formData.preference} 
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-booking-btn">
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
