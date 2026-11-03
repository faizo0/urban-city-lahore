import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PaymentPlan from "./pages/PaymentPlan";
import PlanDetail from "./pages/PlanDetail"; // 👈 نیا ڈیٹیل پیج इम्पोर्ट किया गया है
import Location from "./pages/Location";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Blogs from "./pages/Blogs";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment-plan" element={<PaymentPlan />} />
            <Route path="/payment-plan/:slug" element={<PlanDetail />} /> {/* 👈 یہ نیا ڈائنامک روٹ ہے جو کلک کرنے پر ڈیٹیل کھولے گا */}
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}