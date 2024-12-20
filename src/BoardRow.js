import React from "react";
import Square from "./Square";
import "./App.css";

export default function BoardRow({ row, rowIndex, handleSquareClick, isGameOver }) {
  return (
    <div className="flex bg-yellow-400 w-min h-min board-row">
      {row.map((value, colIndex) => (
        <Square
          key={colIndex}
          rowIndex={rowIndex}
          colIndex={colIndex}
          value={value}
          handleSquareClick={handleSquareClick}
          isGameOver={isGameOver}
        />
      ))}
    </div>
  );
}
