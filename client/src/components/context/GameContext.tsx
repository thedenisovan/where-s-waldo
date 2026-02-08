/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

const GameContext = createContext({
  isGameOn: false,

  setIsGameOn: (_val: boolean) => {},
  currentImage: '',
  setCurrentImage: (_val: string) => {},
});

export default GameContext;
