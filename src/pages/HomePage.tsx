import React from 'react';
import MainLayout from '../components/MainLayout';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <About />
            <Services />
        </MainLayout>
    );
};

export default HomePage;