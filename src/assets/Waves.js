import React from "react";
import "./Waves.css";
//Simple CSS Waves
// Original by Goodkatz @ https://codepen.io/goodkatz/pen/LYPGxQz
// Adapted for React by Rimezin

export default function Waves(props) {
  const { session } = props;

  return (
    <div className="waves-container" style={{ zIndex: "0" }}>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="waves-parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill={session.experience.darkMode ? "#3b52ad" : "#0095ff"}
            opacity="70%"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill={session.experience.darkMode ? "#8882dd" : "#cbf2ff"}
            opacity="50%"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill={session.experience.darkMode ? "#3b52ad" : "#0095ff"}
            opacity="30%"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill={session.experience.darkMode ? "#3e3c7e" : "#00bfff"}
          />
        </g>
      </svg>
    </div>
  );
}
