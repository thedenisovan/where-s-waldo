/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

const GameContext = createContext({
  isGameOn: false,
  setIsGameOn: (_val: boolean) => {},
  currentImage: '',
  setCurrentImage: (_val: string) => {},
  // If coordinates are -1 and -1 then game is not on
  coordinates: [-1, -1],
  setCoordinates: (_coordinates: number[]) => {},
  aliveCharacters: [false, false, false],
  setAliveCharacters: ([...vals]: boolean[]) => {},
});

export default GameContext;
