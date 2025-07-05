import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <h2>About Us</h2>
            <p>Brief introduction to your firm...</p>
            <a href="/about" className={styles.readMore}>Read More</a>
        </section>
    );
};

export default About;