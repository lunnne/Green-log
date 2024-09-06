import { Link } from 'react-router-dom';
import { IoHome, IoCreate } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { PiCloverFill } from 'react-icons/pi';

export default function Navbar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex-row md:flex-col">
        <div className="text-primary-green font-bold text-4xl font-primary-header my-10 flex items-center justify-center space-x-2">
          <PiCloverFill />
          <span>Greenlog</span>
        </div>
        <nav className="text-2xl m-10 text-dark-green font-semibold space-y-7">
          <Link to="/" className="flex items-center space-x-5 hover:text-primary-brown">
            <IoHome />
            <span>Home</span>
          </Link>
          <Link to="/create" className="flex items-center space-x-5 hover:text-primary-brown">
            <IoCreate />
            <span>Create</span>
          </Link>
          <Link to="/signup" className="flex items-center space-x-5 hover:text-primary-brown">
            <CgProfile />
            <span>Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
