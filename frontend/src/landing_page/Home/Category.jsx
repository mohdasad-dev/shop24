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
        {/* <Button
          variant="link"
          onClick={() => navigate("/categories")}
          style={{ whiteSpace: "nowrap", fontSize: "0.85rem" }}
        >
          See all →
        </Button> */}

        <Button
          variant="light"
          onClick={() => navigate("/categories")}
          className="px-3 py-1"
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#0c831f", // Professional grocery green
            backgroundColor: "#f7fff9", // Subtle green background
            border: "1px solid rgba(12, 131, 31, 0.2)",
            borderRadius: "8px",
            transition: "all 0.2s ease-in-out",
            whiteSpace: "nowrap"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#0c831f";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#f7fff9";
            e.currentTarget.style.color = "#0c831f";
          }}
        >
          See all <span style={{ marginLeft: "4px" }}>→</span>
        </Button>

      </div>

      {/* Category Cards */}
      <Row className="g-2 g-md-3">
        {categories.slice(0, 6).map((cat) => (
          <Col xs={4} sm={4} md={2} key={cat.id}>
            <div
              className="p-2 p-md-3 text-center shadow-sm h-100"
              style={{
                borderRadius: "16px",
                cursor: "pointer",
                backgroundColor: "#fff",
                border: "1px solid #f0f0f0"
              }}
            // onClick={() => navigate(`/category/${cat.name}`)}
            >
              {/* Image replaces the Icon div */}
              <div className="mb-2" style={{ overflow: "hidden" }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "80px", // Adjust size as needed
                    objectFit: "contain"
                  }}
                />
              </div>

              <h5
                className="mt-1 mt-md-2 mb-0"
                style={{ fontSize: "clamp(11px, 2.5vw, 14px)", fontWeight: 600, color: "#333" }}
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
