import React from 'react';
import image from '../assets/homepage_image.png';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="main">
        <div className='left'>
          <header className="header">
            <h1 className="title">New Folder Solutions</h1>
            <p className="subtitle">We build modern websites that elevate your business.</p>
          </header>

          <img src={image} alt="Company Banner" className="banner" />

          <section className="services">
            <div className="service">
              <h2>Custom Web Design</h2>
              <p>We create tailored websites that reflect your brand identity and engage your customers.</p>
            </div>
            <div className="service">
              <h2>Responsive Development</h2>
              <p>Our solutions work seamlessly on desktops, tablets, and smartphones.</p>
            </div>
            <div className="service">
              <h2>SEO & Performance</h2>
              <p>Optimized for search engines and blazing fast to help you grow online.</p>
            </div>
          </section>
        </div>
        <div className='right'>
          slides
        </div>
      </div>
      
      <footer>
        <div className="footer">
          &copy; {new Date().getFullYear()} New Folder Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;