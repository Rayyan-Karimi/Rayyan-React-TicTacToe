import React, { useEffect, useState } from "react";
import BoardRow from "./BoardRow";
import "./App.css";

export default function Board() {
  const [cross, setCross] = useState(true);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [status, setStatus] = useState("Playing");
  const [winner, setWinner] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [count, setCount] = useState(0);

  const resetBoard = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCross(true);
    setStatus("Playing");
    setWinner("");
    setCount(0);
    setIsGameOver(false);
  };

  const handleSquareClick = async (rowIndex, colIndex) => {
    if (winner || board[rowIndex][colIndex]) {
      return;
    }

    if (count === 9 || winner) setIsGameOver(true);
    const newBoard = [...board];
    newBoard[rowIndex][colIndex] = cross ? "X" : "O";
    setBoard(newBoard);

    const checkWinner = calculateWinner(newBoard); // check with newBoard <-> board
    if (checkWinner) {
      setWinner(checkWinner);
      setStatus(cross ? "Player X Wins." : "Player O Wins.");
    } else {
      setCross(!cross);
    }

    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 9 && !winner) {
      setStatus("Tie.");
      setIsGameOver(true);
    }
  }, [count, winner]);

  return (
    <div>
      <div className="text-lg mb-5">Status: {status}</div>
      {board.map((row, rowIndex) => (
        <BoardRow
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          handleSquareClick={handleSquareClick}
          isGameOver={isGameOver}
        />
      ))}
      <button
        onClick={resetBoard}
        className="w-32 h-14 mt-5 bg-slate-400 hover:bg-slate-500 border-none rounded-lg"
      >
        RESET
      </button>
    </div>
  );
}

function calculateWinner(board) {
  const winningLines = [
    // Rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // Columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // Diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (const line of winningLines) {
    const [a, b, c] = line;
    if (
      board[a[0]][a[1]] &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return board[a[0]][a[1]]; // Return "X" or "O"
    }
  }
  return ""; // No winner
}
