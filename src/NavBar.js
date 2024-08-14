import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <img class='nav-logo' src='/121.png' alt='red, elongated hexagon with white inside it in that reads 12:1 in larger font and running in smaller font underneath'/>
            <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to ='/races'>Races</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;