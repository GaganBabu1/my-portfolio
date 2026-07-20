import {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ isDark, setIsDark })
{
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}><Link to = "/">Gagan Babu</Link></h1>

            

            {menuOpen && (
            <ul className={styles.links}>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to ="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            )}

            <div className={styles.buttonGroup}>
              <button onClick = { ()=> setMenuOpen(!menuOpen) }>
                  {menuOpen ? 'Close Menu' : 'Open Menu'}
              </button>

              <button onClick={() => setIsDark(!isDark)}>
                  {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            
        </nav>
    );
    
}

export default Navbar;


