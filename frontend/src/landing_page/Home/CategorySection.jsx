import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/data";

const CategorySection = ({ onSelectCategory }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="my-4 my-md-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 1.75rem)", fontWeight: 700, margin: 0 }}>
          Shop by Category
        </h2>
        <Button
          variant="link"
          onClick={() => setShowAll(!showAll)}
          style={{ whiteSpace: "nowrap", fontSize: "0.85rem" }}
        >
          {showAll ? "Show Less ←" : "See All →"}
        </Button>
      </div>

      {/* Categories */}
      <Row className="g-2 g-md-3">
        {visibleCategories.map((cat) => (
          <Col xs={4} sm={4} md={2} key={cat.id}>
            <CategoryCard category={cat} onClick={onSelectCategory} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategorySection;