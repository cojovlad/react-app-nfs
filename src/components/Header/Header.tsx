import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Firm Name</div>
            <nav>
                <ul className={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;