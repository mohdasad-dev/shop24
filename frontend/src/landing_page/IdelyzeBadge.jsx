// IdelyzeBadge.jsx
import React from "react";
import "./IdelyzeBadge.css";

function IdelyzeBadge() {
  return (
    <div className="idelyze-badge d-flex align-items-center gap-2">
      
      <span className="idelyze-label">
        Designed & Developed by
      </span>

      <a
        href="https://www.idelyze.com/?ref=shop24hours"
        target="_blank"
        rel="noopener noreferrer"
        className="idelyze-link d-flex align-items-center gap-2"
        title="Visit Idelyze Portfolio"
      >
        <span className="idelyze-dot"></span>

        <span className="idelyze-name">Idelyze</span>

        {/* external link icon */}
        <i className="bi bi-arrow-up-right idelyze-icon"></i>
      </a>

    </div>
  );
}

export default IdelyzeBadge;