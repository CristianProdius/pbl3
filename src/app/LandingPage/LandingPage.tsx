import React from 'react';
import Image from 'next/image';
import './LandingPage.css';


const LandingPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="logo">ken</div>
        <nav className="nav-menu">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <section className="hero-section">
        <img src="/images/laptop-good.png" alt="Computer Mockup" className="hero-image" />
        <h2 className="sub-heading">For B2B businesses with high-ticket services & products</h2>
      </section>

      <section className="call-to-action">
        <h2>AI emails for humans</h2>
        <p>
          From qualified leads to closed deals. Ken AI finds, engages, and converts your ideal clients, all on autopilot.
        </p>
      </section>

      <div>
        <img
          src="/images/laptop-glasses.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default LandingPage;