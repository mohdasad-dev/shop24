import React from "react";
import { promoCards, categories } from "../../data/data";
import { Row, Col, Container, Button } from "react-bootstrap";

const AllCategoriesPage = () => {
  return (
    <Container className="my-4">
      {/* 1. Top Banner */}
      <Row className="mb-4 justify-content-center">
        <Col xs={12}>
          <img
            src="/media/images/Anytime_Everything.png"
            alt="Banner"
            className="img-fluid rounded-4 w-100"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </Col>
      </Row>

      {/* 2. The 4 Service Cards (Promo Section) */}
      <Row className="g-3">
        {promoCards.map((card, index) => (
          <Col key={`promo-${index}`} xs={12} sm={6} lg={3}>
            <div
              className="p-3 h-100 border-0 rounded-4 d-flex flex-column justify-content-between shadow-sm"
              style={{ backgroundColor: card.color, minHeight: "160px" }}
            >
              <div>
                <h6 className="fw-bold mb-1" style={{ fontSize: "clamp(13px, 2.5vw, 16px)" }}>
                  {card.title}
                </h6>
                <p className="text-muted mb-3" style={{ fontSize: "0.75rem" }}>
                  {card.subtitle}
                </p>
                <Button
                  variant="dark"
                  size="sm"
                  className="rounded-pill px-3 py-1"
                  style={{ fontSize: "0.7rem" }}
                >
                  Order Now
                </Button>
              </div>
              <div className="text-end mt-2">
                <img src={card.img} alt="" style={{ height: "50px" }} />
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* 3. The Large Categories Grid */}
      <Row className="my-5 g-2 g-md-3 justify-content-center text-center">
        {categories.map((cat, index) => (
          <Col
            key={`cat-${index}`}
            xs={4}    /* 3 per row on phones */
            sm={3}    /* 4 per row on small tablets */
            md={2}    /* 6 per row on tablets */
            lg={2}    /* 6 per row on desktop */
            xl="auto" /* shrink to content on xl, constrained below */
            className="mb-3"
            style={{ minWidth: "90px", maxWidth: "150px" }}
          >
            <div className="category-card border-0 bg-transparent">
              <div className="mb-2 px-1">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                  style={{
                    borderRadius: "12px",
                    height: "70px",
                    width: "100%",
                    aspectRatio: "1/1",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p
                className="m-0 px-1"
                style={{
                  fontSize: "11px",
                  lineHeight: "1.2",
                  fontWeight: "500",
                  color: "#1f1f1f",
                  wordBreak: "break-word",
                }}
              >
                {cat.name}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllCategoriesPage;