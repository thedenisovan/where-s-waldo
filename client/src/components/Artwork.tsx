import easyImage from '../assets/easy.webp';
import mediumImg from '../assets/medium.webp';
import hardImg from '../assets/hard.webp';
const env = import.meta.env;

export default function Artwork({
  currentImage,
  setCurrentImage,
}: {
  currentImage: string;
  setCurrentImage: (val: string) => void;
}) {
  return (
    <section className='border relative z-10! border-gray-800 rounded-2xl mt-3 shadow-2xl'>
      <ArtworkHeader
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <div className='p-4 hover:cursor-cell bg-black/60 rounded-b-2xl'>
        <span
          className={`relative ${currentImage === 'Pirates' ? '' : 'hidden'}`}
        >
          <img
            alt='pirate vs alien'
            src={easyImage}
            className={` rounded-2xl mx-auto w-full`}
          />

          <PositionIndicator
            y={env.VITE_PIRATES_1_Y}
            x={env.VITE_PIRATES_1_X}
          />
          <PositionIndicator
            y={env.VITE_PIRATES_2_Y}
            x={env.VITE_PIRATES_2_X}
          />
          <PositionIndicator
            y={env.VITE_PIRATES_3_Y}
            x={env.VITE_PIRATES_3_X}
          />
        </span>
        <span
          className={`relative ${currentImage === 'Airport' ? '' : 'hidden'}`}
        >
          <img
            alt='airport in winter'
            src={mediumImg}
            className={`rounded-2xl mx-auto w-full`}
          />

          <PositionIndicator
            y={env.VITE_AIRPORT_1_Y}
            x={env.VITE_AIRPORT_1_X}
          />
          <PositionIndicator
            y={env.VITE_AIRPORT_2_Y}
            x={env.VITE_AIRPORT_2_X}
          />
          <PositionIndicator
            y={env.VITE_AIRPORT_3_Y}
            x={env.VITE_AIRPORT_3_X}
          />
        </span>
        <span
          className={`relative ${currentImage === 'Library' ? '' : 'hidden'}`}
        >
          <img
            alt='games con or some other tech expo'
            src={hardImg}
            className={`rounded-2xl mx-auto w-full`}
          />
          <PositionIndicator
            y={env.VITE_LIBRARY_1_Y}
            x={env.VITE_LIBRARY_1_X}
          />
          <PositionIndicator
            y={env.VITE_LIBRARY_2_Y}
            x={env.VITE_LIBRARY_2_X}
          />
          <PositionIndicator
            y={env.VITE_LIBRARY_3_Y}
            x={env.VITE_LIBRARY_3_X}
          />
        </span>
      </div>
    </section>
  );
}

function PositionIndicator({ x, y }: { x: string; y: string }) {
  return (
    <div
      style={{ top: y, right: x }}
      className='absolute h-[8%] w-[3%] bg-yellow-400/40'
    ></div>
  );
}

// Artwork component header element
function ArtworkHeader({
  currentImage,
  setCurrentImage,
}: {
  currentImage: string;
  setCurrentImage: (val: string) => void;
}) {
  return (
    <header className='flex justify-between items-center px-3 py-2 bg-gray-300/10 rounded-t-2xl'>
      <div className='hidden md:flex items-center gap-2'>
        <div className='bg-slate-200/30 rounded-full w-10 h-10 flex items-center justify-center border-2 border-black px-1 py-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='25px'
            viewBox='0 -960 960 960'
            width='25px'
            fill='#F19E39'
          >
            <path d='M480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170l-73-24q-9-62-56.5-103T480-648q-70 0-119 49t-49 119q0 63 41 110.5T456-313l24 73Zm44 141q-11 2-22 2.5t-22 .5q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 11-.5 22t-1.5 22l-70-22v-22q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91q5 0 11-.5t11-.5l22 70Zm296 27L654-239 600-96 480-480l384 120-143 53 167 167-68 68Z' />
          </svg>
        </div>
        <span>
          <h2 className='text-white font-bold'>{currentImage}</h2>
          <p className='text-gray-300 text-xs'>Click anywhere to guess.</p>
        </span>
      </div>

      <div className='flex items-center gap-7'>
        <div className='flex items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
            fill='#909090'
          >
            <path d='M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm-99.5 291.5Q275-137 226-186t-77.5-114.5Q120-366 120-440t28.5-139.5Q177-645 226-694t114.5-77.5Q406-800 480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80q-74 0-139.5-28.5ZM678-242q82-82 82-198t-82-198q-82-82-198-82t-198 82q-82 82-82 198t82 198q82 82 198 82t198-82ZM480-440Z' />
          </svg>
          <div>
            <p className='text-gray-300 text-xs'>TIME</p>
            <p className='text-white'>0:00</p>
          </div>
        </div>

        <div className='hidden md:flex items-center gap-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
            fill='#909090'
          >
            <path d='M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM707-253q93-93 93-227t-93-227q-93-93-227-93t-227 93q-93 93-93 227t93 227q93 93 227 93t227-93Zm-397-57q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Zm283-57q47-47 47-113t-47-113q-47-47-113-47t-113 47q-47 47-47 113t47 113q47 47 113 47t113-47Zm-169.5-56.5Q400-447 400-480t23.5-56.5Q447-560 480-560t56.5 23.5Q560-513 560-480t-23.5 56.5Q513-400 480-400t-56.5-23.5Z' />
          </svg>
          <div>
            <p className='text-gray-300 text-xs'>ATTEMPTS</p>
            <p className='text-white'>0</p>
          </div>
        </div>
      </div>

      <ul className='flex max-h-fit p-2 gap-2 rounded-full bg-gray-900/20 border-gray-800 border-2 items-center'>
        <ArtworkSelectButton
          currentImage={currentImage}
          selection='Pirates'
          setCurrentImage={() => setCurrentImage('Pirates')}
        />

        <ArtworkSelectButton
          currentImage={currentImage}
          selection='Airport'
          setCurrentImage={() => setCurrentImage('Airport')}
        />

        <ArtworkSelectButton
          currentImage={currentImage}
          selection='Library'
          setCurrentImage={() => setCurrentImage('Library')}
        />
      </ul>
    </header>
  );
}

// Switch between different artworks to play wheres aldo
function ArtworkSelectButton({
  selection,
  setCurrentImage,
  currentImage,
}: {
  selection: string;
  currentImage: string;
  setCurrentImage: (val: string) => void;
}) {
  return (
    <li>
      <button
        onClick={() => setCurrentImage(selection)}
        className='rounded-xl px-2 text-sm text-gray-300 hover:bg-gray-200 hover:text-black transition cursor-pointer'
        style={{
          backgroundColor: selection === currentImage ? 'white' : '',
          color: selection === currentImage ? 'black' : '',
        }}
      >
        {selection}
      </button>
    </li>
  );
}
