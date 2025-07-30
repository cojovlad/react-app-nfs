import React from 'react';

import styles from './AboutPage.module.css';

import MainLayout from "../../components/MainLayout";

const AboutPage: React.FC = () => {
    return (
        <MainLayout>
            <div className={styles.aboutContainer}>
                <section className={styles.heroSection}>
                    <h1>New Folder SRL - Revoluționăm Prezența Online a Afacerilor Mici</h1>
                    <p className={styles.subtitle}>Oferim soluții web complete prin abonamente lunare transparente</p>
                </section>

                <section className={styles.contentSection}>
                    <div className={styles.card}>
                        <h2>Misiunea Noastră</h2>
                        <p>Înființată în 2025 la Suceava, ne propunem să democratizăm accesul la site-uri web de calitate profesională. Transformăm site-uri învechite sau absente în instrumente eficiente de business cu costuri lunare predictibile.</p>
                    </div>

                    <div className={styles.card}>
                        <h2>Modelul Inovator</h2>
                        <p>Am dezvoltat un sistem unic care combină:</p>
                        <ul>
                            <li><strong>Abonamente lunare</strong> (1500 RON/lună) cu tot inclus</li>
                            <li><strong>Șabloane inteligente</strong> pentru livrare în 2-3 zile</li>
                            <li><strong>Tehnologii enterprise</strong> (React, AWS Cloud)</li>
                            <li><strong>Suport 24/7</strong> și mentenanță continuă</li>
                        </ul>
                        <p>Eliminăm costurile inițiale mari și oferim soluții scalabile.</p>
                    </div>

                    <div className={styles.card}>
                        <h2>De ce Abonamente?</h2>
                        <p>Am adoptat acest model pentru că:</p>
                        <ul>
                            <li><strong>Reduce barierele de intrare</strong> pentru IMM-uri</li>
                            <li><strong>Asigură mentenanță continuă</strong> și actualizări</li>
                            <li><strong>Oferă predictibilitate</strong> financiară ambelor părți</li>
                            <li><strong>Creează parteneriate pe termen lung</strong></li>
                            <li><strong>Permite scalarea ușoară</strong> a serviciilor</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2>Tehnologii și Procese</h2>
                        <p>Operăm cu stack-ul modern:</p>
                        <div className={styles.techStack}>
                            <div>
                                <h3>Frontend</h3>
                                <p>React, Angular, Next.js</p>
                            </div>
                            <div>
                                <h3>Backend</h3>
                                <p>Spring Boot, .Net</p>
                            </div>
                            <div>
                                <h3>Infrastructură</h3>
                                <p>AWS (S3, CloudFront, RDS)</p>
                            </div>
                            <div>
                                <h3>Baze de Date</h3>
                                <p>SQLite, MySQL</p>
                            </div>
                        </div>
                        <p>Procesul nostru include demo gratuit, design rapid pe șabloane pre-optimizate și livrare în maxim 72 de ore.</p>
                    </div>

                    <div className={styles.card}>
                        <h2>Valori Fundamentale</h2>
                        <div className={styles.valuesGrid}>
                            <div>
                                <h3>Transparență</h3>
                                <p>Prețuri clare, fără costuri ascunse</p>
                            </div>
                            <div>
                                <h3>Viteză</h3>
                                <p>Site-uri livrate în 48-72h</p>
                            </div>
                            <div>
                                <h3>Performanță</h3>
                                <p>Scor PageSpeed ≥90/100 garantat</p>
                            </div>
                            <div>
                                <h3>Suport 24/7</h3>
                                <p>Asistență tehnică non-stop</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2>Gata pentru un site modern fără investiție inițială?</h2>
                        <a href="https://forms.gle/93V4aza89268hZ8MA" className={styles.ctaButton}>Solicită Demo Gratuit</a>
                        <p>Transformă online-ul tău în doar 72 de ore cu abonamentul nostru lunar</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};

export default AboutPage;