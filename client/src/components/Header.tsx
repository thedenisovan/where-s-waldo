import { useContext } from 'react';
import shine from '../assets/shines.svg';
import { GameContext } from './App';

export default function Header() {
  const game = useContext(GameContext);

  return (
    <header className='flex relative z-10 flex-col gap-3'>
      <div className='flex justify-between'>
        <div className='text-gray-400 max-w-fit border border-gray-800 flex gap-2 items-center bg-white/5 rounded-xl px-3 py-1'>
          <img
            src={shine}
            alt='shining star icon'
            width={20}
            aria-hidden='true'
          />
          <p className='text-sm font-medium'>
            A simple "Where's Waldo" style find game
          </p>
        </div>
        <NavBar />
      </div>
      <h1 className='text-3xl text-white font-[DM-Serif-Display] font-extrabold'>
        Find the tiny character.
      </h1>
      <div className='flex flex-col gap-3 lg:flex-row lg:justify-between'>
        <p className='text-gray-400 font-medium'>
          Tap/click the scene to guess. When you find all characters you win. No
          downloads no login.
        </p>
        <div className='flex gap-2'>
          {/* <button
            disabled
            className={`disabled:text-gray-400 hover:cursor-not-allowed transition-colors border max-w-fit border-gray-600 flex gap-3 items-center rounded-2xl bg-black/40 font-medium py-1 px-5 text-white`}
          >
            <p>Hint (+20s)</p>
          </button> */}
          <button
            onClick={() => {
              game.setIsGameOn(false);
              game.setCoordinates([-1, -1]);
              game.setAliveCharacters([true, true, true]);
            }}
            className='hover:cursor-pointer hover:bg-gray-800/60 transition-colors border max-w-fit border-gray-600 flex gap-3 items-center rounded-2xl bg-black/40 font-medium py-1 px-5 text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='20px'
              viewBox='0 -960 960 960'
              width='20px'
              fill='#e3e3e3'
            >
              <path d='M480-144q-140 0-238-98t-98-238h72q0 109 77.5 186.5T480-216q109 0 186.5-77.5T744-480q0-109-77.5-186.5T480-744q-62 0-114.55 25.6Q312.91-692.8 277-648h107v72H144v-240h72v130q46-60 114.5-95T480-816q70 0 131.13 26.6 61.14 26.6 106.4 71.87 45.27 45.26 71.87 106.4Q816-550 816-480t-26.6 131.13q-26.6 61.14-71.87 106.4-45.26 45.27-106.4 71.87Q550-144 480-144Zm100-200L444-480v-192h72v162l115 115-51 51Z' />
            </svg>
            <p>Reset</p>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavBar() {
  return (
    <div className='hidden md:flex items-center'>
      <ul className='flex gap-4'>
        <li>
          <a
            href='#leaderboards'
            className='text-gray-200 hover:underline tracking-wider transition hover:text-white'
          >
            Leaderboards
          </a>
        </li>
        <li>
          <a
            href='#rules'
            className='text-gray-200 hover:underline tracking-wider transition hover:text-white'
          >
            Rules
          </a>
        </li>
      </ul>
    </div>
  );
}
