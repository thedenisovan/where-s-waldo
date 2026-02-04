export default function RulesCard() {
  return (
    <div id='rules' className='text-white p-7 rounded-2xl bg-gray-800/40'>
      <header className='flex justify-between items-center mb-5'>
        <div>
          <h5 className='font-bold text-xl'>How it works</h5>
          <p className='text-gray-400'>Simple rules for the hunt</p>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='30px'
          viewBox='0 -960 960 960'
          width='30px'
          fill='#ff4d00'
        >
          <path d='M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm510.5-165.5Q720-463 720-480t-11.5-28.5Q697-520 680-520t-28.5 11.5Q640-497 640-480t11.5 28.5Q663-440 680-440t28.5-11.5Zm-80-120Q640-583 640-600t-11.5-28.5Q617-640 600-640t-28.5 11.5Q560-617 560-600t11.5 28.5Q583-560 600-560t28.5-11.5ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z' />
        </svg>
      </header>
      <ul className='flex flex-col gap-5'>
        <ListBullet
          color='red'
          heading='Hidden Target'
          paragraph='The character is hiding somewhere in the chaos. Find him and set the record.'
        />
        <ListBullet
          color='green'
          heading='Interactive Guessing'
          paragraph='Click or tap the scene to make a guess. A pulse will show your selection.'
        />
        <ListBullet
          color='yellow'
          heading='Hidden Target'
          paragraph='Speed and accuracy determine your rank. Using hints adds a +20s penalty.'
        />
      </ul>
    </div>
  );
}

function ListBullet({
  color,
  heading,
  paragraph,
}: {
  color: string;
  heading: string;
  paragraph: string;
}) {
  return (
    <li className='flex gap-4'>
      <div
        style={{ backgroundColor: color }}
        className='mt-2 h-2 w-2 rounded-full'
      ></div>
      <div>
        <h6 className='font-bold text-md'>{heading}</h6>
        <p className='text-gray-100 text-md'>{paragraph}</p>
      </div>
    </li>
  );
}
