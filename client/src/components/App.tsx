import Header from './Header';
import Artwork from './Artwork';

export default function App() {
  return (
    <div className='min-h-screen bg-radial from-slate-600 via-gray-700 to-slate-800'>
      <main className='max-w-6xl mx-auto h-full px-3 py-7 '>
        <Header />
        <Artwork />
      </main>
    </div>
  );
}
