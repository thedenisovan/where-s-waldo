import { useContext, useState } from 'react';
import { GameContext } from '../App';
import gameImages from '../../util.imports';
import EliminationIndicators from './EliminationIndicator';
import startGame from '../apiCalls/startGame';
import completeGame from '../apiCalls/completeGame';

// Based on current level/image state show or hide this image
export default function LevelImage({
  getClickCoordinates,
  gameLevel,
  alt,
  src,
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
}: {
  getClickCoordinates: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => void;
  gameLevel: string;
  alt: string;
  src: string;
  img1: string;
  img2: string;
  img3: string;
  title1: string;
  title2: string;
  title3: string;
}) {
  const game = useContext(GameContext);
  const [attemptId, setAttemptId] = useState<number | null>(null);
  const [name, setName] = useState<string>('');

  // Make guess attempt after user click coordinate and some character
  const makeAttempt = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    characterId: number,
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://find-a-char.up.railway.app/attempt',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            coordsX: game.coordinates[0],
            coordsY: game.coordinates[1],
            levelName: game.currentImage,
            characterId,
            attemptId,
          }),
        },
      );

      if (!response.ok)
        throw new Error(`Error response status: ${response.status}`);

      const result = await response.json();

      if (result.char1 !== undefined) {
        game.setAliveCharacters([result.char1, result.char2, result.char3]);

        if (result.message === 'COMPLETED') {
          game.setGameWon(true);
        }
      }
    } catch (err) {
      console.error(
        `Error: ${err instanceof Error ? `${err.message}` : `${String(err)}`}`,
      );
    }
  };

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
          top: `${game.coordinates[1] - 0.5}%`,
          left: `${game.coordinates[0] - 0.5}%`,
          display:
            game.coordinates[0] === -1 ||
            game.coordinates[1] === -1 ||
            !game.isGameOn
              ? 'none'
              : '',
        }}
        className=' bg-green-600 animate-pulse rounded-full absolute w-3 h-3'
      ></div>

      <EliminationIndicators />

      {/* This image is only being displayed on hardest game level */}
      <img
        src={gameImages.hardCharacters}
        className='absolute w-[25%] right-0'
        style={{
          filter: game.isGameOn && !game.isGameWon ? '' : 'blur(1.5rem)',
          display: game.currentImage === 'Library' ? '' : 'none',
        }}
      />
      {/* This image is only being displayed on easiest game level */}
      <img
        src={gameImages.easyCharacters}
        className='absolute w-[25%] right-0'
        style={{
          filter: game.isGameOn && !game.isGameWon ? '' : 'blur(1.5rem)',
          display: game.currentImage === 'Pirates' ? '' : 'none',
        }}
      />

      <img
        onClick={(e) => getClickCoordinates(e)}
        alt={alt}
        src={src}
        style={{
          filter: game.isGameOn && !game.isGameWon ? '' : 'blur(1.5rem)',
        }}
        className={`rounded-2xl mx-auto w-full`}
      />

      <CharacterDropDown
        img1={img1}
        img2={img2}
        img3={img3}
        title1={title1}
        title2={title2}
        title3={title3}
        makeAttempt={makeAttempt}
      />

      {/* Start game button */}
      <button
        onClick={(e) => {
          game.setIsGameOn(true);
          startGame(setAttemptId, e, gameLevel);
        }}
        style={{ display: game.isGameOn || game.isGameWon ? 'none' : '' }}
        className={`hover:cursor-pointer hover:bg-blue-500 absolute transition-colors min-h-fit min-w-fit text-sm bg-blue-400 font-bold md:text-lg rounded-3xl py-4 px-6 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  bottom-[50%] `}
      >
        Click to Play
      </button>

      {/* Winner data form */}
      <form
        style={{ display: !game.isGameWon ? 'none' : '' }}
        className='
    absolute flex flex-col gap-3
    translate-[50%] top-[10%] right-[50%]
    bg-black/70 backdrop-blur-md
    p-6 rounded-xl shadow-xl
    w-72
  '
      >
        <label className='text-white text-sm font-medium' htmlFor='name'>
          Name (3-15 characters)
        </label>

        <input
          className='
      bg-white rounded-lg px-3 py-2
      outline-none
      focus:ring-2 focus:ring-blue-500
      transition
    '
          type='text'
          id='name'
          name='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <button
          disabled={name.length > 15 || name.length < 3}
          onClick={(e) => {
            completeGame(attemptId, e, name, game.setLeaderBoards);
            game.resetGame();
          }}
          className='
      text-white bg-blue-600
      rounded-lg py-2
      hover:bg-blue-700
      active:scale-95
      transition
    '
        >
          Submit
        </button>
      </form>
    </span>
  );
}

