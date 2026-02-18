import { useContext, useState } from 'react';
import { GameContext } from '../App';
import gameImages from '../../util.imports';
import EliminationIndicators from './EliminationIndicator';
import startGame from '../apiCalls/startGame';
import completeGame from '../apiCalls/completeGame';
import CharacterDropDown from './CharacterDropdown';

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

      <CharacterPanel />

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
      <CompleteAttemptForm
        name={name}
        setName={setName}
        attemptId={attemptId}
      />
    </span>
  );
}

// Panel indicating what characters needs finding
function CharacterPanel() {
  const game = useContext(GameContext);

  return (
    <>
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
    </>
  );
}

// Form for finishing attempt and submitting it to db
function CompleteAttemptForm({
  name,
  setName,
  attemptId,
}: {
  name: string;
  setName: (name: string) => void;
  attemptId: number | null;
}) {
  const game = useContext(GameContext);

  {
    /* Winner data form */
  }
  return (
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
  );
}
