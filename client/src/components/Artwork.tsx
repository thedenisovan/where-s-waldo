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
          img1={gameImages.davyJones}
          img2={gameImages.cupHead}
          img3={gameImages.iceMan}
          getClickCoordinates={getClickCoordinates}
          gameLevel='Pirates'
          alt='Pirates versus aliens shipt battle'
          src={gameImages.easyImg}
          title1={'Davy Jones'}
          title2={'Cup Head'}
          title3={'Ice Man'}
        />

        <LevelImage
          getClickCoordinates={getClickCoordinates}
          gameLevel='Airport'
          alt='busy airport'
          src={gameImages.mediumImg}
          img1={gameImages.easyBoxer}
          img2={gameImages.mediumBoxer}
          img3={gameImages.hardBoxer}
          title1={'Mike Dwight'}
          title2={'Pink Floyd'}
          title3={'Marquis Jones'}
        />

        <LevelImage
          getClickCoordinates={getClickCoordinates}
          gameLevel='Library'
          alt='busy tech expo'
          src={gameImages.hardImg}
          img1={gameImages.supZero}
          img2={gameImages.shrek}
          img3={gameImages.patrick}
          title1={'Sub-Zero'}
          title2={'Shrek'}
          title3={'Patrick'}
        />
      </div>
    </section>
  );
}
