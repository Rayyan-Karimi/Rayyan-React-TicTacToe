import React, { useState } from "react";
import BoardRow from "./BoardRow";
import "./App.css";

export default function Board() {
  const [cross, setCross] = useState(true);
  const [status] = useState("Playing");

  const toggleCross = () => {
    setCross(!cross);
  };

  return (
    <div>
      <div className="text-lg mb-5">Status: {status}</div>
      <BoardRow cross={cross} toggleCross={toggleCross} />
      <BoardRow cross={cross} toggleCross={toggleCross} />
      <BoardRow cross={cross} toggleCross={toggleCross} />
      <button className="w-32 h-14 mt-5 bg-slate-400 hover:bg-slate-500 border-none rounded-lg">
        RESET
      </button>
    </div>
  );
}
