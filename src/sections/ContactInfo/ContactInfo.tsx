import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo: React.FC = () => {
    return (
        <div className={styles.contactContainer}>
            <h2>Contact Information</h2>

            <div className={styles.infoItem}>
                <h3>Location</h3>
                <p>123 Business Street, City, Country</p>
            </div>

            <div className={styles.infoItem}>
                <h3>Phone</h3>
                <p>+1 (123) 456-7890</p>
            </div>

            <div className={styles.infoItem}>
                <h3>Email</h3>
                <p>contact@firmname.com</p>
            </div>

            <div className={styles.infoItem}>
                <h3>Google Reviews</h3>
                <div className={styles.rating}>★★★★★ (4.9/5)</div>
            </div>
        </div>
    );
};

export default ContactInfo;