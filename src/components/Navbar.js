import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/programming', label: 'Programming Portfolio' },
  { to: '/games', label: 'Game Development Portfolio' },
  { to: '/about', label: 'More About Me' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
