import { Link } from 'react-router-dom';
import './navBar.css';
const NavBar = () => {
    return(
        <nav className='navigation'>
            <h1>Math Magician</h1>
            <ul className='nav-list'>
                <li>
                    <Link to = '/'>Home </Link>
                </li>

                <li>
                    <Link to = '/Calculator'>Calculator</Link>
                </li>

                <li>
                    <Link to = '/Quotes'>Quotes</Link>
                </li>
            </ul>

        </nav>
    )
}
export default NavBar;