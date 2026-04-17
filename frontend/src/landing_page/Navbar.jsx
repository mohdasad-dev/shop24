import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Store Locator', path: '/store-locator' },
  { label: 'Franchise Enquiry', path: '/franchise' },
  { label: 'Contact Us', path: '/contact' },
];


function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Navbar ── */}
      {/* <nav  className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top py-0"> */}
      <nav className={`navbar navbar-expand-lg navbar-shop sticky-top py-0 ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-3 px-lg-4" style={{ height: 64 }}>

          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center gap-2 me-4 py-0" href="#">
            <img
              src="media/images/logo.webp"
              alt="logo"
              className="d-block py-1"
              height="52"
            />
            <span className="logo-text">Shop<span>24</span>Hours</span>
          </a>

          {/* Mobile: cart + toggler */}
          <div className="d-flex align-items-center gap-2 d-lg-none ms-auto">
            <button className="btn btn-cart-nav position-relative">
              <i className="bi bi-cart3" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: 9 }}>
                0
              </span>
            </button>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navDrawer"
              aria-controls="navDrawer"
              aria-expanded="false"
            >
              <i className="bi bi-list" />
            </button>
          </div>

          {/* Collapsible */}
          <div className="collapse navbar-collapse" id="navDrawer">

            {/* Desktop links */}

            <ul className="navbar-nav me-auto gap-2 d-none d-lg-flex ms-auto">
              {NAV_LINKS.map(link => (
                <li className="nav-item" key={link.label}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link nav-link-item ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile links */}

            <div className="d-lg-none py-2 px-1">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>  
                    `nav-link nav-link-item d-block ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop right actions */}
            <div className="d-none d-lg-flex align-items-center gap-2">
              <button className="btn btn-cart-nav position-relative">
                {/* <i className="bi bi-cart3" /> */}
                <i class="fa-solid fa-cart-arrow-down"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: 9 }}>
                  0
                </span>
              </button>
              <button className="btn btn-profile-nav px-3 py-2">
                <i className="bi bi-person-circle me-1" />Profile
              </button>
              <button className="btn btn-order-nav px-3 py-2 bg-black">
                Order Now <i className="bi bi-arrow-right" />
              </button>
            </div>

          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;

