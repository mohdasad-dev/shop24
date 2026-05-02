import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css";
import IdelyzeBadge from "./IdelyzeBadge";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubscribe();
  };

  return (
    <footer className="s24-footer">

      {/* ── Top Banner ── */}
      <div className="s24-footer-top">
        <Container>
          <Row className="align-items-center gy-4">

            {/* Left — Brand + Socials */}
            <Col xs={12} lg={6}>
              <h2 className="s24-footer-brand">
                SHOP<span>24</span>HOUR
              </h2>
              <p className="s24-footer-tagline">
                Trusted food brands, snacks, beverages, and essentials —
                always fresh, always ready, 24×7.
              </p>
              <div className="s24-socials">
                <a
                  href="https://www.facebook.com/shop24hoursindia"
                  className="s24-social-link"
                  aria-label="Facebook"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/shop24hours.india/"
                  className="s24-social-link"
                  aria-label="Instagram"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://wa.me/919810377247"
                  className="s24-social-link"
                  aria-label="WhatsApp"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </Col>

            {/* Right — Newsletter */}
            <Col xs={12} lg={6}>
              <div className="s24-newsletter-box">
                <h5 className="s24-newsletter-title">
                  Get Exclusive Deals in Your Inbox
                </h5>
                <p className="s24-newsletter-sub">
                  Subscribe for weekly offers and new arrivals.
                </p>
                <div className="s24-subscribe-row">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKey}
                    className="s24-email-input"
                    aria-label="Email address"
                  />
                  <Button
                    className="s24-subscribe-btn"
                    onClick={handleSubscribe}
                    disabled={subscribed}
                  >
                    {subscribed ? (
                      <><i className="bi bi-check-lg me-1" /> Subscribed!</>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* ── Footer Links ── */}
      <div className="s24-footer-links">
        <Container>
          <Row className="gy-4">

            {/* Quick Links */}
            <Col xs={6} sm={6} md={3}>
              <h6 className="s24-footer-col-title">Quick Links</h6>
              <ul className="s24-footer-list">
                {["Home", "Store Locator", "Our Story", "Contact Us"].map(l => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </Col>

            {/* Our Menu */}
            <Col xs={6} sm={6} md={3}>
              <h6 className="s24-footer-col-title">Our Menu</h6>
              <ul className="s24-footer-list">
                {["Burger", "Momos", "Biryani", "Dessert"].map(l => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </Col>

            {/* Policies */}
            <Col xs={6} sm={6} md={3}>
              <h6 className="s24-footer-col-title">Policies</h6>
              <ul className="s24-footer-list">
                {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map(l => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </Col>

            {/* Contact */}
            <Col xs={6} sm={6} md={3}>
              <h6 className="s24-footer-col-title">Contact</h6>
              <ul className="s24-footer-list s24-footer-contact">
                <li>
                  <i className="bi bi-telephone-fill" />
                  <span>+91 9810377247</span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill" />
                  <span>divyamaan@shop24hours.com</span>
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill" />
                  <span>Noida, India</span>
                </li>
              </ul>
            </Col>

          </Row>
        </Container>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="s24-footer-bottom">
        <Container>
          <div className="s24-footer-bottom-inner">
            <small>© {new Date().getFullYear()} Shop24Hour. All rights reserved.</small>
            {/* <small className="s24-footer-bottom-right">
              <IdelyzeBadge />
            </small> */}
            {/* <small className="s24-footer-bottom-right">
              Made with <span className="s24-heart">♥</span> in India
            </small> */}
          </div>
        </Container>
      </div>


    </footer>
  );
}

export default Footer;