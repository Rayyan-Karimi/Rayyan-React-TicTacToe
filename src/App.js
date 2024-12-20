import "./App.css";
import Board from "./Board.js";
import React from "react";

function Hero() {
  return (
    <div className="py-6 text-center shadow-lg w-full text-xl font-semibold">
      <h2>Grid Lights</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App flex justify-center items-center min-w-screen min-h-screen">
      <Hero />
      <Board />
    </div>
  );
}

export default App;
