import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/programming" activeClassName="active">Programming Portfolio</NavLink></li>
        <li><NavLink to="/games" activeClassName="active">Game Development Portfolio</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">More About Me</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
