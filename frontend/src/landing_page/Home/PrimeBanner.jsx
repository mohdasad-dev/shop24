// import { useState } from "react";

// const PLANS = [
//   { key: "monthly", name: "Monthly",  price: "₹99",  sub: "/month",    popular: false, desc: "Cancel anytime"     },
//   { key: "yearly",  name: "Yearly",   price: "₹799", sub: "/year",     popular: true,  desc: "Save ₹389 vs monthly" },
//   { key: "student", name: "Student",  price: "₹49",  sub: "/month",    popular: false, desc: "With student ID"    },
// ];

// const PERKS = [
//   { icon: "🚚", text: "Free delivery on every order" },
//   { icon: "💰", text: "10% cashback on all purchases" },
//   { icon: "⚡", text: "Priority order processing" },
//   { icon: "🎁", text: "Exclusive members-only deals" },
//   { icon: "🌙", text: "Late-night ordering bonus" },
//   { icon: "🎂", text: "Birthday double cashback" },
// ];

// export default function PrimeBanner() {
//   const [selected, setSelected] = useState("yearly");

//   return (
//     <section id="prime" className="pm-section">
//       <div className="container-fix">
//       <div className="pm-banner">
//         <div className="pm-left">
//           <div className="pm-badge">⭐ SHOP24HOURS PRIME</div>
//           <h2 className="pm-title">
//             Unlimited Perks.<br />
//             One <span>Prime</span> Plan.
//           </h2>
//           <p className="pm-desc">
//             Free delivery, cashback, priority service and exclusive deals —
//             everything your cravings deserve, every single day.
//           </p>
//           <div className="pm-perks">
//             {PERKS.map(p => (
//               <div className="pm-perk" key={p.text}>
//                 <div className="pm-perk-dot">{p.icon}</div>
//                 {p.text}
//               </div>
//             ))}
//           </div>
//           <div className="pm-cta-row">
//             <button className="pm-btn-primary">⭐ Join Prime Now</button>
//             <button className="pm-btn-secondary">Learn More</button>
//           </div>
//           <p className="pm-price-note">No hidden charges. Cancel anytime.</p>
//         </div>

//         {/* Plan selector */}
//         <div className="pm-right">
//           {PLANS.map(p => (
//             <div
//               key={p.key}
//               className={`pm-plan${selected === p.key ? " selected" : ""}`}
//               onClick={() => setSelected(p.key)}
//             >
//               <div>
//                 <div className="pm-plan-name">{p.name}</div>
//                 <div className="pm-plan-desc">{p.desc}</div>
//                 {p.popular && <span className="pm-plan-popular">BEST VALUE</span>}
//               </div>
//               <div>
//                 <div className="pm-plan-price">{p.price}</div>
//                 <div className="pm-plan-sub">{p.sub}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }





import { useState } from "react";
import "./prime.css"; // Ensure you link the CSS file

const PLANS = [
  { key: "monthly", name: "Monthly",  price: "₹99",  sub: "/month",    popular: false, desc: "Cancel anytime"     },
  { key: "yearly",  name: "Yearly",   price: "₹799", sub: "/year",     popular: true,  desc: "Save ₹389 vs monthly" },
  { key: "student", name: "Student",  price: "₹49",  sub: "/month",    popular: false, desc: "With student ID"    },
];

const PERKS = [
  { icon: "🚚", text: "Free delivery" }, // Shortened for mobile fit
  { icon: "💰", text: "10% cashback" },
  { icon: "⚡", text: "Priority service" },
  { icon: "🎁", text: "Exclusive deals" },
  { icon: "🌙", text: "Late-night bonus" },
  { icon: "🎂", text: "Birthday perks" },
];

export default function PrimeBanner() {
  const [selected, setSelected] = useState("yearly");

  return (
    <section id="prime" className="pm-section">
      <div className="container-fix">
        <div className="pm-banner">
          
          {/* Left Side: Information */}
          <div className="pm-left">
            <div className="pm-badge">⭐ SHOP24HOURS PRIME</div>
            <h2 className="pm-title">
              Unlimited Perks.<br />
              One <span>Prime</span> Plan.
            </h2>
            <p className="pm-desc">
              Free delivery, cashback, and priority service — everything your cravings deserve.
            </p>
            
            <div className="pm-perks-grid">
              {PERKS.map(p => (
                <div className="pm-perk" key={p.text}>
                  <span className="pm-perk-icon">{p.icon}</span>
                  <span className="pm-perk-text">{p.text}</span>
                </div>
              ))}
            </div>

            <div className="pm-cta-row">
              <button className="pm-btn-primary">⭐ Join Prime Now</button>
              <button className="pm-btn-secondary">Terms Apply</button>
            </div>
          </div>

          {/* Right Side: Plan Selector */}
          <div className="pm-right">
            <div className="pm-plans-stack">
              {PLANS.map(p => (
                <div
                  key={p.key}
                  className={`pm-plan ${selected === p.key ? "selected" : ""}`}
                  onClick={() => setSelected(p.key)}
                >
                  <div className="pm-plan-info">
                    <div className="pm-plan-name">
                      {p.name}
                      {p.popular && <span className="pm-plan-popular">BEST VALUE</span>}
                    </div>
                    <div className="pm-plan-desc">{p.desc}</div>
                  </div>
                  <div className="pm-plan-pricing">
                    <div className="pm-plan-price">{p.price}</div>
                    <div className="pm-plan-sub">{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="pm-price-note">No hidden charges. Cancel anytime.</p>
          </div>

        </div>
      </div>
    </section>
  );
}