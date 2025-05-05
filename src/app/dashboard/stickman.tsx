// Animated Stickman Example using CSS

import { useEffect, useState } from "react";

const Stickman = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div
      className={`stickman ${animationStarted ? "walking" : ""}`}
      style={{ position: "absolute", bottom: "10%", left: "10%" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="200"
        viewBox="0 0 100 200"
        fill="none"
      >
        <circle cx="50" cy="30" r="20" fill="#000" />
        <line x1="50" y1="50" x2="50" y2="100" stroke="#000" strokeWidth="5" />
        <line x1="50" y1="100" x2="35" y2="150" stroke="#000" strokeWidth="5" />
        <line x1="50" y1="100" x2="65" y2="150" stroke="#000" strokeWidth="5" />
        <line x1="50" y1="50" x2="35" y2="75" stroke="#000" strokeWidth="5" />
        <line x1="50" y1="50" x2="65" y2="75" stroke="#000" strokeWidth="5" />
      </svg>
    </div>
  );
};

export default Stickman;
