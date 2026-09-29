import React, { useState } from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageContainer>
      <SectionTitle
        tag="Get In Touch"
        title="Contact FATIA Administrative Office"
        subtitle="Official administrative office contact details and correspondence portal for the Federation of All Trade & Industry Associations of Erode District."
      />

      <div className="contact-grid">
        {/* Official Administrative Office Details Card */}
        <div className="contact-info-card">
          <span className="contact-reg-badge">Regd. No: 86/99</span>
          <h2 className="contact-org-title">
            FEDERATION OF ALL TRADE & INDUSTRY ASSOCIATIONS OF ERODE DISTRICT
          </h2>
          <div className="contact-org-tamil">
            ஈரோடு மாவட்ட அனைத்து தொழில் வணிக சங்கங்களின் கூட்டமைப்பு
          </div>

          <div className="contact-detail-group">
            {/* Address */}
            <div className="contact-detail-item">
              <div className="contact-detail-icon-box">
                <svg className="contact-detail-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Administrative Office Address</div>
                <div className="contact-detail-value">
                  3, Vivekananda Street, Veerappampalayam,<br />
                  Erode - 638 012, Tamil Nadu, India.
                  <div style={{ marginTop: '10px' }}>
                    <a
                      href="https://maps.app.goo.gl/zjJXHsiLddey3Spd7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-map-inline-link"
                    >
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '6px', verticalAlign: 'text-bottom' }}>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      Get Directions on Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile / Cell */}
            <div className="contact-detail-item">
              <div className="contact-detail-icon-box">
                <svg className="contact-detail-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Official Cell / Phone</div>
                <div className="contact-detail-value">
                  <a href="tel:9842333356" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +91 98423 33356
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="contact-detail-item">
              <div className="contact-detail-icon-box">
                <svg className="contact-detail-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Official Email</div>
                <div className="contact-detail-value">
                  <a href="mailto:fatia.erode@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    fatia.erode@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="contact-detail-item">
              <div className="contact-detail-icon-box">
                <svg className="contact-detail-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Social Media</div>
                <div className="contact-social-btns">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="contact-social-btn facebook"
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="contact-social-btn instagram"
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="contact-form-card">
          <h3 className="contact-form-title">Send a Direct Message</h3>

          {submitted ? (
            <div className="contact-success-box">
              <div className="contact-success-icon">
                <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <h4 className="contact-success-title">
                Thank You for Contacting Us
              </h4>
              <p className="contact-success-text">
                Your message has been logged. The FATIA administrative office team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form-row">
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number (10 Digits)</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="10 digits"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({ ...formData, phone: val });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="Association membership, Expo query..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  required
                  className="form-textarea"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-submit-wrapper">
                <button type="submit" className="btn-primary-gold contact-submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps Integration Section */}
      <div className="contact-map-card">
        <div className="contact-map-header">
          <div>
            <h3 className="contact-map-title">FATIA Sakthi Masala Hall</h3>
          </div>
          <a
            href="https://maps.app.goo.gl/zjJXHsiLddey3Spd7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gold contact-map-cta-btn"
          >
            Open in Google Maps 🗺️
          </a>
        </div>

        <div className="contact-map-iframe-container">
          <iframe
            title="FATIA Shakthi Masala Hall Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.758963503164!2d77.702582!3d11.352358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f015b630e61%3A0xb0046522c0953a1a!2sVeerappampalayam%2C%20Erode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
