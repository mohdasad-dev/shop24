import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',               path: '/' },
  { label: 'Store Locator',      path: '/store-locator' },
  { label: 'Franchise Enquiry',  path: '/franchise' },
  { label: 'Contact Us',         path: '/contact' },
];

function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const drawerRef = useRef(null);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (menuOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Close drawer on route change / link click */
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      {/* ── Navbar ── */}
      <nav
        className={`s24-navbar${scrolled ? ' scrolled' : ''}`}
        ref={drawerRef}
      >
        <div className="s24-navbar-inner">

          {/* ── Logo ── */}
          <NavLink to="/" className="s24-logo" onClick={handleLinkClick}>
            <img
              src="media/images/logo.webp"
              alt="Shop24Hours logo"
              className="s24-logo-img"
            />
            <span className="s24-logo-text">
              SHOP<span>24</span>HOUR
            </span>
          </NavLink>

          {/* ── Desktop Links ── */}
          
          <ul className="s24-nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `s24-nav-link${isActive ? ' active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ── Desktop Actions ── */}
          <div className="s24-nav-actions">
            <button className="s24-btn-cart" aria-label="Cart">
              {/* <i className="fa-solid fa-cart-arrow-down" /> */}
              <i class="fa-solid fa-cart-arrow-down"></i>
              <span className="s24-cart-badge">0</span>
            </button>
            <button className="s24-btn-profile">
              <i className="bi bi-person-circle" /> Profile
            </button>
            <button className="s24-btn-order">
              Order Now <i className="bi bi-arrow-right" />
            </button>
          </div>

          {/* ── Mobile: cart + hamburger ── */}
          <div className="s24-mobile-bar">
            <button className="s24-btn-cart" aria-label="Cart">
              {/* <i className="bi bi-cart3" /> */}
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="s24-cart-badge">0</span>
            </button>
            <button
              className={`s24-hamburger${menuOpen ? ' open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`s24-drawer-overlay${menuOpen ? ' visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer ── */}
      <div className={`s24-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>

        {/* Drawer header */}
        <div className="s24-drawer-hdr">
          <NavLink to="/" className="s24-logo" onClick={handleLinkClick}>
            <img src="media/images/logo.webp" alt="Shop24Hours logo" className="s24-logo-img" />
            <span className="s24-logo-text">Shop<span>24</span>Hours</span>
          </NavLink>
          <button
            className="s24-drawer-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            {/* <i className="bi bi-x-lg" /> */}
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="s24-drawer-nav">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `s24-drawer-link${isActive ? ' active' : ''}`
              }
              onClick={handleLinkClick}
            >
              {link.label}
              <i className="bi bi-chevron-right s24-drawer-arrow" />
            </NavLink>
          ))}
        </nav>

        {/* Drawer footer actions */}
        <div className="s24-drawer-footer">
          <button className="s24-btn-profile s24-drawer-btn-profile">
            <i className="bi bi-person-circle" /> My Profile
          </button>
          <button className="s24-btn-order s24-drawer-btn-order">
            Order Now <i className="bi bi-arrow-right" />
          </button>
        </div>

      </div>
    </>
  );
}

export default Navbar;