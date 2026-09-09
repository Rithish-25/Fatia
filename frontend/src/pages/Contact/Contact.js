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
        title="Contact FATIA Secretariat"
        subtitle="Official secretariat contact details and correspondence portal for the Federation of All Trade & Industry Associations of Erode District."
      />

      <div className="contact-grid">
        {/* Official Secretariat Details Card */}
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
                <div className="contact-detail-label">Secretariat Address</div>
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
                Your message has been logged. The FATIA secretariat team will get back to you shortly.
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
