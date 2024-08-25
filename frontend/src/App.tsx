import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-20 flex-none lg:w-64 md:border-r">
        <Navbar />
      </div>
      <div className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto bg-light-green">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
