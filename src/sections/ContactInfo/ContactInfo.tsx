import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

import styles from './ContactInfo.module.css';

const ContactInfo: React.FC = () => {

    const PhoneIcon = FiPhone as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
    const MailIcon = FiMail as React.FC<React.SVGProps<SVGSVGElement>>;

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
                    <a href="tel:+400741575993">
                        <PhoneIcon />
                        <span>  +40 (0741)-575-993</span>
                    </a>
                </p>
                <p>
                    <a href="tel:+400746051962">
                        <PhoneIcon />
                        <span>  +40 (0746)-051-962</span>
                    </a>
                </p>
            </div>

            <div className={styles.infoItem}>
                <h3>Email</h3>
                <p className={styles.email}>
                    <a href="mailto:newfoldersolution.contact@gmail.com">
                        <MailIcon />
                        <span>  newfoldersolution.contact@gmail.com</span>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;
