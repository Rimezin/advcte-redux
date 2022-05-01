import React from "react";

// Birds example from https://scalora.net/
// Implemented into React by Rimezin

export default function Birds(props) {
  const { session } = props;

  const birds = ["one", "two", "three", "four"];

  let renderBirds = birds.map((bird) => {
    return (
      <div
        className={`bird-container ${
          session.experience.darkMode ? "" : "filter-blue"
        } bird-container--${bird}`}
      >
        <div className={`bird bird--${bird}`}></div>
      </div>
    );
  });

  return (
    <div className="birds-container d-none d-xxl-block">{renderBirds}</div>
  );
}
