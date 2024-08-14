import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <img class='nav-logo' src=''></img>
            <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to ='/races'>Races</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;