import React, { ReactNode } from 'react';

import styles from './Layout.module.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import ContactInfo from '../sections/ContactInfo/ContactInfo';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.sidebar}>
                    <ContactInfo />
                </div>
                <main className={styles.mainContent}>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;