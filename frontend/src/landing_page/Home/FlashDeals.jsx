import { useState, useEffect } from "react";

const DEALS = [
  { id:1, emoji:"🍔", name:"Smash Burger Combo",   desc:"Burger + Fries + Drink", price:149, original:249, discount:40, tag:"HOT",      tagClass:"fd-tag-hot"      },
  { id:2, emoji:"🍕", name:"Farm Villa Pizza",      desc:"12 inch, extra cheese",  price:199, original:325, discount:38, tag:"TRENDING", tagClass:"fd-tag-trending" },
  { id:3, emoji:"🥤", name:"Energy Drink Pack",     desc:"Pack of 4 cans",         price:199, original:280, discount:29, tag:"NEW",      tagClass:"fd-tag-new"      },
  { id:4, emoji:"🍜", name:"Korean Ramen Bundle",   desc:"Pack of 5 noodles",      price:299, original:450, discount:33, tag:"TRENDING", tagClass:"fd-tag-trending" },
];

function useCountdown(targetSeconds) {
  const [time, setTime] = useState(targetSeconds);
  useEffect(() => {
    const id = setInterval(() => setTime(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(time / 3600)).padStart(2, "0");
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");
  return { h, m, s };
}

export default function FlashDeals() {
  const { h, m, s } = useCountdown(4 * 3600 + 23 * 60 + 47);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => setCart(c => c.includes(id) ? c : [...c, id]);

  return (
    <section id="flash" className="fd-section">
      <div className="container-fix">

      <div className="fd-header">
        <div className="fd-title-wrap">
          <h2 className="fd-title">
            ⚡ Flash Deals
            <span className="fd-live-badge">
              <span className="fd-live-dot" /> LIVE
            </span>
          </h2>
        </div>
        <div className="fd-countdown">
          <span className="fd-count-label">Ends in</span>
          {[{ v: h, u: "HRS" }, { v: m, u: "MIN" }, { v: s, u: "SEC" }].map(({ v, u }, i) => (
            <span key={u} style={{ display:"flex", alignItems:"center", gap: 4 }}>
              {i > 0 && <span className="fd-count-sep">:</span>}
              <div className="fd-count-box">
                <div className="fd-count-num">{v}</div>
                <div className="fd-count-unit">{u}</div>
              </div>
            </span>
          ))}
        </div>
      </div>

      <div className="fd-grid">
        {DEALS.map(d => (
          <div className="fd-card" key={d.id}>
            <div className="fd-card-img">
              <span className="fd-discount-badge">-{d.discount}%</span>
              <span>{d.emoji}</span>
              <span className={`fd-tag-badge ${d.tagClass}`}>{d.tag}</span>
            </div>
            <div className="fd-card-body">
              <div className="fd-card-name">{d.name}</div>
              <div className="fd-card-desc">{d.desc}</div>
              <div className="fd-price-row">
                <div>
                  <span className="fd-price-new">₹{d.price}</span>
                  <span className="fd-price-old">₹{d.original}</span>
                </div>
                <button
                  className="fd-add-btn"
                  onClick={() => addToCart(d.id)}
                  title="Add to cart"
                >
                  {cart.includes(d.id) ? "✓" : "+"}
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