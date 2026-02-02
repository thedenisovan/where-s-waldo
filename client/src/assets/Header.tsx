import shine from '../assets/shines.svg';

export default function Header() {
  return (
    <header className='flex flex-col gap-3'>
      <div className='text-gray-400 max-w-fit flex gap-2 items-center bg-white/5 rounded-xl px-3 py-1'>
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
      <h1 className='text-4xl text-white font-[DM-Serif-Display] font-extrabold'>
        Find the tiny character.
      </h1>
      <p className='text-gray-400 font-medium'>
        Tap/click the scene to guess. When you find all characters you win. No
        downloads no login.
      </p>
    </header>
  );
}
