import React from "react";
import "./Birds.css";

// Birds example from https://scalora.net/
// Implemented into React by Rimezin

export default function Birds(props) {
  const { session } = props;

  const birds = ["one", "two", "three", "four"];

  let renderBirds = birds.map((bird) => {
    return (
      <div
        key={`bird-${bird}`}
        className={`bird-container ${
          session.darkMode ? "" : "filter-blue"
        } bird-container--${bird}`}
      >
        <div className={`bird bird--${bird}`}></div>
      </div>
    );
  });

  return (
    <div className="birds-container d-none d-xxl-block" style={{ zIndex: "5" }}>
      {renderBirds}
    </div>
  );
}
