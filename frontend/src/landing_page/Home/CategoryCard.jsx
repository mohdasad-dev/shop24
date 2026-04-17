import React from "react";
import { Card } from "react-bootstrap";

const CategoryCard = ({ category, onClick }) => {
  return (
    <Card
      className="text-center p-2 p-md-4 shadow-sm h-100"
      style={{ cursor: "pointer", borderRadius: "16px" }}
      onClick={() => onClick(category.name)}
    >
      <div style={{ fontSize: "clamp(20px, 5vw, 30px)" }}>{category.icon}</div>
      <h5
        className="mt-1 mt-md-3 mb-0"
        style={{ fontSize: "clamp(11px, 2.5vw, 16px)", fontWeight: 600 }}
      >
        {category.name}
      </h5>
    </Card>
  );
};

export default CategoryCard;