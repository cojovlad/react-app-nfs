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
          <h2 className="headers">About us</h2>
          <section className='about'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet vehicula nisl. In hac habitasse platea dictumst. Maecenas ac ligula in quam malesuada interdum. Pellentesque a eleifend ex, vel vestibulum ante. Suspendisse tincidunt dapibus arcu. Maecenas vitae maximus ex. Etiam vestibulum id nisi nec porta. Quisque mattis ante urna, in lobortis purus ullamcorper quis. Nunc at ex a nisi condimentum feugiat. Phasellus semper lectus ut quam tristique tincidunt. Phasellus consectetur est nec massa hendrerit, nec ullamcorper augue ultricies. Suspendisse aliquet tellus vel tortor cursus fringilla. Phasellus id lectus feugiat leo molestie pellentesque at non arcu. Suspendisse in massa leo. Suspendisse id vehicula ante, at viverra odio. Suspendisse potenti.</p>
          </section>

          <h2 className='headers'>Contact us</h2>
          <section className='contacts'>
            <div className='contact'>
              <h3>Andrei-Florin Ilisoi</h3>
              <h2>0746051962</h2>
            </div>
            <div className='contact'>
              <h3>Vlad-Andrei Cojocariu</h3>
              <h2>0741575993</h2>
            </div>

          </section>
        </div>
        <div className='right'>
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