import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => (
  <nav className="navigation">
    <Link to="./">
      <h1 className="logo">Math Magician</h1>
    </Link>

    <ul className="nav-list">
      <li>
        <Link to="/">Home </Link>
      </li>

      <li>
        <Link to="/Calculator">Calculator</Link>
      </li>

      <li>
        <Link to="/Quotes">Quotes</Link>
      </li>
    </ul>

  </nav>
);
export default NavBar;
