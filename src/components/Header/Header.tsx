import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-1.png';

import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/"><img className={styles.logo} src={logo} alt="Home" /></Link>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li><Link to="/">Acasă</Link></li>
                    <li><Link to="/about">Despre Noi</Link></li>
                    <li><Link to="/services">Servicii</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;