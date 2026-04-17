import ContactForm from "./ContactForm";
import "./contact.css";

/* ── Hero ── */
function ContactHero() {
  return (
    <section className="ct-hero">
      <div className="ct-hero-inner">
        <div className="ct-hero-pill">
          <span className="ct-pill-dot" />
          💬 WE'RE HERE FOR YOU
        </div>
        <h1>Get In <em>Touch</em><br />With Us</h1>
        <p>
          Questions, feedback, order issues, or business inquiries — our team
          responds fast. Always fresh, always available, 24/7.
        </p>
        <div className="ct-hero-chips">
          {[
            ["⚡", "Avg. Response", "Under 2 hours"],
            ["📞", "Call Support",  "9AM – 9PM daily"],
            ["💬", "Live Chat",     "24/7 available"],
          ].map(([ic, lbl, val]) => (
            <div className="ct-hero-chip" key={lbl}>
              <span style={{ fontSize: "1.2rem" }}>{ic}</span>
              <div>
                <div style={{ fontSize: ".68rem", color: "rgba(255,255,255,.45)", letterSpacing: ".06em" }}>{lbl}</div>
                <span>{val}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact Cards ── */
function ContactCards() {
  const cards = [
    {
      icon: "📞",
      label: "PHONE",
      value: "+91 98103 77747",
      sub: "Mon–Sat, 9AM to 9PM",
      link: "tel:+919810377747",
      linkText: "Call Now →",
    },
    {
      icon: "✉️",
      label: "EMAIL",
      value: "hello@shop24hours.com",
      sub: "We reply within 24 hours",
      link: "mailto:hello@shop24hours.com",
      linkText: "Send Email →",
    },
    {
      icon: "📍",
      label: "HEAD OFFICE",
      value: "Banjara Hills, Hyderabad",
      sub: "Road No. 12, Hyd – 500034",
      link: "#locations",
      linkText: "View Locations →",
    },
    {
      icon: "🕐",
      label: "SUPPORT HOURS",
      value: "24 / 7 Available",
      sub: "Online chat & emergency helpline",
      link: "#form",
      linkText: "Chat Now →",
    },
  ];

  return (
    <section className="ct-cards-strip">
      <div className="ct-cards-grid">
        {cards.map(c => (
          <div className="ct-card" key={c.label}>
            <div className="ct-card-icon">{c.icon}</div>
            <div className="ct-card-label">{c.label}</div>
            <div className="ct-card-value">{c.value}</div>
            <div className="ct-card-sub">{c.sub}</div>
            <a href={c.link} className="ct-card-link">{c.linkText}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Decorative Map SVG ── */
function MiniMap() {
  return (
    <div className="ct-map-box">
      <div className="ct-map-inner">
        <svg className="ct-map-svg" viewBox="0 0 400 220"
          preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" fill="#dce8dc" />
          {/* Grid */}
          {[55,110,165].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(0,60,0,.06)" strokeWidth="1" />)}
          {[80,160,240,320].map(x => <line key={x} x1={x} y1="0" x2={x} y2="220" stroke="rgba(0,60,0,.06)" strokeWidth="1" />)}
          {/* Park */}
          <rect x="20" y="130" width="55" height="50" rx="8" fill="rgba(93,184,93,.22)" />
          <rect x="310" y="20" width="60" height="80" rx="8" fill="rgba(93,184,93,.22)" />
          {/* Blocks */}
          {[[90,20,60,40],[170,20,55,40],[240,20,50,40],[90,80,50,45],[160,80,65,45],[250,80,55,45],[90,145,50,55],[160,150,60,45],[240,145,55,55]].map(([x,y,w,h],i) =>
            <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="rgba(255,255,255,.3)" />
          )}
          {/* Roads */}
          <line x1="0" y1="70"  x2="400" y2="70"  stroke="rgba(255,255,255,.9)" strokeWidth="5" />
          <line x1="0" y1="135" x2="400" y2="135" stroke="rgba(255,255,255,.9)" strokeWidth="4" />
          <line x1="80"  y1="0" x2="80"  y2="220" stroke="rgba(255,255,255,.9)" strokeWidth="4" />
          <line x1="230" y1="0" x2="230" y2="220" stroke="rgba(255,255,255,.9)" strokeWidth="5" />
          <line x1="0" y1="190" x2="400" y2="190" stroke="rgba(255,255,255,.6)" strokeWidth="2.5" />
          <line x1="310" y1="0" x2="310" y2="220" stroke="rgba(255,255,255,.6)" strokeWidth="2.5" />
          {/* Minor roads */}
          {[100,160].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,.45)" strokeWidth="1.5" />)}
          {[145,190,260].map(x => <line key={x} x1={x} y1="0" x2={x} y2="220" stroke="rgba(255,255,255,.45)" strokeWidth="1.5" />)}
          {/* Diagonal */}
          <line x1="0" y1="220" x2="200" y2="0" stroke="rgba(255,255,255,.4)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Bouncing pin */}
        <div className="ct-map-you">
          <svg width="30" height="38" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.16 0 0 7.16 0 16c0 10.8 16 24 16 24S32 26.8 32 16C32 7.16 24.84 0 16 0z" fill="#162e16" />
            <circle cx="16" cy="16" r="8" fill="white" opacity=".9" />
            <text x="16" y="20" textAnchor="middle" fontSize="7" fill="#162e16" fontWeight="800" fontFamily="Syne,sans-serif">HQ</text>
          </svg>
        </div>
      </div>
      <div className="ct-map-footer">
        <div className="ct-map-addr">
          Banjara Hills, Hyderabad
          <span>Road No. 12, Hyd – 500034</span>
        </div>
        <button className="ct-map-dir" onClick={() => window.open("https://maps.google.com", "_blank")}>
          📍 Directions
        </button>
      </div>
    </div>
  );
}

/* ── Business Hours ── */
function BusinessHours() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const hour = now.getHours();

  const isOpen = (dayIdx) => {
    if (dayIdx === 0) return false; // Sunday closed
    return hour >= 9 && hour < 21;
  };

  const hours = [
    { day: "Monday – Friday", time: "9:00 AM – 9:00 PM", days: [1,2,3,4,5] },
    { day: "Saturday",        time: "10:00 AM – 7:00 PM", days: [6] },
    { day: "Sunday",          time: "Closed",              days: [0] },
    { day: "Public Holidays", time: "10:00 AM – 4:00 PM", days: [] },
  ];

  return (
    <div className="ct-hours-box">
      <div className="ct-hours-header">🕐 Support Hours</div>
      {hours.map(h => {
        const open = h.days.includes(day) && isOpen(day) && h.time !== "Closed";
        const today = h.days.includes(day);
        return (
          <div className="ct-hours-row" key={h.day} style={today ? { background: "rgba(93,184,93,.04)" } : {}}>
            <span className="ct-hours-day" style={today ? { fontWeight: 700, color: "var(--g-dark)" } : {}}>
              {h.day}{today ? " (Today)" : ""}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="ct-hours-time">{h.time}</span>
              {today && (
                <span className={`ct-hours-badge ${open ? "ct-badge-open" : "ct-badge-closed"}`}>
                  {open ? "Open" : "Closed"}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Social Links ── */
function SocialLinks() {
  const socials = [
    { icon: "f",  label: "Facebook",  color: "#1877f2", href: "#" },
    { icon: "in", label: "Instagram", color: "#e1306c", href: "#" },
    { icon: "wa", label: "WhatsApp",  color: "#25d366", href: "#" },
    { icon: "yt", label: "YouTube",   color: "#ff0000", href: "#" },
  ];
  return (
    <div className="ct-social-box">
      <div className="ct-social-title">📲 Follow Us</div>
      <div className="ct-socials">
        {socials.map(s => (
          <a key={s.label} href={s.href} className="ct-social-btn">
            <div className="ct-social-icon" style={{ background: s.color + "22", color: s.color }}>
              {s.icon}
            </div>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ── City Locations ── */
function Locations() {
  const cities = [
    {
      city: "Hyderabad",
      icon: "🏙️",
      count: "5 outlets",
      addr: "Road No. 12, Banjara Hills – 500034",
      phone: "+91 98103 77747",
      email: "hyd@shop24hours.com",
    },
    {
      city: "Delhi",
      icon: "🕌",
      count: "2 outlets",
      addr: "Block A, Connaught Place – 110001",
      phone: "+91 98765 11234",
      email: "del@shop24hours.com",
    },
    {
      city: "Mumbai",
      icon: "🌊",
      count: "2 outlets",
      addr: "Linking Rd, Bandra West – 400050",
      phone: "+91 99887 56789",
      email: "mum@shop24hours.com",
    },
    {
      city: "Bangalore",
      icon: "🌿",
      count: "2 outlets",
      addr: "100 Feet Rd, Indiranagar – 560038",
      phone: "+91 80000 45678",
      email: "blr@shop24hours.com",
    },
    {
      city: "Noida",
      icon: "🏗️",
      count: "1 outlet",
      addr: "Atta Market, Sector 18 – 201301",
      phone: "+91 91234 56789",
      email: "noi@shop24hours.com",
    },
    {
      city: "Pune",
      icon: "🎓",
      count: "Coming Soon",
      addr: "FC Road, Deccan – 411004",
      phone: "—",
      email: "pune@shop24hours.com",
    },
  ];

  return (
    <section className="ct-locations" id="locations">
      <div className="ct-section-tag">✦ OUR PRESENCE</div>
      <h2 className="ct-section-title">
        Find Us Across <span>India</span>
      </h2>
      <p className="ct-section-sub">
        Shop24Hours is expanding fast. Find your nearest regional contact below.
      </p>
      <div className="ct-locations-grid">
        {cities.map(c => (
          <div className="ct-loc-card" key={c.city}>
            <div className="ct-loc-header">
              <div className="ct-loc-city-icon">{c.icon}</div>
              <div>
                <div className="ct-loc-city">{c.city}</div>
                <div className="ct-loc-count">{c.count}</div>
              </div>
            </div>
            <div className="ct-loc-body">
              {[
                ["📍", "Address", c.addr],
                ["📞", "Phone",   c.phone],
                ["✉️", "Email",   c.email],
              ].map(([ic, lbl, val]) => (
                <div className="ct-loc-detail" key={lbl}>
                  <span>{ic}</span>
                  <div>
                    <strong>{lbl}</strong>
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════ ROOT PAGE ════ */
export default function ContactUsPage() {
  return (
    <div>
      <ContactHero />
      <ContactCards />

      {/* Main: Form + Sidebar */}
      <section className="ct-main" id="form" style={{ paddingTop: 48 }}>
        {/* Left — Contact Form */}
        <ContactForm />

        {/* Right — Sidebar */}
        <div className="ct-sidebar">
          <MiniMap />
          <BusinessHours />
          <SocialLinks />
        </div>
      </section>

      <Locations />
    </div>
  );
}