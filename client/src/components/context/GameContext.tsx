/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

export type Attempt = {
  name: string;
  attemptDuration: string; // assuming this is the "time"
  clicks: number;
  score: number;
  attemptDate: string;
  levelName: string;
};

const GameContext = createContext({
  isGameOn: false,
  setIsGameOn: (_val: boolean) => {},
  currentImage: '',
  setCurrentImage: (_val: string) => {},
  // If coordinates are -1 and -1 then game is not on
  coordinates: [-1, -1],
  setCoordinates: (_coordinates: number[]) => {},
  aliveCharacters: [false, false, false],
  setAliveCharacters: (_vals: boolean[]) => {},
  clicks: 0,
  setClicks: (_val: number) => {},
  resetGame: () => {},
  isGameWon: false,
  setGameWon: (_val: boolean) => {},
  leaderboards: [
    {
      name: '',
      attemptDuration: '',
      clicks: 0,
      score: 0,
      attemptDate: '',
      levelName: '',
    },
  ],
  setLeaderBoards: (_attempts: Attempt[]) => {},
});

export default GameContext;
