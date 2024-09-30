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
      <img
        src="https://cdn.prod.website-files.com/65d3a43a6c7017547715c426/65d3a43a6c7017547715c613_imac.jpg"
        loading="lazy"
        style={{
          transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          opacity: 1,
          transformStyle: "preserve-3d"
        }}
        width="803"
        alt=""
        srcSet="https://cdn.prod.website-files.com/65d3a43a6c7017547715c426/65d3a43a6c7017547715c613_imac-p-500.jpg 500w, https://cdn.prod.website-files.com/65d3a43a6c7017547715c426/65d3a43a6c7017547715c613_imac-p-800.jpg 800w, https://cdn.prod.website-files.com/65d3a43a6c7017547715c426/65d3a43a6c7017547715c613_imac-p-1080.jpg 1080w, https://cdn.prod.website-files.com/65d3a43a6c7017547715c426/65d3a43a6c7017547715c613_imac-p-1600.jpg 1600w, https://cdn.prod.website-files.com/65d3a43a6c7017547715c426/65d3a43a6c7017547715c613_imac.jpg 1606w"
        sizes="(max-width: 991px) 90vw, 803px"
        className="imac"
      />
      <h2 className="sub-heading">For B2B businesses with high-ticket services & products</h2>
      <img
        src="/images/mouse.png"
        loading="lazy"
        style={{
          transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          opacity: 1,
          transformStyle: "preserve-3d"
        }}
        width="60"
        alt=""
        className="mouse"
      />
      <img
        src="/images/glasses.png"
        loading="lazy"
        style={{
          transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          opacity: 1,
          transformStyle: "preserve-3d"
        }}
        width="140"
        alt=""
        className="glasses"
      />
    </section>

    <section className="call-to-action">
      <h2>AI emails for humans</h2>
    </section>

      <div className="row">
        <div className="column">
          <img src="/images/pencils.png" alt="pencils"/>
        </div>
        <div className="column">
          <img src="/images/keyboard.png" alt="keyboard"/>
        </div>
        <div className="text-on-the-side">
          <h1>From qualified leads to closed deals. Ken AI finds, engages, and converts your ideal clients, all on autopilot.</h1>
        </div>
      </div>

<div className="numbers">

  {/*-- First Section --*/}
  <div className="number">
    <div className="counter-2">
      <div className="digits">
        <div className="sign-small-m">+</div>
        <div className="counter-numbers">
          <div className="tb-digit">50</div>
        </div>
        <div className="sign-small-m">k</div>
      </div>
      <p>Emails Sent per Month</p>
      <p>Thanks to our proprietary infrastructure, 98% of our emails land in the primary inbox.</p>
    </div>
  </div>

  {/*!-- Second Section --*/}
  <div className="number">
    <div className="counter-2">
      <div className="digits">
        <div className="sign-small-m">+</div>
        <div className="counter-numbers">
          <div className="tb-digit">150</div>
        </div>
        <div className="sign-small-m">k</div>
      </div>
      <p>Client Customers</p>
      <p>We've helped our clients get over 150k clients with cold outreach and other services.</p>
    </div>
  </div>

  {/*!-- Third Section --*/}
  <div className="number">
    <div className="counter-2">
      <div className="digits">
        <div className="counter-numbers">
          <div className="tb-digit">$20</div>
        </div>
        <div className="sign-small-m">M</div>
      </div>
      <p>Pipeline Value Generated</p>
      <p>Our qualified meetings are worth over $20M in our clients' pipelines.</p>
    </div>
  </div>
</div>

<div className='footer'>
  <div className='content'>
    <div className='footer-logo'>
      <img src="/images/logo.png" alt="logo"/>
    </div>
    
    <div className='pages-and-contact'>
      <div className='footer-pages'>
        <div className='footer-title-pages'>Pages</div>
        <div>

          <div className='footer-home'>
            <a href="/" data-w-id="c9750bca-cb69-6b7a-7824-738e1cdd3930" aria-current="page" className="footer-menu-link-2 w-inline-block w--current">
              <div>Home</div>
            </a>
          </div>

          <div className="footer-link">
            <a href="/about" data-w-id="c9750bca-cb69-6b7a-7824-738e1cdd3935" className="footer-menu-link-2 w-inline-block">
              <div>About Us</div>
            </a>
          </div>

          <div className='footer-link'>
          <a href="/case-studies" data-w-id="c9750bca-cb69-6b7a-7824-738e1cdd393a" className="footer-menu-link-2 w-inline-block">
            <div>Case Studies</div>
          </a>
          </div>

          <div className='footer-link'>
          <a href="#" className="footer-menu-link-2 w-inline-block">
            <div>Pricing</div>
          </a>
          </div>



      
      </div>
      </div>

      <div className='footer-contact'>
        <div className='footer-title-pages'>Inquiries</div>
        <div className='footer-top-margin'>
          <div>
            <a href="mailto:contact@mateai.com.co" className="dark-link-2">contact@ken.com.co</a>
          </div>
          <a href="tel:+13232500503" className="dark-link-2">+1 628 282 3319</a>
        </div>
        
      </div>
    
    </div>
  </div>

</div>




  </div>
  );
};

export default LandingPage;