"use client";

import { useEffect, useRef, useState } from "react";

const ROWS = 6;
const COLS = 7;
type Cell = 0 | 1 | 2;
type Board = Cell[][];

const emptyBoard = (): Board =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(0) as Cell[]);

function dropPiece(board: Board, col: number, player: Cell): Board | null {
  for (let r = ROWS - 1; r >= 0; r--) {
    if (board[r][col] === 0) {
      const next = board.map((row) => [...row]) as Board;
      next[r][col] = player;
      return next;
    }
  }
  return null;
}

function checkWin(board: Board, player: Cell): boolean {
  const dirs = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c] !== player) continue;
      for (const [dr, dc] of dirs) {
        let count = 0;
        for (let k = 0; k < 4; k++) {
          const nr = r + dr * k;
          const nc = c + dc * k;
          if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) break;
          if (board[nr][nc] === player) count++;
          else break;
        }
        if (count === 4) return true;
      }
    }
  }
  return false;
}

function isFull(board: Board): boolean {
  return board[0].every((c) => c !== 0);
}

function pickMove(board: Board, player: Cell): number {
  const opp: Cell = player === 1 ? 2 : 1;
  const cols = Array.from({ length: COLS }, (_, i) => i).filter((c) => board[0][c] === 0);

  for (const c of cols) {
    const test = dropPiece(board, c, player);
    if (test && checkWin(test, player)) return c;
  }
  for (const c of cols) {
    const test = dropPiece(board, c, opp);
    if (test && checkWin(test, opp)) return c;
  }
  const center = cols.includes(3) ? 3 : null;
  if (center !== null && Math.random() < 0.5) return center;
  return cols[Math.floor(Math.random() * cols.length)];
}

export default function Connect4() {
  const [board, setBoard] = useState<Board>(emptyBoard());
  const [turn, setTurn] = useState<Cell>(1);
  const [winner, setWinner] = useState<Cell | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (winner !== null || isFull(board)) {
      timeoutRef.current = setTimeout(() => {
        setBoard(emptyBoard());
        setTurn(1);
        setWinner(null);
      }, 2500);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    timeoutRef.current = setTimeout(() => {
      const col = pickMove(board, turn);
      const next = dropPiece(board, col, turn);
      if (!next) return;
      if (checkWin(next, turn)) setWinner(turn);
      setBoard(next);
      setTurn(turn === 1 ? 2 : 1);
    }, 900);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [board, turn, winner]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-md border border-line bg-bg/50 p-2 backdrop-blur-sm">
        <div className="grid grid-cols-7 gap-1">
          {board.flat().map((cell, i) => (
            <div
              key={i}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-line/60 md:h-6 md:w-6"
            >
              {cell !== 0 && (
                <div
                  className={`h-3.5 w-3.5 rounded-full transition-all md:h-4 md:w-4 ${
                    cell === 1 ? "bg-accent" : "bg-ink/70"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="font-mono text-[9px] tracking-widest text-dim">
        {winner ? `P${winner} WINS` : "AI VS AI · LIVE"}
      </p>
    </div>
  );
}