// Drop down menu, from where user selects character
function CharacterDropDown({
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
  makeAttempt,
}: {
  img1: string;
  img2: string;
  img3: string;
  title1: string;
  title2: string;
  title3: string;
  makeAttempt: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    characterId: number,
  ) => void;
}) {
  const game = useContext(GameContext);

  return (
    <ul
      className={`absolute bg-white flex flex-col gap-1 py-1 px-1 rounded-xl max-h-fit`}
      style={{
        // Conditionals so if user clicks on right/left/top/bottom side of the image the
        // select element appears on opposite side
        top: `${game.coordinates[1] < 50 ? game.coordinates[1] + 2 : game.coordinates[1] - 24}%`,
        left: `${game.coordinates[0] < 50 ? game.coordinates[0] + 1 : game.coordinates[0] - 14}%`,
        display:
          game.coordinates[0] === -1 ||
          game.coordinates[1] === -1 ||
          !game.isGameOn ||
          (!game.aliveCharacters[0] &&
            !game.aliveCharacters[1] &&
            !game.aliveCharacters[2])
            ? 'none'
            : '',
      }}
    >
      <li
        style={{
          display: game.aliveCharacters[0] ? '' : 'none',
        }}
        className={`hover:bg-gray-200 transition-colors rounded-r-xl mr-1`}
      >
        <button
          className='hover:cursor-pointer flex items-center gap-2'
          onClick={(e) => {
            makeAttempt(e, 1);
            game.setCoordinates([-1, -1]);
            game.setClicks(game.clicks + 1);
          }}
        >
          <img
            className='rounded-lg max-h-12'
            width={40}
            src={img1}
            alt='game character'
          />
          <p className='font-bold text-gray-600'>{title1}</p>
        </button>
      </li>
      <li
        style={{
          display: game.aliveCharacters[1] ? '' : 'none',
        }}
        className={`hover:bg-gray-200 transition-colors rounded-r-xl mr-1`}
      >
        <button
          className='hover:cursor-pointer flex items-center gap-2'
          onClick={(e) => {
            makeAttempt(e, 2);
            game.setCoordinates([-1, -1]);
            game.setClicks(game.clicks + 1);
          }}
        >
          <img
            className='rounded-lg max-h-12'
            width={40}
            src={img2}
            alt='game character'
          />
          <p className='font-bold text-gray-600'>{title2}</p>
        </button>
      </li>
      <li
        style={{
          display: game.aliveCharacters[2] ? '' : 'none',
        }}
        className={`hover:bg-gray-200 transition-colors rounded-r-xl mr-1`}
      >
        <button
          className='hover:cursor-pointer flex items-center gap-2'
          onClick={(e) => {
            makeAttempt(e, 3);
            game.setCoordinates([-1, -1]);
            game.setClicks(game.clicks + 1);
          }}
        >
          <img
            className='rounded-lg max-h-12'
            width={40}
            src={img3}
            alt='game character'
          />
          <p className='font-bold text-gray-600'>{title3}</p>
        </button>
      </li>
    </ul>
  );
}
