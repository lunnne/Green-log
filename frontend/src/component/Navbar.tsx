import { Link } from 'react-router-dom';
import { IoHome, IoCreate } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';

export default function Navbar() {
  return (
    <div>
      <div className="text-primary-green font-bold text-3xl font-primary-header">Greenlog</div>
      <ul className="text-2xl m-10">
        <Link to="/" className="flex">
          <IoHome />
          Home
        </Link>
        <Link to="#create" className="flex">
          <IoCreate />
          Create
        </Link>
        <Link to="#profile" className="flex">
          <CgProfile />
          Profile
        </Link>
      </ul>
    </div>
  );
}
