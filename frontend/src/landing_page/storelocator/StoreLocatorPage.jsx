import { useState, useMemo } from "react";
import { STORES } from "./storeData";
import StoreList from "./StoreList";
import MapView from "./MapView";
import SearchFilter from "./SearchFilter";
import "./storeLocator.css";

/* ── Hero Banner ── */
function HeroBanner() {
  return (
    <section className="sl-hero">
      <div className="hero-pill">
        <span className="hero-pill-dot" />
        📍 Open 24 / 7 — Always Near You
      </div>
      <h1>
        Find Your <em>Nearest</em><br />Shop24Hours
      </h1>
      <p>
        50+ stores across India — hot food, fresh groceries,
        and daily essentials always within reach.
      </p>
      <div className="hero-stats">
        {[
          ["10+", "Total Stores"],
          ["2",   "Cities"],
          ["24/7","Always Open"],
          ["₹0",  "Delivery Fee"],
        ].map(([num, lbl]) => (
          <div key={lbl}>
            <div className="hero-stat-num">{num}</div>
            <div className="hero-stat-lbl">{lbl}</div>
          </div>
        ))}
      </div>

      {/* Floating info cards */}
      <div className="hero-floats">
        {[
          ["🛵", "Free Delivery",   "On every order"],
          ["⏱️", "30 min Delivery", "All stores"],
          ["📲", "Order Online",    "App & Website"],
        ].map(([icon, title, sub]) => (
          <div className="hero-float-card" key={title}>
            <span style={{ fontSize: "1.3rem" }}>{icon}</span>
            <div>
              <div className="hfc-title">{title}</div>
              <div className="hfc-sub">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Main Page ── */
export default function StoreLocatorPage() {
  const [query,      setQuery]      = useState("");
  const [filter,     setFilter]     = useState("all");
  const [activeCity, setActiveCity] = useState("All Cities");
  const [selectedId, setSelectedId] = useState(null);
  const [mobileView, setMobileView] = useState("list"); // "list" | "map"

  /* Filter logic */
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return STORES.filter(s => {
      const matchQuery =
        !q ||
        [s.name, s.addr, s.city, s.area].some(v =>
          v.toLowerCase().includes(q)
        );
      const matchFilter =
        filter === "all" ||
        (filter === "open" && s.status === "open") ||
        (filter === "24h"  && s.tags.includes("24h")) ||
        (filter === "new"  && s.tags.includes("new"));
      const matchCity =
        activeCity === "All Cities" || s.city === activeCity;

      return matchQuery && matchFilter && matchCity;
    });
  }, [query, filter, activeCity]);

  /* Select a store → highlight card + pin, switch to list on mobile */
  const handleSelect = (id) => {
    setSelectedId(prev => (prev === id ? null : id));
    setTimeout(() => {
      const el = document.getElementById(`scard-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 60);
  };

  /* Select from map → switch to list view on mobile to show card */
  const handleMapSelect = (id) => {
    handleSelect(id);
  };

  /* Geolocation */
  const handleLocate = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => alert("📍 Location found! Showing nearest stores."),
      () => alert("Location access denied. Please search manually.")
    );
  };

  return (
    <div>
      {/* Hero */}
      <HeroBanner />

      {/* Search + City tabs */}
      <SearchFilter
        query={query}           setQuery={setQuery}
        filter={filter}         setFilter={setFilter}
        activeCity={activeCity} setActiveCity={setActiveCity}
        onLocate={handleLocate}
      />

      {/* ── Mobile List / Map toggle (hidden on desktop via CSS) ── */}
      <div className="sl-view-toggle">
        <div className="view-toggle-inner">
          <button
            className={`view-toggle-btn${mobileView === "list" ? " active" : ""}`}
            onClick={() => setMobileView("list")}
          >
            ☰ List ({filtered.length})
          </button>
          <button
            className={`view-toggle-btn${mobileView === "map" ? " active" : ""}`}
            onClick={() => setMobileView("map")}
          >
            🗺️ Map
          </button>
        </div>
      </div>

      {/* Store list + Map */}
      <div className="sl-main">
        <StoreList
          stores={filtered}
          selectedId={selectedId}
          onSelect={handleSelect}
          className={mobileView === "map" ? "hidden" : ""}
        />
        <MapView
          stores={filtered}
          selectedId={selectedId}
          onSelect={handleMapSelect}
          onClose={() => setSelectedId(null)}
          className={mobileView === "list" ? "hidden" : ""}
        />
      </div>
    </div>
  );
}