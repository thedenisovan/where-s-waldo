import { createContext } from 'react';

const GameContext = createContext({
  isGameOn: false,
  setIsGameOn: (val: boolean) => {
    void val;
  },
});

export default GameContext;
