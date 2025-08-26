import React from 'react';

import styles from './Services.module.css';
import {Link} from "react-router-dom";

const Services: React.FC = () => {
    return (
        <section id="services" className={styles.servicesSection}>
            <h2>Serviciile Noastre</h2>

            <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                    <h3>Abonament Lunar</h3>
                    <p>Site complet + găzduire AWS + mentenanță la <strong>500 RON/lună</strong></p>
                    <ul>
                        <li>Fără costuri inițiale</li>
                        <li>Suport 24/7</li>
                        <li>Actualizări nelimitate</li>
                    </ul>
                </div>

                <div className={styles.serviceCard}>
                    <h3>Proiecte Personalizate</h3>
                    <p>Soluții complexe pe bază de cerințe</p>
                    <ul>
                        <li>Estimare prin sistem Story Points + Complexitate</li>
                        <li>De la 600 RON/SP</li>
                        <li>Livrare cod complet</li>
                    </ul>
                </div>
            </div>

            <Link to="/services" className={styles.learnMore} onClick={() => window.scrollTo(0, 0)}>Explorează toate opțiunile →</Link>
        </section>
    );
};

export default Services;