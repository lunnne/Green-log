import Navbar from '../component/Navbar';
import PostsList from './PostsList';

export default function Home() {
  return (
    <div className="flex min-h-screen py-10">
      <Navbar />
      <PostsList />
    </div>
  );
}
