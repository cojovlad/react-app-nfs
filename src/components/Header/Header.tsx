import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>New Folder Solution</div>
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