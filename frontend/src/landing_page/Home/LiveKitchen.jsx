import { useState, useEffect } from "react";
import './kitchen.css'

const FEATURED = {
  emoji: "🍛",
  tag: "Chef's Pick · Made Fresh Now",
  name: "Butter Chicken Thali",
  desc: "Creamy butter chicken gravy with 2 rotis, steamed basmati rice, dal tadka & pickle. Made to order in our live kitchen.",
  time: "18 min",
  serves: "1 person",
  calories: "680 kcal",
  price: 249,
};

const ITEMS = [
  { id:1, emoji:"🥪", name:"Grilled Club Sandwich",  desc:"Chicken + cheese + veggies",  prep:"8 min",  price:129 },
  { id:2, emoji:"🍜", name:"Masala Maggi Bowl",       desc:"Street-style, extra masala",  prep:"6 min",  price:89  },
  { id:3, emoji:"🫔", name:"Paneer Kathi Roll",        desc:"Crispy wrap, mint chutney",   prep:"10 min", price:149 },
];

function LiveClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

export default function LiveKitchen() {
  const [cartFeatured, setCartFeatured] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <section id="kitchen" className="lk-section">
        <div className="container-fix">
      <div className="lk-header">
        <div>
          <div className="lk-live-pill">
            <span className="lk-live-dot" />
            KITCHEN IS LIVE · <LiveClock />
          </div>
          <h2 className="ns-section-title">
            Fresh From Our <span style={{ color: "var(--g-acc)" }}>Live Kitchen</span>
          </h2>
          <p className="ns-section-sub" style={{ marginBottom: 0 }}>
            Made to order, every single time. No frozen food, no reheating — just fresh.
          </p>
        </div>
        <button className="ns-view-all">View Full Menu →</button>
      </div>

      <div className="lk-grid">
        {/* Featured large card */}
        <div className="lk-featured">
          <div className="lk-featured-bg">{FEATURED.emoji}</div>
          <div className="lk-featured-tag">
            <span className="lk-live-dot" style={{ background:"#fff" }} />
            {FEATURED.tag}
          </div>
          <div className="lk-featured-name">{FEATURED.name}</div>
          <div className="lk-featured-desc">{FEATURED.desc}</div>
          <div className="lk-featured-meta">
            <span className="lk-meta-chip">⏱️ {FEATURED.time}</span>
            <span className="lk-meta-chip">👤 {FEATURED.serves}</span>
            <span className="lk-meta-chip">🔥 {FEATURED.calories}</span>
          </div>
          <div className="lk-featured-price">
            <span className="lk-f-price">₹{FEATURED.price}</span>
            <button
              className="lk-order-btn"
              onClick={() => setCartFeatured(true)}
            >
              {cartFeatured ? "✓ Added!" : "Order Now"}
            </button>
          </div>
        </div>

        {/* Small cards */}
        {ITEMS.map(item => (
          <div className="lk-card" key={item.id}>
            <div className="lk-card-emoji">
              {item.emoji}
              <span className="lk-prep-badge">⏱ {item.prep}</span>
            </div>
            <div className="lk-card-body">
              <div className="lk-card-name">{item.name}</div>
              <div className="lk-card-desc">{item.desc}</div>
              <div className="lk-card-footer">
                <span className="lk-card-price">₹{item.price}</span>
                <button
                  className="lk-add-btn"
                  onClick={() => setCart(c => c.includes(item.id) ? c : [...c, item.id])}
                >
                  {cart.includes(item.id) ? "✓" : "+"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}