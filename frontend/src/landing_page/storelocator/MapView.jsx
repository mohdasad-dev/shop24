export default function MapView({ stores, selectedId, onSelect, onClose, className = "" }) {
  const selected = stores.find(s => s.id === selectedId);

  /* Position popup: flip left/up when too close to edge */
  const getPopupPos = (pin) => {
    let left = pin.x + 2;
    let top  = pin.y - 2;
    if (left > 55) left = pin.x - 32;
    if (top  > 60) top  = pin.y - 40;
    return { left: `${left}%`, top: `${top}%` };
  };

  return (
    <div className={`sl-map-area${className ? " " + className : ""}`}>

      {/* ── Decorative SVG map ── */}
      <svg
        className="map-svg"
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="900" height="600" fill="#dce8dc" />

        {/* Grid */}
        {[100,200,300,400,500].map(y => (
          <line key={`h${y}`} x1="0" y1={y} x2="900" y2={y} stroke="rgba(0,60,0,.06)" strokeWidth="1" />
        ))}
        {[150,300,450,600,750].map(x => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="600" stroke="rgba(0,60,0,.06)" strokeWidth="1" />
        ))}

        {/* Parks */}
        <rect x="55"  y="330" width="110" height="80"  rx="12" fill="rgba(93,184,93,.2)" />
        <rect x="640" y="70"  width="90"  height="120" rx="12" fill="rgba(93,184,93,.2)" />
        <rect x="395" y="440" width="130" height="70"  rx="12" fill="rgba(93,184,93,.2)" />

        {/* Water */}
        <ellipse cx="790" cy="460" rx="70" ry="40" fill="rgba(100,160,200,.18)" />

        {/* City blocks */}
        {[
          [130,60,70,50],[220,60,80,50],[320,60,65,50],
          [130,140,80,55],[230,140,60,55],[310,140,70,55],
          [420,60,90,80],[530,60,70,50],[420,165,60,60],
          [500,165,80,60],[600,165,65,85],[680,165,80,50],
          [130,265,90,60],[240,265,70,60],[330,265,80,60],
          [420,265,65,60],[500,265,90,60],[610,265,70,60],
          [700,265,80,60],[130,360,65,80],[210,360,90,80],
          [320,380,60,55],[400,340,70,80],[490,360,80,60],
          [590,350,60,70],[670,340,80,80],
        ].map(([x,y,w,h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="5" fill="rgba(255,255,255,.28)" />
        ))}

        {/* Major roads */}
        <line x1="0" y1="115" x2="900" y2="115" stroke="rgba(255,255,255,.85)" strokeWidth="5" />
        <line x1="0" y1="225" x2="900" y2="225" stroke="rgba(255,255,255,.85)" strokeWidth="4" />
        <line x1="0" y1="340" x2="900" y2="340" stroke="rgba(255,255,255,.85)" strokeWidth="5" />
        <line x1="0" y1="470" x2="900" y2="470" stroke="rgba(255,255,255,.7)"  strokeWidth="3" />
        <line x1="150" y1="0" x2="150" y2="600" stroke="rgba(255,255,255,.85)" strokeWidth="4" />
        <line x1="300" y1="0" x2="300" y2="600" stroke="rgba(255,255,255,.85)" strokeWidth="5" />
        <line x1="460" y1="0" x2="460" y2="600" stroke="rgba(255,255,255,.7)"  strokeWidth="3" />
        <line x1="620" y1="0" x2="620" y2="600" stroke="rgba(255,255,255,.85)" strokeWidth="4" />
        <line x1="780" y1="0" x2="780" y2="600" stroke="rgba(255,255,255,.7)"  strokeWidth="3" />

        {/* Minor roads */}
        {[180,280,415].map(y => (
          <line key={`mr${y}`} x1="0" y1={y} x2="900" y2={y} stroke="rgba(255,255,255,.5)" strokeWidth="1.5" />
        ))}
        {[220,380,540,700].map(x => (
          <line key={`mc${x}`} x1={x} y1="0" x2={x} y2="600" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" />
        ))}
        <line x1="0"   y1="600" x2="400" y2="0"   stroke="rgba(255,255,255,.5)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="500" y1="600" x2="900" y2="100" stroke="rgba(255,255,255,.4)" strokeWidth="2"   strokeLinecap="round" />
      </svg>

      {/* ── Pin markers ── */}
      {stores.map(s => {
        const color = s.status === "closed"
          ? "#888"
          : s.tags.includes("24h") ? "#b8900a" : "#2a6b2a";
        return (
          <div
            key={s.id}
            className={`map-pin-wrap${selectedId === s.id ? " selected-pin" : ""}`}
            style={{ left: `${s.pin.x}%`, top: `${s.pin.y}%` }}
            onClick={() => onSelect(s.id)}
          >
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 0C7.16 0 0 7.16 0 16c0 10.8 16 24 16 24S32 26.8 32 16C32 7.16 24.84 0 16 0z"
                fill={color}
              />
              <circle cx="16" cy="16" r="8" fill="white" opacity=".9" />
              <text
                x="16" y="20"
                textAnchor="middle"
                fontSize="7.5"
                fill={color}
                fontWeight="800"
                fontFamily="Syne,sans-serif"
              >
                24H
              </text>
            </svg>
            <div className="pin-lbl">{s.area}</div>
          </div>
        );
      })}

      {/* ── Map controls ── */}
      <div className="map-ctrls">
        {["＋", "－", "📍"].map(c => (
          <button key={c} className="map-ctrl-btn">{c}</button>
        ))}
      </div>

      {/* ── Legend ── */}
      <div className="map-legend">
        <div className="legend-title">Legend</div>
        {[
          ["#2a6b2a", "Open Store"],
          ["#b8900a", "24-Hour Store"],
          ["#888",    "Closed"],
        ].map(([col, lbl]) => (
          <div className="legend-row" key={lbl}>
            <div className="legend-dot" style={{ background: col }} />
            {lbl}
          </div>
        ))}
      </div>

      {/* ── Store popup ── */}
      {selected && (
        <div className="map-popup" style={getPopupPos(selected.pin)}>
          <button className="popup-close" onClick={onClose}>✕</button>

          <div className="popup-hdr">
            <div className="popup-icon">🏪</div>
            <div>
              <div className="popup-title">{selected.name}</div>
              <div className="popup-addr-txt">{selected.addr}</div>
            </div>
          </div>

          <div className="popup-grid">
            {[
              ["Status",   selected.status === "open" ? "🟢 Open" : "🔴 Closed"],
              ["Distance", selected.dist],
              ["Hours",    selected.hours],
              ["Delivery", "₹0 Free"],
            ].map(([label, val]) => (
              <div className="pinfo-chip" key={label}>
                <div className="pinfo-lbl">{label}</div>
                <div className="pinfo-val">{val}</div>
              </div>
            ))}
          </div>

          <div className="popup-btns">
            <button
              className="popup-btn prim"
              onClick={() => alert(`Ordering from ${selected.name}!`)}
            >
              Order Now
            </button>
            <button className="popup-btn sec">Directions</button>
          </div>
        </div>
      )}
    </div>
  );
}