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
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.username}</h2>
          <img src={post.imageUrl} alt={post.username} />
          <p>{post.comment}</p>
        </div>
      ))}
    </div>
  );
};
export default PostCard;
