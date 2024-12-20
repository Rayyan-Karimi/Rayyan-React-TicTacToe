import React, { useState } from "react";
import "./App.css";

export default function Square({ cross, toggleCross }) {
  const [boxValue, setBoxValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setBoxValue(cross ? "X" : "O");
    setIsClicked(true);
    toggleCross();
  };

  return (
    <button
      className={`square bg-white hover:bg-slate-200 w-20 h-20 border border-black ${
        isClicked && "cursor-not-allowed"
      }`}
      onClick={handleClick}
      disabled={isClicked}
    >
      {boxValue}
    </button>
  );
}
