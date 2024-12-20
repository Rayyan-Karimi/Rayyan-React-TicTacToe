import React from "react";
import Square from "./Square";
import "./App.css";

export default function BoardRow({ cross, toggleCross }) {
  return (
    <div className="flex bg-yellow-400 w-min h-min board-row">
      <Square cross={cross} toggleCross={toggleCross} />
      <Square cross={cross} toggleCross={toggleCross} />
      <Square cross={cross} toggleCross={toggleCross} />
    </div>
  );
}
