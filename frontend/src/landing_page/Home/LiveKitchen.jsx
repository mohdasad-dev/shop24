import { useState, useEffect } from "react";
import './kitchen.css';
// import { FEATURED, CATEGORIES } from './menuData';
import { FEATURED, CATEGORIES } from '../../data/data';

/* ── Live Clock ── */
function LiveClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

/* ── Tag Badge ── */
const TAG_COLORS = {
  Veg:     { bg: "rgba(39,174,96,0.15)",  border: "rgba(39,174,96,0.4)",  dot: "#27ae60" },
  Chicken: { bg: "rgba(245,166,35,0.15)", border: "rgba(245,166,35,0.4)", dot: "#f5a623" },
  Egg:     { bg: "rgba(241,196,15,0.15)", border: "rgba(241,196,15,0.4)", dot: "#f1c40f" },
  Mutton:  { bg: "rgba(231,76,60,0.15)",  border: "rgba(231,76,60,0.4)",  dot: "#e74c3c" },
};

function TagBadge({ tag }) {
  const c = TAG_COLORS[tag] || TAG_COLORS.Veg;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      background: c.bg, border: `1px solid ${c.border}`,
      borderRadius: 100, padding: "2px 9px", fontSize: 10, fontWeight: 700,
      color: c.dot, letterSpacing: "0.6px", textTransform: "uppercase",
    }}>
      <span style={{ width: 6, height: 6, background: c.dot, borderRadius: "50%", flexShrink: 0 }} />
      {tag}
    </span>
  );
}

/* ── Small Item Card ── */
function ItemCard({ item, inCart, onAdd }) {
  return (
    <div className="lk-card">
      <div className="lk-card-top">
        <TagBadge tag={item.tag} />
        <span className="lk-prep-badge">⏱ {item.prep}</span>
      </div>
      <div className="lk-card-name">{item.name}</div>
      <div className="lk-card-desc">{item.desc}</div>
      <div className="lk-card-footer">
        <span className="lk-card-price">₹{item.price}</span>
        <button
          className={`lk-add-btn ${inCart ? "added" : ""}`}
          onClick={onAdd}
        >
          {inCart ? "✓" : "+"}
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function LiveKitchen() {
  const [activeTab, setActiveTab]       = useState("momos");
  const [cart, setCart]                 = useState([]);
  const [cartFeatured, setCartFeatured] = useState(false);
  const [cartAnim, setCartAnim]         = useState(false);

  const activeCat = CATEGORIES.find(c => c.id === activeTab);

  const addToCart = (id) => {
    if (cart.includes(id)) return;
    setCart(c => [...c, id]);
    setCartAnim(true);
    setTimeout(() => setCartAnim(false), 600);
  };

  const addFeatured = () => {
    setCartFeatured(true);
    setCartAnim(true);
    setTimeout(() => setCartAnim(false), 600);
  };

  const totalItems = cart.length + (cartFeatured ? 1 : 0);

  return (
    <section id="kitchen" className="lk-section">
      <div className="container-fix">

        {/* ── Header ── */}
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

          {/* Cart bubble */}
          <button className={`lk-cart-btn ${cartAnim ? "bump" : ""}`}>
            🛒 Cart
            {totalItems > 0 && (
              <span className="lk-cart-count">{totalItems}</span>
            )}
          </button>
        </div>

        {/* ── Featured Card ── */}
        <div className="lk-featured">
          <div className="lk-featured-bg">{FEATURED.emoji}</div>
          <div className="lk-featured-tag">
            <span className="lk-live-dot" style={{ background: "#fff" }} />
            {FEATURED.tag}
          </div>
          <TagBadge tag="Chicken" />
          <div className="lk-featured-name">{FEATURED.name}</div>
          <div className="lk-featured-desc">{FEATURED.desc}</div>
          <div className="lk-featured-meta">
            <span className="lk-meta-chip">⏱️ {FEATURED.time}</span>
            <span className="lk-meta-chip">👤 {FEATURED.serves}</span>
            <span className="lk-meta-chip">🔥 {FEATURED.calories}</span>
          </div>
          <div className="lk-featured-price">
            <span className="lk-f-price">₹{FEATURED.price}</span>
            <button className="lk-order-btn" onClick={addFeatured}>
              {cartFeatured ? "✓ Added!" : "Order Now →"}
            </button>
          </div>
        </div>

        {/* ── Category Tabs ── */}
        <div className="lk-tabs-wrap">
          <div className="lk-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`lk-tab ${activeTab === cat.id ? "active" : ""}`}
                style={activeTab === cat.id ? { "--tab-color": cat.color } : {}}
                onClick={() => setActiveTab(cat.id)}
              >
                <span>{cat.emoji}</span>
                {cat.label}
                {cat.badge && <span className="lk-tab-badge">{cat.badge}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* ── Active Category Grid ── */}
        {activeCat && (
          <div className="lk-cat-section">
            <div className="lk-cat-header">
              <span className="lk-cat-emoji">{activeCat.emoji}</span>
              <span className="lk-cat-title" style={{ color: activeCat.color }}>
                {activeCat.label}
              </span>
              <span className="lk-cat-count">{activeCat.items.length} items</span>
            </div>

            <div className="lk-grid">
              {activeCat.items.map(item => (
                <ItemCard
                  key={item.id}
                  item={item}
                  inCart={cart.includes(item.id)}
                  onAdd={() => addToCart(item.id)}
                />
              ))}
            </div>

            {/* Add-on note */}
            {activeCat.addon && (
              <div className="lk-addon-note">
                ✦ {activeCat.addon.label} — +₹{activeCat.addon.price}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}