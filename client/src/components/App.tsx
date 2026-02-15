import Header from './Header';
import Artwork from './Artwork';
import RulesCard from './RulesCard';
import LeaderBoards from './LeaderBoards';
import { useState } from 'react';
import GameContext from './context/GameContext';

export default function App() {
  const [currentImage, setCurrentImage] = useState<string>('Pirates');
  const [isGameOn, setIsGameOn] = useState<boolean>(false);
  // Coordinates of click are measured in percentage so when display size changes they stay the same
  const [coordinates, setCoordinates] = useState<number[]>([-1, -1]);
  // Array which stores info about which characters are still alive in game to display it on screen
  const [aliveCharacters, setAliveCharacters] = useState<boolean[]>([
    true,
    true,
    true,
  ]);
  const [clicks, setClicks] = useState<number>(0);

  const resetGame = () => {
    setIsGameOn(false);
    setCoordinates([-1, -1]);
    setAliveCharacters([true, true, true]);
    setClicks(0);
  };

  return (
    <div className='min-h-screen bg-black'>
      <main className='max-w-7xl relative mx-auto h-full px-5 py-7 '>
        <div className='h-80 w-80 top-40 left-0 right-50 absolute bg-pink-300 blur-[200px]'></div>
        <div className='h-80 w-80 top-40 right-0 absolute bg-blue-300 blur-[200px]'></div>
        <div className='h-50 w-50 right-[50%] bottom-0 absolute bg-gray-300 blur-[240px]'></div>
        <GameContext.Provider
          value={{
            clicks,
            setClicks,
            isGameOn,
            setIsGameOn,
            currentImage,
            setCurrentImage,
            coordinates,
            setCoordinates,
            aliveCharacters,
            setAliveCharacters,
            resetGame,
          }}
        >
          <Header />
          <Artwork />
        </GameContext.Provider>
        <section className='grid md:grid-cols-2 mt-10 gap-10'>
          <RulesCard />
          <LeaderBoards currentImage={currentImage} />
        </section>
      </main>
    </div>
  );
}

export { GameContext };
