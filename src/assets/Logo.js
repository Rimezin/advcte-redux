import React from "react";
import "./Logo.css";

export default function Logo(props) {
  const { logoClass } = props;

  return (
    <div
      id="advcte-header-logo"
      className={`w-80 center transition-25 ${logoClass ? logoClass : ""}`}
    >
      <span className="advcte-logo">Advcte</span>
    </div>
  );
}
