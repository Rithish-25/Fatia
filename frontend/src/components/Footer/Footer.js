import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* About Column */}
          <div className="footer-about-col">
            <Logo height={58} />
            <div style={{
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '0.08em',
              color: 'var(--color-soft-gold)',
              backgroundColor: 'var(--color-soft-gold-light)',
              padding: '2px 10px',
              borderRadius: '12px',
              alignSelf: 'flex-start'
            }}>
              Regd. No: 86/99
            </div>
            <p className="footer-about-description">
              <strong>Federation of All Trade & Industry Associations of Erode District</strong>
              <br />
              <span style={{ fontSize: '0.88rem', color: 'var(--color-soft-gold)' }}>
                ஈரோடு மாவட்ட அனைத்து தொழில் வணிக சங்கங்களின் கூட்டமைப்பு
              </span>
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link-item">Home Overview</Link>
              </li>
              <li>
                <Link to="/members" className="footer-link-item">Member Associations (74)</Link>
              </li>
              <li>
                <Link to="/board" className="footer-link-item">Board & Leadership</Link>
              </li>
              <li>
                <Link to="/events" className="footer-link-item">Events & Conventions</Link>
              </li>
              <li>
                <Link to="/fair" className="footer-link-item">Technology Fairs (2014-2027)</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link-item" style={{ color: 'var(--color-soft-gold)', fontWeight: 'bold' }}>
                  Contact Us →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="footer-heading">Secretariat Office</h4>
            <div className="footer-contact-info">
              <p>3, Vivekananda Street, Veerappampalayam,<br />Erode - 638 012, Tamil Nadu, India.</p>
              <p><strong>Cell:</strong> <a href="tel:9842333356" style={{ color: 'inherit' }}>98423 33356</a></p>
              <p><strong>Email:</strong> <a href="mailto:fatia.erode@gmail.com" style={{ color: 'inherit' }}>fatia.erode@gmail.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} FATIA Association (Regd. No: 86/99). All rights reserved.</p>
          <p>Federation of All Trade & Industry Associations of Erode District</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
