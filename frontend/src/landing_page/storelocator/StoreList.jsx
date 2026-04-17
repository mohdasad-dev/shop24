export default function StoreList({ stores, selectedId, onSelect, className = "" }) {
  /* Group stores by city */
  const grouped = stores.reduce((acc, s) => {
    acc[s.city] = acc[s.city] || [];
    acc[s.city].push(s);
    return acc;
  }, {});

  return (
    <div className={`store-panel${className ? " " + className : ""}`}>
      {/* Header */}
      <div className="panel-hdr">
        <h6>Nearby Stores</h6>
        <span className="store-count-badge">{stores.length} Stores</span>
      </div>

      {/* Empty state */}
      {stores.length === 0 ? (
        <div className="no-results">
          🗺️ No stores found.<br />Try a different city or search.
        </div>
      ) : (
        Object.entries(grouped).map(([city, list]) => (
          <div key={city}>
            {/* City label */}
            <div className="city-group-lbl">{city}</div>

            {list.map(store => (
              <StoreCard
                key={store.id}
                store={store}
                selected={selectedId === store.id}
                onSelect={onSelect}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
}

/* ── Individual Store Card ── */
function StoreCard({ store, selected, onSelect }) {
  return (
    <div
      id={`scard-${store.id}`}
      className={`sl-store-card${selected ? " selected" : ""}`}
      onClick={() => onSelect(store.id)}
    >
      {/* Icon */}
      <div className={`store-pin-icon${store.status === "closed" ? " closed" : ""}`}>
        🏪
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        <div className="store-name">{store.name}</div>
        <div className="store-addr">{store.addr}</div>

        {/* Badges */}
        <div className="store-meta">
          {store.status === "open"
            ? <span className="st-badge st-badge-open">🟢 Open</span>
            : <span className="st-badge st-badge-closed">🔴 Closed</span>}
          {store.tags.includes("24h") && (
            <span className="st-badge st-badge-24">⏰ 24H</span>
          )}
          {store.tags.includes("new") && (
            <span className="st-badge st-badge-new">✨ New</span>
          )}
          <span className="st-badge-dist">📍 {store.dist}</span>
        </div>

        {/* Action buttons */}
        <div className="card-actions">
          <button
            className="mini-btn primary"
            onClick={e => { e.stopPropagation(); alert(`Ordering from ${store.name}!`); }}
          >
            🛒 Order
          </button>
          <button
            className="mini-btn"
            onClick={e => e.stopPropagation()}
          >
            🗺️ Directions
          </button>
          <button
            className="mini-btn"
            onClick={e => e.stopPropagation()}
          >
            📞 Call
          </button>
        </div>
      </div>
    </div>
  );
}