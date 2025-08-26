import React from 'react';
import styles from './About.module.css';
import {Link} from "react-router-dom";

const About: React.FC = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <h2>Despre Noi</h2>

            <div className={styles.aboutCard}>
                <p>
                    New Folder Solution, înființată în <strong>2025</strong> la <strong>Suceava</strong>, România, este o echipă compactă de <strong>programatori</strong> și <strong>designeri</strong>.
                    Punem accent pe <strong>transparență</strong> și <strong>comunicare directă</strong>, cu <strong>planificare clară</strong> și <strong>livrare la timp</strong>.
                    Folosim <strong>tehnologii</strong> de ultima generație pentru un <strong>cod curat</strong> și <strong>securizat</strong>.
                </p>

                <Link to="/about" className={styles.readMoreBtn}  onClick={() => window.scrollTo(0, 0)}>Citește mai mult →</Link>
            </div>
        </section>
    );
};

export default About;