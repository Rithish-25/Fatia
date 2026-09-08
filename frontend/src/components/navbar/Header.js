import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import FairDropdown from './FairDropdown';
import MobileFairMenu from './MobileFairMenu';
import NavItem from './NavItem';
import '../../styles/Header.css';

const navItemsList = [
  { label: 'Home', route: '/' },
  { label: 'Members', route: '/members' },
  { label: 'Board', route: '/board' },
  { label: 'Events', route: '/events' },
  { label: 'Fair', route: '/fair', hasDropdown: true },
  { label: 'Contact Us', route: '/contact' }
];

const Header = () => {
  const [showFairDropdown, setShowFairDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isFairActive = location.pathname.startsWith('/fair');

  return (
    <header className="header-root">
      <div className="header-container">
        <Logo height={64} />

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItemsList.map((item) => {
            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="nav-item-dropdown-container"
                  onMouseEnter={() => setShowFairDropdown(true)}
                  onMouseLeave={() => setShowFairDropdown(false)}
                >
                  <NavItem
                    label={item.label}
                    route={item.route}
                    hasDropdown={true}
                    isDropdownActive={isFairActive}
                  />
                  {showFairDropdown && (
                    <FairDropdown onItemClick={() => setShowFairDropdown(false)} />
                  )}
                </div>
              );
            }

            return (
              <NavItem
                key={item.label}
                label={item.label}
                route={item.route}
              />
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          className="mobile-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/members"
            className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Members
          </NavLink>

          <NavLink
            to="/board"
            className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Board
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Events
          </NavLink>

          <MobileFairMenu onItemClick={() => {
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />

          <NavLink
            to="/contact"
            className={({ isActive }) => `mobile-drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
