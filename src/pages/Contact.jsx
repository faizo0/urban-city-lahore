import React, { useState } from "react";
import "./Contact.css";

const empty = { name: "", phone: "", email: "", plot: "5 Marla", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log("Inquiry:", form);
    setSent(true);
    setForm(empty);
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <div className="contact-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Contact Sales</h1>
          <p>Send an inquiry and our team will call you back shortly.</p>
        </div>
      </div>

      {/* Main Wrap */}
      <section className="contact-wrap">
        {/* Contact Form */}
        <form className="form" onSubmit={submit}>
          <h2>Send Us A Message</h2>

          <label htmlFor="name">
            Full Name
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={change}
              placeholder="Enter your full name"
              required
            />
          </label>

          <label htmlFor="phone">
            Phone Number
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={change}
              placeholder="+92 300 0000000"
              required
            />
          </label>

          <label htmlFor="email">
            Email Address
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={change}
              placeholder="example@mail.com"
              required
            />
          </label>

          <label htmlFor="plot">
            Plot Size Interest
            <select id="plot" name="plot" value={form.plot} onChange={change}>
              <option value="3 Marla">3 Marla</option>
              <option value="5 Marla">5 Marla</option>
              <option value="10 Marla">10 Marla</option>
              <option value="1 Kanal">1 Kanal</option>
            </select>
          </label>

          <label htmlFor="message">
            Message / Inquiry
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={change}
              placeholder="Write your query here..."
            ></textarea>
          </label>

          <button className="btn-gold" type="submit">
            Send Inquiry
          </button>

          {sent && (
            <p className="ok" role="status">
              Thank you! Our sales team will contact you shortly.
            </p>
          )}
        </form>

        {/* Office Cards */}
        <aside className="offices">
          <h2>Our Offices</h2>

          <div className="info-card">
            <div className="card-icon">📍</div>
            <div className="card-text">
              <h3>Head Office</h3>
              <p>Main GT Road, Near Motorway Interchange, Lahore</p>
              <p className="phone-num">📞 +92 300 0000000</p>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon">🏢</div>
            <div className="card-text">
              <h3>Sales Center</h3>
              <p>Main Boulevard, Gulberg III, Lahore</p>
              <p className="phone-num">📞 +92 42 111 000 000</p>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon">✉️</div>
            <div className="card-text">
              <h3>Email Support</h3>
              <p>info@urbancitylahore.com</p>
              <p>sales@urbancitylahore.com</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}