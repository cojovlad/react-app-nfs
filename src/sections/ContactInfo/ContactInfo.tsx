import React from 'react';

import styles from './ContactInfo.module.css';

const ContactInfo: React.FC = () => {
    return (
        <div className={styles.contactContainer}>
            <h2>Informații de Contact</h2>

            <div className={styles.infoItem}>
                <h3>Locație</h3>
                <p>str. Ostra, Suceava, România</p>
            </div>

            <div className={styles.infoItem}>
                <h3>Telefon</h3>
                <p>
                    <a href="tel:+400741575993">+40 (0741)-575-993</a>
                </p>
                <p>
                    <a href="tel:+400746051962">+40 (0746)-051-962</a>
                </p>
            </div>

            <div className={styles.infoItem}>
                <h3>Email</h3>
                <p><a href="mailto:newfoldersolution.contact@gmail.com">newfoldersolution.contact@gmail.com</a></p>
            </div>
        </div>
    );
};

export default ContactInfo;
