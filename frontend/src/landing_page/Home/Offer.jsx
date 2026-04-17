import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Offer() {
  return (
    <section className="py-5 text-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} xs={12}>

            <h1 className="fw-bold mb-3">
              ANYTIME. EVERYTHING. EASY.
            </h1>

            <p className="text-muted mb-4">
              Whether you’re craving a late-night snack, need groceries, or want a quick meal,
              Shop24Hours is always open — serving fresh food and essentials 24/7.

            </p>

            <Button
              className="px-4 py-2 fw-bold mb-3"
              style={{ background: "#e53e3e", border: "none" }}
            >
              Order Now

            </Button>

            <p className="text-muted small">
              Prefer visiting? Find your nearest store and walk in anytime.
            </p>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Offer;