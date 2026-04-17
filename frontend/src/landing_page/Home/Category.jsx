import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { categories } from "../../data/data";

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-4 my-md-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-4">
        <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 1.75rem)", fontWeight: 700, margin: 0 }}>
          Shop by Category
        </h2>
        <Button
          variant="link"
          onClick={() => navigate("/categories")}
          style={{ whiteSpace: "nowrap", fontSize: "0.85rem" }}
        >
          See all →
        </Button>
      </div>

      {/* Category Cards */}
      <Row className="g-2 g-md-3">
        {categories.slice(0, 6).map((cat) => (
          <Col xs={4} sm={4} md={2} key={cat.id}>
            <div
              className="p-2 p-md-4 text-center shadow-sm h-100"
              style={{ borderRadius: "16px", cursor: "pointer" }}
              onClick={() => navigate(`/category/${cat.name}`)}
            >
              <div style={{ fontSize: "clamp(20px, 5vw, 30px)" }}>{cat.icon}</div>
              <h5
                className="mt-1 mt-md-2 mb-0"
                style={{ fontSize: "clamp(11px, 2.5vw, 16px)", fontWeight: 600 }}
              >
                {cat.name}
              </h5>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;