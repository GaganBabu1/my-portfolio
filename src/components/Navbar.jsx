import {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar()
{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <h2>Gagan Babu</h2>

            <button onClick = { ()=> setMenuOpen(!menuOpen) }>
                {menuOpen ? 'Close Menu' : 'Open Menu'}
            </button>

            {menuOpen && (
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to ="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            )}
        </nav>
    );
}

export default Navbar;


/*
buton onclick = function clicking()
{
    setMenuOpen(!menuOpen);
    if(menuOpen)
    {
        button.innerHTML = 'Close Menu';
        
    }
    else    {
        button.innerHTML = 'Open Menu';
    }
}
*/ 