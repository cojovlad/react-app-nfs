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
                <p>+40 (0741)-575-993</p>
                <p>+40 (0746)-051-962</p>
            </div>

            <div className={styles.infoItem}>
                <h3>Email</h3>
                <p>newfoldersolution.contact@gmail.com</p>
            </div>

            {/*<div className={styles.infoItem}>*/}
            {/*    <h3>Recenzii Google</h3>*/}
            {/*    <div className={styles.rating}>★★★★★ (4.9/5)</div>*/}
            {/*</div>*/}
        </div>
    );
};

export default ContactInfo;
