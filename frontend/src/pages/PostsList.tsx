import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../component/PostCard';

interface Post {
  id: number;
  username: string;
  imageUrl: string;
  comment: string;
}

export default function PostsList() {
  const [posts, setposts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('/mockPosts.json').then((res) => setposts(res.data));
  }, []);

  return (
    <div className='flex-1 p-10 flex justify-center overflow-y-auto'>
      <PostCard posts={posts} />
    </div>
  );
}
