interface Post {
  id: number;
  username: string;
  imageUrl: string;
  comment: string;
}

interface PostCardProps {
  posts: Post[];
}

const PostCard: React.FC<PostCardProps> = ({ posts }) => {
  return (
    <div className="mb-10">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800 p-4 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/40" className="w-10 h-10 rounded-full" alt="Profile Picture" />
            <div className="ml-3 text-left">
              <span className="font-semibold">{post.username}</span>
              <p className="text-sm text-gray-400">Dubai, United Arab Emirates • 12m</p>
            </div>
          </div>
          <img src={post.imageUrl} alt={post.username} className="postimg w-full h-auto rounded-lg mb-4" />
          <div className="flex items-center space-x-4 text-gray-400 mb-2">
            <button className="hover:text-white">❤️</button>
            <button className="hover:text-white">💬</button>
            <button className="hover:text-white">✈️</button>
          </div>
          <p className="font-semibold text-left">
            {/* <span className='mr-5'>{post.username}</span> */}
            {post.comment}
          </p>
        </div>
      ))}
    </div>
  );
};
export default PostCard;
