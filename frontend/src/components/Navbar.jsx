import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black/50 backdrop-blur-md p-4 fixed w-full top-0 z-50 shadow-lg">
      <ul className="flex justify-center gap-10 text-white font-semibold text-lg">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-400" : ""}>Home</NavLink></li>
        <li><NavLink to="/datasets" className={({ isActive }) => isActive ? "text-cyan-400" : ""}>Dataset Explorer</NavLink></li>
        <li><NavLink to="/lab" className={({ isActive }) => isActive ? "text-purple-400" : ""}>AI Lab</NavLink></li>
        <li><NavLink to="/solutions" className={({ isActive }) => isActive ? "text-green-400" : ""}>Solutions</NavLink></li>
      </ul>
    </nav>
  );
}
