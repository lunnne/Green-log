import Navbar from '../component/Navbar';

export default function Home() {
  return (
    <div className='grid grid-cols-6'>
      <Navbar />
      <div className='cols-span-5'>home</div>
    </div>
  );
}
