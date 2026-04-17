import { CITIES } from "./storeData";

const FILTERS = [
  { key: "all",  label: "All Stores", icon: null },
  { key: "open", label: "Open Now",   icon: "🟢" },
  { key: "24h",  label: "24-Hour",    icon: "⏰" },
  { key: "new",  label: "New",        icon: "✨" },
];

export default function SearchFilter({
  query, setQuery,
  filter, setFilter,
  activeCity, setActiveCity,
  onLocate,
}) {
  return (
    <>
      {/* ── Search + Filters ── */}
      <div className="sl-search-bar">
        {/* Search input */}
        <div className="sl-search-wrap">
          <span className="sl-search-ico">🔍</span>
          <input
            type="text"
            placeholder="Search by city, area or pincode…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        {/* Filter buttons */}
        <div className="filt-group">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filt-btn${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.key === "all" && <span className="filt-dot" />}
              {f.icon && <span>{f.icon}</span>}
              {f.label}
            </button>
          ))}
        </div>

        {/* Locate me */}
        <button className="btn-locate" onClick={onLocate}>
          📍 Use My Location
        </button>
      </div>

      {/* ── City Tabs ── */}
      <div className="sl-city-tabs">
        {CITIES.map(c => (
          <button
            key={c}
            className={`city-tab${activeCity === c ? " active" : ""}`}
            onClick={() => setActiveCity(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </>
  );
}