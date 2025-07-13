import React from 'react';

import styles from './ServicesPage.module.css';

import MainLayout from "../../components/MainLayout";

const ServicesPage: React.FC = () => {
    return (
        <MainLayout>
            <div className={styles.servicesPage}>
                <section className={styles.pageHeader}>
                    <h1>Modele de Servicii Web</h1>
                    <p>Alege soluția perfectă pentru prezența ta online</p>
                </section>

                <section className={styles.modelsSection}>
                    <div className={styles.modelCard}>
                        <div className={styles.modelHeader}>
                            <h2>Model A: Abonament Lunar</h2>
                            <div className={styles.priceTag}>1500 RON/lună</div>
                        </div>

                        <div className={styles.modelContent}>
                            <h3>Perfect pentru:</h3>
                            <ul>
                                <li>Întreprinderi mici și mijlocii</li>
                                <li>Site-uri informative/prezentare</li>
                                <li>Companii care preferă costuri lunare predictibile</li>
                            </ul>

                            <h3>Inclus în abonament:</h3>
                            <div className={styles.featureGrid}>
                                <div className={styles.featureCard}>
                                    <h4>Domeniu</h4>
                                    <p>Înregistrare și reînnoire anuală</p>
                                </div>
                                <div className={styles.featureCard}>
                                    <h4>Suport Tehnic</h4>
                                    <p>Asistență 24/7 cu răspuns în 4 ore</p>
                                </div>
                                <div className={styles.featureCard}>
                                    <h4>Mentenanță</h4>
                                    <p>Actualizări, backup-uri, securitate</p>
                                </div>
                                <div className={styles.featureCard}>
                                    <h4>Cereri Minore</h4>
                                    <p>Modificări nelimitate sub 4 ore</p>
                                </div>
                                <div className={styles.featureCard}>
                                    <h4>Tehnologii Frontend</h4>
                                    <p>React/Angular</p>
                                </div>
                                <div className={styles.featureCard}>
                                    <h4>Tehnologii Backend</h4>
                                    <p>Spring Boot/.Net</p>
                                </div>
                                <div className={styles.featureCard}>
                                    <h4>Infrastructură AWS</h4>
                                    <p>S3, CloudFront, Load Balancer, RDS</p>
                                </div>
                            </div>

                            <h3>Condiții contractuale:</h3>
                            <ul>
                                <li>Durată minimă 12 luni</li>
                                <li>Reînnoire automată lunară</li>
                                <li>Reziliere cu preaviz de 30 de zile</li>
                                <li>Preț garantat pe toata durata colaborării</li>
                            </ul>
                        </div>

                        <div className={styles.ctaContainer}>
                            <a href="/contact" className={styles.primaryCta}>Solicită Demo</a>
                        </div>
                    </div>

                    <div className={styles.modelCard}>
                        <div className={styles.modelHeader}>
                            <h2>Model B: Proiect Personalizat</h2>
                            <div className={styles.priceTag}>De la 600 RON/Story Point</div>
                        </div>

                        <div className={styles.modelContent}>
                            <h3>Perfect pentru:</h3>
                            <ul>
                                <li>Soluții complexe (e-commerce, SaaS)</li>
                                <li>Aplicații cu funcționalități personalizate</li>
                                <li>Companii care preferă deținere cod completă</li>
                            </ul>

                            <h3>Proces de lucru:</h3>
                            <div className={styles.processSteps}>
                                <div className={styles.step}>
                                    <div className={styles.stepNumber}>1</div>
                                    <div className={styles.stepContent}>
                                        <h4>Workshop Inițial</h4>
                                        <p>Definire cerințe și estimare</p>
                                    </div>
                                </div>
                                <div className={styles.step}>
                                    <div className={styles.stepNumber}>2</div>
                                    <div className={styles.stepContent}>
                                        <h4>Estimare T-Shirt</h4>
                                        <p>Clasificare complexitate (XS-XXL)</p>
                                    </div>
                                </div>
                                <div className={styles.step}>
                                    <div className={styles.stepNumber}>3</div>
                                    <div className={styles.stepContent}>
                                        <h4>Dezvoltare</h4>
                                        <p>Implementare și teste</p>
                                    </div>
                                </div>
                                <div className={styles.step}>
                                    <div className={styles.stepNumber}>4</div>
                                    <div className={styles.stepContent}>
                                        <h4>Livrare</h4>
                                        <p>Predare cod sursă și documentație</p>
                                    </div>
                                </div>
                            </div>

                            <h3>Tarifare pe complexitate:</h3>
                            <div className={styles.pricingTable}>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Complexitate</th>
                                        <th>Story Points</th>
                                        <th>Cost Estimativ</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>XS (Foarte simplu)</td>
                                        <td>1-2 SP</td>
                                        <td>600-1200 RON</td>
                                    </tr>
                                    <tr>
                                        <td>S (Simplu)</td>
                                        <td>3 SP</td>
                                        <td>1800 RON</td>
                                    </tr>
                                    <tr>
                                        <td>M (Mediu)</td>
                                        <td>5 SP</td>
                                        <td>3000 RON</td>
                                    </tr>
                                    <tr>
                                        <td>L (Complex)</td>
                                        <td>8 SP</td>
                                        <td>4800 RON</td>
                                    </tr>
                                    <tr>
                                        <td>XL (Foarte complex)</td>
                                        <td>13 SP</td>
                                        <td>7800 RON</td>
                                    </tr>
                                    <tr>
                                        <td>XXL (Enterprise)</td>
                                        <td>21 SP</td>
                                        <td>12600 RON</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>Inclus în cost:</h3>
                            <ul>
                                <li>Dezvoltare backend (Spring Boot/.Net) și frontend (React/Angular)</li>
                                <li>Dezvoltare frontend (React/Angular)</li>
                                <li>Dezvoltare baze de date (SQLite/MySQL)</li>
                                <li>Documentație tehnică completă</li>
                                <li>Găzduire AWS primele 30 de zile</li>
                                <li>Suport tehnic 30 de zile post-livrare</li>
                            </ul>
                        </div>

                        <div className={styles.ctaContainer}>
                            <a href="/contact" className={styles.secondaryCta}>Solicită Estimare</a>
                        </div>
                    </div>
                </section>

                <section className={styles.comparisonSection}>
                    <h2>Comparație Modele</h2>
                    <div className={styles.comparisonGrid}>
                        <div className={styles.comparisonHeader}>
                            <div className={styles.headerItem}></div>
                            <div className={styles.headerItem}>Abonament Lunar</div>
                            <div className={styles.headerItem}>Proiect Personalizat</div>
                        </div>

                        <div className={styles.comparisonRow}>
                            <div className={styles.rowTitle}>Cost inițial</div>
                            <div className={styles.rowItem}>0 RON</div>
                            <div className={styles.rowItem}>50% din valoarea proiectului</div>
                        </div>

                        <div className={styles.comparisonRow}>
                            <div className={styles.rowTitle}>Deținere cod</div>
                            <div className={styles.rowItem}>Licență de utilizare</div>
                            <div className={styles.rowItem}>Deținere completă</div>
                        </div>

                        <div className={styles.comparisonRow}>
                            <div className={styles.rowTitle}>Găzduire</div>
                            <div className={styles.rowItem}>Inclusă</div>
                            <div className={styles.rowItem}>Primele 30 de zile</div>
                        </div>

                        <div className={styles.comparisonRow}>
                            <div className={styles.rowTitle}>Suport tehnic</div>
                            <div className={styles.rowItem}>24/7 pe durata contractului</div>
                            <div className={styles.rowItem}>30 de zile post-livrare</div>
                        </div>

                        <div className={styles.comparisonRow}>
                            <div className={styles.rowTitle}>Actualizări</div>
                            <div className={styles.rowItem}>Nelimitate (sub 4h)</div>
                            <div className={styles.rowItem}>Facturate separat</div>
                        </div>

                        <div className={styles.comparisonRow}>
                            <div className={styles.rowTitle}>Ideal pentru</div>
                            <div className={styles.rowItem}>Site-uri prezentare, bloguri</div>
                            <div className={styles.rowItem}>Aplicații complexe, e-commerce</div>
                        </div>
                    </div>
                </section>

                <section className={styles.contactSection}>
                    <h2>Nu ești sigur ce model ți se potrivește?</h2>
                    <p>Programează o consultație gratuită cu specialistul nostru</p>
                    <a href="/contact" className={styles.contactCta}>Contactează-ne acum</a>
                </section>
            </div>
        </MainLayout>
    );
};

export default ServicesPage;