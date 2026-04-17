const WHY_ITEMS = [
    {
      icon: "📈",
      title: "Proven Business Model",
      desc: "6+ years of operations, 50+ successful outlets. You inherit a tested playbook — no guesswork.",
    },
    {
      icon: "🏷️",
      title: "Established Brand",
      desc: "Shop24Hours is a recognised name with strong customer loyalty and repeat purchase behaviour.",
    },
    {
      icon: "🛒",
      title: "50+ Menu Items",
      desc: "From burgers to biryani — a diverse, high-margin menu with seasonal specials updated quarterly.",
    },
    {
      icon: "🚀",
      title: "Fast Launch Support",
      desc: "Our team handles site selection, interior fit-out guidance, and staff training. Live in 60 days.",
    },
    {
      icon: "📲",
      title: "Tech & App Backed",
      desc: "Plug into our ordering app, delivery platform, and POS system from day one. Zero setup hassle.",
    },
    {
      icon: "💰",
      title: "Strong ROI",
      desc: "Average franchise breaks even within 18–24 months. Top outlets report 28–35% net margins.",
    },
  ];
  
  const STEPS = [
    { num: "01", title: "Submit Enquiry",   desc: "Fill in the franchise form. Our team reviews it within 48 hrs." },
    { num: "02", title: "Discovery Call",   desc: "A 30-min call to understand your goals, city, and investment plan." },
    { num: "03", title: "Agreement & Setup",desc: "Sign the franchise agreement and begin site setup with full support." },
    { num: "04", title: "Go Live 🎉",       desc: "Launch your Shop24Hours outlet with a grand opening kit from us!" },
  ];
  
  const INVESTMENT_PLANS = [
    {
      type: "KIOSK",
      amount: "₹8–12L",
      featured: false,
      badge: null,
      rows: [
        ["Area Required",  "100–150 sq ft"],
        ["Franchise Fee",  "₹2L"],
        ["Royalty",        "6% of revenue"],
        ["ROI Timeline",   "12–18 months"],
        ["Menu Focus",     "Snacks & Beverages"],
      ],
    },
    {
      type: "STANDARD OUTLET",
      amount: "₹18–25L",
      featured: true,
      badge: "MOST POPULAR",
      rows: [
        ["Area Required",  "300–500 sq ft"],
        ["Franchise Fee",  "₹4L"],
        ["Royalty",        "5% of revenue"],
        ["ROI Timeline",   "18–24 months"],
        ["Menu Focus",     "Full Menu"],
      ],
    },
    {
      type: "FLAGSHIP STORE",
      amount: "₹35–50L",
      featured: false,
      badge: null,
      rows: [
        ["Area Required",  "700–1200 sq ft"],
        ["Franchise Fee",  "₹7L"],
        ["Royalty",        "4% of revenue"],
        ["ROI Timeline",   "24–30 months"],
        ["Menu Focus",     "Full Menu + Dine-in"],
      ],
    },
  ];
  
  /* ── Why Franchise ── */
  export function FranchiseHighlights() {
    return (
      <section className="fq-highlights">
        <div className="fq-section-tag">✦ WHY CHOOSE US</div>
        <h2 className="fq-section-title">
          Why Partner With <span>Shop24Hours?</span>
        </h2>
        <p className="fq-section-sub">
          Join a brand that treats every franchise partner as a co-owner.
          We bring the brand, systems, and support — you bring the passion.
        </p>
        <div className="fq-highlights-grid">
          {WHY_ITEMS.map(item => (
            <div className="fq-hl-card" key={item.title}>
              <div className="fq-hl-icon">{item.icon}</div>
              <div className="fq-hl-title">{item.title}</div>
              <p className="fq-hl-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  /* ── How It Works ── */
  export function FranchiseProcess() {
    return (
      <section className="fq-process">
        <div className="fq-section-tag">✦ THE PROCESS</div>
        <h2 className="fq-section-title">
          From Enquiry to <span>Grand Opening</span>
        </h2>
        <p className="fq-section-sub">
          We've streamlined the entire onboarding journey. Four steps is all it takes.
        </p>
        <div className="fq-process-steps">
          {STEPS.map(s => (
            <div className="fq-step" key={s.num}>
              <div className="fq-step-num">{s.num}</div>
              <div className="fq-step-title">{s.title}</div>
              <p className="fq-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  /* ── Investment Plans ── */
  export function FranchiseInvestment({ onApply }) {
    return (
      <section className="fq-investment">
        <div className="fq-section-tag">✦ INVESTMENT</div>
        <h2 className="fq-section-title">
          Plans For Every <span>Budget</span>
        </h2>
        <p className="fq-section-sub">
          Choose the format that fits your city, space, and investment capacity.
          All plans include full training and launch support.
        </p>
        <div className="fq-inv-grid">
          {INVESTMENT_PLANS.map(plan => (
            <div
              key={plan.type}
              className={`fq-inv-card${plan.featured ? " featured" : ""}`}
            >
              <div className="fq-inv-header">
                {plan.badge && (
                  <div className="fq-inv-badge">{plan.badge}</div>
                )}
                <div className="fq-inv-type">{plan.type}</div>
                <div className="fq-inv-amount">
                  {plan.amount} <span>investment</span>
                </div>
              </div>
              <div className="fq-inv-body">
                {plan.rows.map(([label, val]) => (
                  <div className="fq-inv-row" key={label}>
                    <span className="fq-inv-row-label">{label}</span>
                    <span className="fq-inv-row-val">{val}</span>
                  </div>
                ))}
                <button
                  className="fq-inv-cta"
                  onClick={() => onApply(plan.type)}
                >
                  Apply for {plan.type.split(" ")[0]} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }