import { useState } from 'react';

export default function Artwork() {
  const [currentImage, setCurrentImage] = useState<string>('Beach');

  return (
    <section className='border border-gray-600 rounded-2xl'>
      <header className='flex items-center p-3'>
        <div className='flex items-center gap-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='30px'
            viewBox='0 -960 960 960'
            width='30px'
            fill='#F19E39'
          >
            <path d='M480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170l-73-24q-9-62-56.5-103T480-648q-70 0-119 49t-49 119q0 63 41 110.5T456-313l24 73Zm44 141q-11 2-22 2.5t-22 .5q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 11-.5 22t-1.5 22l-70-22v-22q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91q5 0 11-.5t11-.5l22 70Zm296 27L654-239 600-96 480-480l384 120-143 53 167 167-68 68Z' />
          </svg>
          <span>
            <h4 className='text-white font-bold'>{currentImage}</h4>
            <p className='text-gray-300 text-xs'>Click anywhere to guess.</p>
          </span>
        </div>
        <ul className='flex max-h-fit p-2 gap-2 rounded-full border-gray-800 border-2 items-center'>
          <ArtworkSelectButton
            currentImage={currentImage}
            selection='Beach'
            setCurrentImage={() => setCurrentImage('Beach')}
          />

          <ArtworkSelectButton
            currentImage={currentImage}
            selection='Market'
            setCurrentImage={() => setCurrentImage('Market')}
          />

          <ArtworkSelectButton
            currentImage={currentImage}
            selection='Library'
            setCurrentImage={() => setCurrentImage('Library')}
          />
        </ul>
      </header>
    </section>
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
