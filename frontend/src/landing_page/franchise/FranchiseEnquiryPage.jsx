import { useState } from "react";
import FranchiseForm from "./FranchiseForm";
import {
  FranchiseHighlights,
  FranchiseProcess,
  FranchiseInvestment,
} from "./FranchiseHighlights";
import "./franchise.css";

/* ── Hero Banner ── */
function FranchiseHero({ onApply }) {
  const BENEFITS = [
    { icon: "📈", title: "₹8L – ₹50L",       sub: "Investment range for all formats" },
    { icon: "🏪", title: "50+ Outlets",        sub: "Across 8 cities and growing" },
    { icon: "⏱️", title: "60-Day Launch",      sub: "From sign-off to opening day" },
    { icon: "🛡️", title: "Full Brand Support", sub: "Training, tech, marketing — included" },
  ];

  return (
    <section className="fq-hero">
      <div className="fq-hero-left">
        <div className="fq-hero-pill">
          <span className="fq-hero-pill-dot" />
          🤝 BECOME A PARTNER
        </div>
        <h1>
          Own a <em>Shop24Hours</em><br />
          Franchise Today
        </h1>
        <p className="fq-hero-desc">
          Join one of India's fastest-growing 24/7 food & essentials brands.
          We give you the brand, systems, and support — you bring the ambition.
        </p>

        {/* Stats row */}
        <div className="fq-hero-stats">
          {[
            ["50+", "Active Outlets"],
            ["8",   "Cities"],
            ["24/7","Operations"],
            ["92%", "Renewal Rate"],
          ].map(([n, l]) => (
            <div className="fq-stat" key={l}>
              <div className="fq-stat-num">{n}</div>
              <div className="fq-stat-lbl">{l}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          <button
            className="fq-btn-next"
            style={{ borderRadius: 10 }}
            onClick={onApply}
          >
            Apply Now →
          </button>
          <a
            href="#highlights"
            className="fq-btn-back"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
          >
            Learn More ↓
          </a>
        </div>
      </div>

      {/* Floating benefits card */}
      <div className="fq-hero-card">
        <h3>🌟 What You Get</h3>
        {BENEFITS.map(b => (
          <div className="fq-benefit-row" key={b.title}>
            <div className="fq-benefit-icon">{b.icon}</div>
            <div>
              <div className="fq-benefit-title">{b.title}</div>
              <div className="fq-benefit-sub">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── FAQ Section ── */
const FAQS = [
  {
    q: "What is the total investment required?",
    a: "Depending on the outlet format, investment ranges from ₹8L (Kiosk) to ₹50L (Flagship). This includes franchise fee, equipment, interior, and initial stock.",
  },
  {
    q: "Do I need prior food business experience?",
    a: "No prior experience is necessary. We provide end-to-end training covering operations, kitchen management, staff handling, and customer service before you launch.",
  },
  {
    q: "Is the location fixed by Shop24Hours or by me?",
    a: "You can suggest a location and our real estate team will evaluate it. Alternatively, we can assist in identifying suitable locations in your target city.",
  },
  {
    q: "What is the franchise agreement period?",
    a: "The standard agreement is for 5 years with an option to renew. 92% of our franchise partners renew at the end of their first term.",
  },
  {
    q: "How long does it take to go live after signing?",
    a: "Our average from agreement signing to opening day is 45–60 days, depending on the outlet format and readiness of the location.",
  },
  {
    q: "What royalty percentage does Shop24Hours charge?",
    a: "Royalty ranges from 4% to 6% of monthly revenue depending on the outlet format. Kiosks pay 6%, Standard 5%, and Flagship stores 4%.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(prev => prev === i ? null : i);

  return (
    <section className="fq-faq">
      <div className="fq-section-tag">✦ FAQ</div>
      <h2 className="fq-section-title">
        Common <span>Questions</span>
      </h2>
      <p className="fq-section-sub">
        Everything you need to know before taking the next step.
      </p>
      <div className="fq-faq-grid">
        {FAQS.map((faq, i) => (
          <div className="fq-faq-item" key={i}>
            <div
              className={`fq-faq-q${open === i ? " open" : ""}`}
              onClick={() => toggle(i)}
            >
              {faq.q}
              <span className="fq-faq-chevron">▼</span>
            </div>
            <div className={`fq-faq-a${open === i ? " open" : ""}`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Enquiry Form Section ── */
function EnquirySection({ preselectedType }) {
  return (
    <section className="fq-form-section" id="enquiry">
      <div className="fq-section-tag">✦ GET STARTED</div>
      <h2 className="fq-section-title">
        Submit Your <span>Enquiry</span>
      </h2>
      <p className="fq-section-sub">
        Ready to take the first step? Fill in the form below and our
        franchise team will connect with you within 2 business days.
      </p>

      <div className="fq-form-layout">
        {/* Left: Info + Contact */}
        <div className="fq-form-info">
          <h2 className="fq-section-title" style={{ fontSize: "1.4rem", marginBottom: 8 }}>
            Let's Build Something<br /><span>Together</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginBottom: 20 }}>
            Whether you're a first-time entrepreneur or a seasoned business
            owner, Shop24Hours has a format for you. Our franchise team
            is here to guide you at every step.
          </p>

          {/* Testimonial */}
          <div style={{
            background: "var(--white)", border: "1.5px solid var(--border)",
            borderRadius: "var(--rad)", padding: "20px 22px", marginBottom: 20
          }}>
            <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>⭐⭐⭐⭐⭐</div>
            <p style={{ fontSize: ".82rem", color: "var(--txt)", lineHeight: 1.7, marginBottom: 10 }}>
              "I launched my Hitech City outlet in just 52 days. The support
              from the Shop24Hours team was outstanding — from finding the
              location to training my staff."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--g-dark), var(--g-acc))",
                display: "grid", placeItems: "center", color: "#fff",
                fontFamily: "var(--font-h)", fontWeight: 700, fontSize: ".9rem"
              }}>R</div>
              <div>
                <div style={{ fontSize: ".8rem", fontWeight: 700, fontFamily: "var(--font-h)" }}>Ravi Shankar</div>
                <div style={{ fontSize: ".7rem", color: "var(--muted)" }}>Franchise Partner, Hyderabad</div>
              </div>
            </div>
          </div>

          {/* Contact block */}
          <div className="fq-contact-block">
            <h4>📞 Get in Touch Directly</h4>
            {[
              { icon: "📞", label: "Phone", val: "+91 98103 77747" },
              { icon: "✉️", label: "Email", val: "franchise@shop24hours.com" },
              { icon: "🏢", label: "Office", val: "Banjara Hills, Hyderabad – 500034" },
              { icon: "⏰", label: "Hours", val: "Mon–Sat, 10AM – 6PM" },
            ].map(c => (
              <div className="fq-contact-row" key={c.label}>
                <div className="fq-contact-icon">{c.icon}</div>
                <div>
                  <div className="fq-contact-label">{c.label}</div>
                  <div className="fq-contact-val">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Multi-step form */}
        <FranchiseForm preselectedType={preselectedType} />
      </div>
    </section>
  );
}

/* ════ ROOT PAGE ════ */
export default function FranchiseEnquiryPage() {
  const [preselected, setPreselected] = useState("");

  const scrollToForm = (type = "") => {
    setPreselected(type);
    setTimeout(() => {
      document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <div>
      <FranchiseHero onApply={() => scrollToForm()} />

      <span id="highlights" />
      <FranchiseHighlights />
      <FranchiseProcess />
      <FranchiseInvestment onApply={type => scrollToForm(type)} />
      <EnquirySection preselectedType={preselected} />
      <FaqSection />
    </div>
  );
}