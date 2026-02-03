import { useState } from 'react';
import easyImage from '../assets/easy.webp';
import mediumImg from '../assets/medium.webp';
import hardImg from '../assets/hard.webp';

export default function Artwork() {
  const [currentImage, setCurrentImage] = useState<string>('Pirates');

  return (
    <section className='border border-gray-800 rounded-2xl mt-3 shadow-2xl'>
      <ArtworkHeader
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <div className='p-4 '>
        <img
          src={easyImage}
          className={`rounded-2xl mx-auto ${currentImage === 'Pirates' ? '' : 'hidden'}`}
        />
        <img
          src={mediumImg}
          className={`rounded-2xl mx-auto ${currentImage === 'Airport' ? '' : 'hidden'}`}
        />
        <img
          src={hardImg}
          className={`rounded-2xl mx-auto ${currentImage === 'Library' ? '' : 'hidden'}`}
        />
      </div>
    </section>
  );
}

// Artwork component header element
export function ArtworkHeader({
  currentImage,
  setCurrentImage,
}: {
  currentImage: string;
  setCurrentImage: (val: string) => void;
}) {
  return (
    <header className='flex justify-between items-center p-3 bg-gray-300/10 rounded-t-2xl'>
      <div className='flex items-center gap-2'>
        <div className='bg-slate-200/30 rounded-full border-2 border-black px-1 py-3'>
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
          <h4 className='text-white font-bold'>{currentImage}</h4>
          <p className='text-gray-300 text-xs'>Click anywhere to guess.</p>
        </span>
      </div>
      <ul className='flex max-h-fit p-2 gap-2 rounded-full border-gray-800 border-2 items-center'>
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
