import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

function Navbar({ isDark, setIsDark })
{
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.topRow}>
                <h1 className={styles.logo}><Link to = "/">Gagan Babu</Link></h1>

                <div className={styles.controls}>
                    {menuOpen && (
                    <ul className={styles.links}>
                        <li><Link to ="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li><Link to ="/skills" onClick={closeMenu}>Skills</Link></li>
                        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                    )}

                    <div className={styles.buttonGroup}>
                      <button onClick = { ()=> setMenuOpen(!menuOpen) }>
                          <FontAwesomeIcon
                              icon={menuOpen ? faXmark : faBars}
                              style={{ color: 'rgb(122, 139, 110)' }}
                          />
                      </button>

                      <button onClick={() => setIsDark(!isDark)}>
                          <FontAwesomeIcon
                              icon={isDark ? faSun : faMoon}
                              style={{ color: 'rgb(122, 139, 110)' }}
                          />
                      </button>
                    </div>
                </div>
            </div>
        </nav>
    );
    
}

export default Navbar;


