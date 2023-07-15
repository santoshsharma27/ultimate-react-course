import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-around border-b border-stone-200 bg-red-600 text-white px-4 uppercase sm:px-6 font-semibold py-5">
      <Link to="/" className="tracking-widest">
        Portfolio
      </Link>
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
