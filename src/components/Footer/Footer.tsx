import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} Firm Name. All rights reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="Twitter">TW</a>
                    <a href="#" aria-label="LinkedIn">IN</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;