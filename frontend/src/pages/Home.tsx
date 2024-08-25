import Navbar from '../component/Navbar';
import PostsList from './PostsList';

export default function Home() {
  return (
    <div className='flex'>
      <Navbar />
      <PostsList/>
    </div>
  );
}
