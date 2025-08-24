import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} New Folder Solution</p>
            </div>
        </footer>
    );
};

export default Footer;