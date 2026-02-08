import gameImages from '../util.imports';
import LevelImage from './artwork_components/LevelImage';
import ArtworkHeader from './artwork_components/ArtworkHeader';
import { useContext } from 'react';
import { GameContext } from './App';

export default function Artwork() {
  const game = useContext(GameContext);

  // Gets coordinates of user click
  const getClickCoordinates = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Get mouse x,y position relative it's position and transform it coords to percentage units
    const x = +(((e.clientX - rect.left) / rect.width) * 100).toFixed(2);
    const y = +(((e.clientY - rect.top) / rect.height) * 100).toFixed(2);

    game.setCoordinates([x, y]);
  };

  console.log(game.coordinates);

  return (
    <section className='border relative z-10! border-gray-800 rounded-2xl mt-3 shadow-2xl'>
      <ArtworkHeader />
      <div className='p-4 hover:cursor-cell bg-black/60 rounded-b-2xl'>
        <LevelImage
          coordinates={game.coordinates}
          getClickCoordinates={getClickCoordinates}
          gameLevel='Pirates'
          alt='Pirates versus aliens shipt battle'
          src={gameImages.easyImg}
        />

        <LevelImage
          coordinates={game.coordinates}
          getClickCoordinates={getClickCoordinates}
          gameLevel='Airport'
          alt='busy airport'
          src={gameImages.mediumImg}
        />

        <LevelImage
          coordinates={game.coordinates}
          getClickCoordinates={getClickCoordinates}
          gameLevel='Library'
          alt='busy tech expo'
          src={gameImages.hardImg}
        />
      </div>
    </section>
  );
}
