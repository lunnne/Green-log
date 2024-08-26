import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

interface Post {
  id: number;
  username: string;
  imageUrl: string;
  comment: string;
}

export default function AddPost() {
  //   const [image, setimage] = useState('');
  const [post, setPost] = useState<Post>({
    id: 0,
    username: '',
    imageUrl: '',
    comment: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(post);
  };


  return (
    <section className="rounded-lg text-lg flex flex-col md:text-2xl text-dark-green">
      <div className="flex min-h-12 pl-1 pr-3 justify-between items-center">
        <input type="file" className="w-2/3" onChange={(e) => setPost({ ...post, imageUrl: URL.createObjectURL(e.target.files![0]) })} />
        <button className="font-semibold">upload</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setPost({ ...post, comment: e.target.value })}
          className="min-h-12 w-full px-3"
          type="text"
          placeholder="leave your green comment.."
        />
        <button className="min-h-12 uppercase w-full font-bold flex items-center justify-center border-2 space-x-2 border-dark-green py-2 px-3">
          <FaPlus />
          <span>Create</span>
        </button>
      </form>
    </section>
  );
}
