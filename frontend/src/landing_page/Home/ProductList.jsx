import React from "react";
import { products } from "../data/data";
import { Card, Row, Col } from "react-bootstrap";

const ProductList = ({ selectedCategory }) => {
  const filtered = products.filter((p) => p.category === selectedCategory);

  return (
    <div className="mt-4 mt-md-5">
      <h3 style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.75rem)", fontWeight: 700 }}>
        {selectedCategory} Products
      </h3>

      <Row className="mt-3 g-2 g-md-3">
        {filtered.map((item) => (
          <Col xs={6} sm={4} md={3} key={item.id}>
            <Card className="p-2 p-md-3 shadow-sm h-100">
              <h5
                className="mb-0"
                style={{ fontSize: "clamp(12px, 2.5vw, 16px)", fontWeight: 600 }}
              >
                {item.name}
              </h5>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;