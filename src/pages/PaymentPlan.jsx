import { useState } from "react";
import { Link } from "react-router-dom";
import "./PaymentPlan.css";

const plots = [
  { size: "3 Marla", down: 450000, m3: 24000, m5: 15500, poss: 200000, img: "/images/3marla.jpg" },
  { size: "5 Marla", down: 750000, m3: 40000, m5: 26000, poss: 350000, img: "/images/5marla.jpg" },
  { size: "10 Marla", down: 1400000, m3: 76000, m5: 49000, poss: 650000, img: "/images/10marla.jpg" },
  { size: "1 Kanal", down: 2600000, m3: 142000, m5: 92000, poss: 1200000, img: "/images/1kanal.jpg" },
];

const pkr = (n) => "PKR " + n.toLocaleString("en-PK");

export default function PaymentPlan() {
  const [years, setYears] = useState(3);
  return (
    <div className="payment-page">
      {/* Top Banner Header with Background Image */}
      <div className="payment-hero-banner">
        <div className="banner-content">
          <h1>Payment Plans</h1>
          <p>Choose a plot size and installment duration. Figures below are sample values; confirm current rates with our sales team.</p>
        </div>
      </div>
      
      <section className="section">
        <div className="toggle" role="group" aria-label="Installment duration">
          {[3, 5].map((y) => (
            <button key={y} className={years === y ? "on" : ""} onClick={() => setYears(y)}>
              {y} Years Plan
            </button>
          ))}
        </div>
        
        <div className="plan-grid">
          {plots.map((p) => (
            <article className="plan" key={p.size}>
              <img src={p.img} alt={p.size} className="plan-img" />
              <h3>{p.size}</h3>
              <table>
                <tbody>
                  <tr><td>Down payment</td><td>{pkr(p.down)}</td></tr>
                  <tr><td>Monthly installment</td><td>{pkr(years === 3 ? p.m3 : p.m5)}</td></tr>
                  <tr><td>Possession fee</td><td>{pkr(p.poss)}</td></tr>
                  <tr><td>Duration</td><td>{years * 12} months</td></tr>
                </tbody>
              </table>

              {/* ۱۔ آپ کا پرانا بکنگ والا بٹن ویسے کا ویسا ہی ہے */}
              <Link to="/booking" className="btn btn-gold">Book {p.size}</Link>

              {/* ۲. یہ نیا تفصیلات (Detail) دیکھنے والا بٹن ہے جو نیچے ایڈ کر دیا گیا ہے */}
              <Link 
                to={`/payment-plan/${p.size.toLowerCase().replace(" ", "-")}`} 
                className="btn" 
                style={{ marginTop: "8px", background: "#111", color: "#d4af37" }}
              >
                View Details ({p.size})
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}