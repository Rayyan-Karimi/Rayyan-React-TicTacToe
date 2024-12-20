import React from "react";
import "./App.css";

export default function Square({
  rowIndex,
  colIndex,
  value,
  handleSquareClick,
  isGameOver,
}) {
  return (
    <button
      className={`square bg-white hover:bg-slate-200 w-20 h-20 border border-black ${
        (isGameOver || value) && "hover:cursor-not-allowed"
      }`}
      onClick={() => handleSquareClick(rowIndex, colIndex)}
      disabled={isGameOver || value}
    >
      {value}
    </button>
  );
}
