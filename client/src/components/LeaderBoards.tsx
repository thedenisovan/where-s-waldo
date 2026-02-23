import { useContext } from 'react';
import { GameContext } from './App';

export default function LeaderBoards({
  currentImage,
}: {
  currentImage: string;
}) {
  const game = useContext(GameContext);

  return (
    <div
      id='leaderboards'
      className='text-white p-7 rounded-2xl bg-gray-800/40'
    >
      <header className='flex justify-between items-center mb-5'>
        <div>
          <h5 className='font-bold text-xl'>Hall of Fame</h5>
          <p className='text-gray-400'>
            Top scores for <span>{currentImage}</span>
          </p>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='30px'
          viewBox='0 -960 960 960'
          width='30px'
          fill='#ff4d00'
        >
          <path d='M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z' />
        </svg>
      </header>

      <div className='max-h-55 overflow-auto'>
        <table className='w-full relative'>
          <thead aria-label='leaderboards relative table'>
            <tr className='text-gray-400 text-xs sticky  bg-gray-800 top-0 md:text-md border-b border-gray-700'>
              <th className='pb-2 rounded-tl-lg!'>NAME</th>
              <th className='pb-2'>
                TIME (<span className='text-[10px]'>SECONDS</span>)
              </th>
              <th className='pb-2'>CLICKS</th>
              <th className='pb-2 rounded-tr-lg!'>DATE</th>
            </tr>
          </thead>
          <tbody className=''>
            {game.leaderboards.map(
              (g) =>
                // Display only scores of current game level
                g.name.length >= 3 &&
                g.name.length <= 15 &&
                g.levelName === game.currentImage.toUpperCase() && (
                  <tr
                    className='text-center'
                    key={g.name + '-' + g.attemptDuration}
                  >
                    <td>{g.name}</td>
                    <td>{(+g.attemptDuration / 1000).toFixed(1)}</td>
                    <td>{g.clicks}</td>
                    <td>
                      {g.attemptDate.split('-')[2][0]}
                      {g.attemptDate.split('-')[2][1]}/
                      {g.attemptDate.split('-')[1]}/
                      {g.attemptDate.split('-')[0]}
                    </td>
                  </tr>
                ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
