import { useContext } from 'react';
import { GameContext } from '../App';

// Drop down menu, from where user selects character
export default function CharacterDropDown({
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
      <DropdownLi
        makeAttempt={makeAttempt}
        imgSrc={img1}
        title={title1}
        id={1}
      />
      <DropdownLi
        makeAttempt={makeAttempt}
        imgSrc={img2}
        title={title2}
        id={2}
      />
      <DropdownLi
        makeAttempt={makeAttempt}
        imgSrc={img3}
        title={title3}
        id={3}
      />
    </ul>
  );
}

function DropdownLi({
  makeAttempt,
  imgSrc,
  title,
  id,
}: {
  makeAttempt: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    characterId: number,
  ) => void;
  imgSrc: string;
  title: string;
  id: number;
}) {
  const game = useContext(GameContext);

  return (
    <li
      style={{
        display: game.aliveCharacters[id - 1] ? '' : 'none',
      }}
      className={`hover:bg-gray-200 transition-colors rounded-r-xl mr-1`}
    >
      <button
        className='hover:cursor-pointer flex items-center gap-2'
        onClick={(e) => {
          makeAttempt(e, id);
          game.setCoordinates([-1, -1]);
          game.setClicks(game.clicks + 1);
        }}
      >
        <img
          className='rounded-lg max-h-12'
          width={40}
          src={imgSrc}
          alt='game character'
        />
        <p className='font-bold text-gray-600'>{title}</p>
      </button>
    </li>
  );
}
