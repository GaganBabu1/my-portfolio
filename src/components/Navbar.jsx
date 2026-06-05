import {useState} from 'react';

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
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
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