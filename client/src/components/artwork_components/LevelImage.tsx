import { useContext } from 'react';
import { GameContext } from '../App';
import gameImages from '../../util.imports';

// Based on current level/image state show or hide this image
export default function LevelImage({
  getClickCoordinates,
  gameLevel,
  alt,
  src,
  coordinates,
}: {
  getClickCoordinates: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void;
  gameLevel: string;
  alt: string;
  src: string;
  coordinates: number[];
}) {
  const game = useContext(GameContext);

  return (
    <span
      className='relative'
      style={{
        display: game.currentImage === gameLevel ? '' : 'none',
      }}
    >
      {/* Indicator showing where user clicked */}
      <div
        style={{
          top: `${coordinates[1] - 0.5}%`,
          left: `${coordinates[0] - 0.5}%`,
          display:
            coordinates[0] === -1 || coordinates[1] === -1 || !game.isGameOn
              ? 'none'
              : '',
        }}
        className=' bg-green-600 animate-pulse rounded-full absolute w-3 h-3'
      ></div>

      {/* This image is only being displayed on hardest game level */}
      <img
        src={gameImages.hardCharacters}
        className='absolute w-[25%] right-0'
        style={{
          filter: game.isGameOn ? '' : 'blur(1.5rem)',
          display: game.currentImage === 'Library' ? '' : 'none',
        }}
      />
      {/* This image is only being displayed on easiest game level */}
      <img
        src={gameImages.easyCharacters}
        className='absolute w-[25%] right-0'
        style={{
          filter: game.isGameOn ? '' : 'blur(1.5rem)',
          display: game.currentImage === 'Pirates' ? '' : 'none',
        }}
      />

      <img
        onClick={(e) => getClickCoordinates(e)}
        alt={alt}
        src={src}
        style={{ filter: game.isGameOn ? '' : 'blur(1.5rem)' }}
        className={`rounded-2xl mx-auto w-full`}
      />
      <button
        onClick={() => game.setIsGameOn(true)}
        style={{ display: game.isGameOn ? 'none' : '' }}
        className={`hover:cursor-pointer hover:bg-blue-500 absolute transition-colors min-h-fit min-w-fit text-sm bg-blue-400 font-bold md:text-lg rounded-3xl py-4 px-6 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  bottom-[50%] `}
      >
        Click to Play
      </button>
    </span>
  );
}
