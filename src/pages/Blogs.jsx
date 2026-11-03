import React, { useState } from "react";
import "./Blogs.css";

const blogPosts = [
  {
    id: 1,
    title: "Urban City Lahore: 2026 Housing & Real Estate Market Outlook",
    category: "Market Trends",
    date: "Nov 02, 2026",
    author: "Editorial Team",
    image: "public/images/images.jfif",
    excerpt: "Explore the exponential growth in modern housing schemes across Lahore and why investing early yields high dividends.",
    content: "Urban City Lahore is rapidly emerging as the premier choice for families and smart investors in 2026. With state-of-the-art urban planning, LDA approval, and direct connectivity to main transport hubs, property values are projected to witness massive capital appreciation over the next few years. Investing early in residential and commercial plots here ensures secure registry and high rental yields.",
    featured: true
  },
  {
    id: 2,
    title: "5 Crucial Tips for First-Time Residential Plot Buyers",
    category: "Buying Guide",
    date: "Oct 28, 2026",
    author: "Real Estate Expert",
    image: "public/images/buying-a-home.webp",
    excerpt: "A complete step-by-step checklist on verifying plot documentation, payment plans, and allotment procedures.",
    content: "Buying your first residential plot is an exciting milestone. Always ensure that the housing society is LDA approved with verified NOC papers. Check the development pace on ground, review flexible installment schedules, and verify clear ownership documents before signing any agreement."
  },
  {
    id: 3,
    title: "Why 5 & 10 Marla Plots are the Most Demanded Investments",
    category: "Investment",
    date: "Oct 20, 2026",
    author: "Property Analyst",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    excerpt: "Analysis of resale values, high rental yield potential, and consumer demand in Lahore real estate.",
    content: "In Lahore's thriving real estate market, 5 Marla and 10 Marla residential plots remain the most liquid assets. Their high demand among middle-income families ensures rapid resale value and steady rental returns, making them ideal for both immediate construction and long-term investment."
  },
  {
    id: 4,
    title: "Underground Electricity & Smart Amenities in Modern Housing",
    category: "News & Updates",
    date: "Oct 14, 2026",
    author: "Urban Planner",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover how luxury gated societies are setting new standards with smart infrastructure and security features.",
    content: "Modern housing schemes are moving away from overhead wires by implementing fully underground electricity and utility systems. Coupled with 24/7 gated security, smart entry gates, and lush green theme parks, residents enjoy a secure, aesthetic, and uninterrupted living experience."
  },
  {
    id: 5,
    title: "Understanding Installment Plans & Down Payments in Housing Schemes",
    category: "Buying Guide",
    date: "Oct 05, 2026",
    author: "Finance Advisor",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    excerpt: "Learn how to manage easy 3 to 5 years installment schedules without putting financial stress on your savings.",
    content: "Flexible installment plans spanning 3 to 5 years have revolutionized property ownership. By paying a manageable down payment followed by easy quarterly or monthly installments, investors can secure high-value properties without burdening their personal finances."
  },
  {
    id: 6,
    title: "The Future of Commercial Hubs and Boulevard Markets",
    category: "Market Trends",
    date: "Sep 28, 2026",
    author: "Commercial Expert",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    excerpt: "Why commercial plots along main boulevards guarantee high rental returns and rapid business growth.",
    content: "Main boulevard commercial plots are the crown jewels of any gated community. Designed to accommodate retail outlets, corporate offices, and international food chains, these commercial zones promise extraordinary rental yields and exponential business growth."
  }
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState(null); // Read Story / Detail View State

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
  };

  const filteredBlogs = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  // Agar user ne kisi story par click kiya hai toh Read Story / Detail Page show hoga
  if (activePost) {
    return (
      <div className="blogs-page-wrapper">
        <div className="blogs-hero">
          <div className="hero-content">
            <span style={{ color: "#c9a45c", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.85rem" }}>
              {activePost.category}
            </span>
            <h1 style={{ fontSize: "2.4rem", margin: "10px 0 15px 0", color: "#ffffff" }}>{activePost.title}</h1>
            <p style={{ color: "#cbd5e1" }}>📅 {activePost.date} &nbsp; | &nbsp; ✍️ {activePost.author}</p>
          </div>
        </div>

        <div className="blogs-container" style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
          <button 
            onClick={() => setActivePost(null)}
            style={{
              padding: "10px 22px",
              backgroundColor: "#111111",
              color: "#c9a45c",
              border: "1px solid #c9a45c",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "700",
              marginBottom: "30px",
              transition: "all 0.3s ease"
            }}
          >
            ← Back to Blogs
          </button>

          <div style={{ width: "100%", height: "420px", borderRadius: "14px", overflow: "hidden", marginBottom: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
            <img 
              src={activePost.image} 
              alt={activePost.title} 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={handleImageError}
            />
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "14px", boxShadow: "0 5px 25px rgba(0,0,0,0.05)", lineHeight: "1.8", color: "#334155", fontSize: "1.1rem" }}>
            <h3 style={{ color: "#0f172a", marginBottom: "20px", fontSize: "1.6rem", fontWeight: "800" }}>Complete Story & Insights</h3>
            <p style={{ marginBottom: "20px", fontWeight: "600", color: "#475569", fontSize: "1.15rem" }}>{activePost.excerpt}</p>
            <hr style={{ border: "0", borderTop: "1px solid #e2e8f0", margin: "25px 0" }} />
            <p style={{ marginBottom: "20px" }}>{activePost.content}</p>
            <p>
              Urban City Lahore continues to redefine luxury living standards with transparent documentation, prime location access, and world-class community amenities. Stay tuned for more official updates as development progresses rapidly across all sectors.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blogs-page-wrapper">
      <div className="blogs-hero">
        <div className="hero-content">
          <h1>Real Estate Insights & News</h1>
          <p>Stay updated with the latest property market trends, investment guides, and official project news.</p>
        </div>
      </div>

      <div className="blogs-container">
        <div className="blogs-top-bar">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search articles & news..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {["All", "Market Trends", "Buying Guide", "Investment", "News & Updates"].map((cat) => (
              <button 
                key={cat} 
                className={selectedCategory === cat ? "cat-btn active" : "cat-btn"}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {selectedCategory === "All" && !searchQuery && (
          <div className="featured-blog-card" onClick={() => setActivePost(featuredPost)} style={{ cursor: "pointer" }}>
            <div className="featured-img-box">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                onError={handleImageError}
              />
              <span className="featured-badge">Featured Article</span>
            </div>
            <div className="featured-info">
              <span className="blog-category">{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="blog-meta">
                <span>📅 {featuredPost.date}</span>
                <span>✍️ {featuredPost.author}</span>
              </div>
              <button className="read-more-btn">Read Full Article →</button>
            </div>
          </div>
        )}

        <div className="blogs-grid">
          {filteredBlogs.map((post) => (
            <article className="blog-card" key={post.id} onClick={() => setActivePost(post)} style={{ cursor: "pointer" }}>
              <div className="card-img-box">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  onError={handleImageError}
                />
                <span className="blog-tag">{post.category}</span>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span>{post.date}</span> • <span>{post.author}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="card-read-link">Read Story →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}