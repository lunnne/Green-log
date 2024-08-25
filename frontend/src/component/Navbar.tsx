import { Link } from 'react-router-dom';
import { IoHome, IoCreate } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { PiCloverFill } from 'react-icons/pi';

export default function Navbar() {
  return (
    <div className=" w-72 h-screen p-5 space-y-6 border-r-2 border-r-primary-brown">
      <div className="text-primary-green font-bold text-4xl font-primary-header my-10 flex items-center justify-center space-x-2">
        <PiCloverFill />
        <span>Greenlog</span>
      </div>
      <nav className="text-2xl m-10 text-dark-green space-y-7">
        <Link to="/" className="flex items-center space-x-5 hover:text-white">
          <IoHome />
          <span>Home</span>
        </Link>
        <Link to="#create" className="flex items-center space-x-5 hover:text-white">
          <IoCreate />
          <span>Create</span>
        </Link>
        <Link to="#profile" className="flex items-center space-x-5 hover:text-white">
          <CgProfile />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
