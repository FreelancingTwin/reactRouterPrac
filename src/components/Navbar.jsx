import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">About</NavLink>
        </li>
        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
