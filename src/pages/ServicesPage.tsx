import React from 'react';
import MainLayout from '../components/MainLayout';

const ServicesPage: React.FC = () => {
    return (
        <MainLayout>
            <section>
                <h1>Our Services</h1>
                <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                </ul>
            </section>
        </MainLayout>
    );
};

export default ServicesPage;