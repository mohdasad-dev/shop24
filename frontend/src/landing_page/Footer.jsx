

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

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

  return (
    <footer>

      {/* Top Banner */}
      <div className="bg-success text-white py-5">
        <Container>
          <Row className="align-items-center">

            <Col lg={6}>
              <h2 className="fw-bold">
                Shop<span className="text-warning">24</span>Hours
              </h2>

              <p className="text-light">
                Trusted food brands, snacks, beverages, and essentials —
                always fresh, always ready, 24×7.
              </p>

              <div className="d-flex gap-3 mt-3">
                <a href="https://www.facebook.com/shop24hoursindia" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/shop24hours.india/" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
                <a href="https://wa.me/919810377247" target="_blank" rel="noopener noreferrer" className="text-white fs-5"> <i className="bi bi-whatsapp"></i> </a>
               
              </div>
            </Col>

            <Col lg={6}>
              <h5 className="fw-bold">
                Get Exclusive Deals in Your Inbox
              </h5>

              <p className="text-light small">
                Subscribe for weekly offers and new arrivals.
              </p>

              <div className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Button
                  variant="warning"
                  className="ms-2"
                  onClick={handleSubscribe}
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                </Button>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Footer Links */}
      <div className="bg-dark text-white py-5">
        <Container>
          <Row>

            <Col md={3}>
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <p>Home</p>
              <p>Store Locator</p>
              <p>Our Story</p>
              <p>Contact Us</p>
            </Col>

            <Col md={3}>
              <h6 className="fw-bold mb-3">Our Menu</h6>
              <p>Burger</p>
              <p>Momos</p>
              <p>Biryani</p>
              <p>Dessert</p>
            </Col>

            <Col md={3}>
              <h6 className="fw-bold mb-3">Policies</h6>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Refund Policy</p>
            </Col>

            <Col md={3}>
              <h6 className="fw-bold mb-3">Contact</h6>
              <p><i className="bi bi-telephone"></i> +91 9810377247 or 120-3222012.</p>
              <p><i className="bi bi-envelope"></i> divyamaan@shop24hours.com</p>
              <p><i className="bi bi-geo-alt"></i> Noida</p>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center text-light py-3">
        <Container>
          <small>
            © {new Date().getFullYear()} Shop24Hours. All rights reserved.
          </small>
        </Container>
      </div>

    </footer>
  );
}

export default Footer;

