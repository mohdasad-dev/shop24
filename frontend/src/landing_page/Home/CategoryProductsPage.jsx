import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { Row, Col, Card } from "react-bootstrap";

const CategoryProductsPage = () => {
  const { name } = useParams();

  const filteredProducts = products.filter((p) => p.category === name);

  return (
    <div className="container my-4 my-md-5">
      <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 2rem)", fontWeight: 700 }}>{name}</h2>

      <Row className="mt-3 mt-md-4 g-2 g-md-3">
        {filteredProducts.map((item) => (
          <Col xs={6} sm={4} md={3} key={item.id}>
            <Card className="p-2 p-md-3 shadow-sm h-100">
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <img
                  src={item.images}
                  alt={item.name}
                  className="img-fluid w-100"
                  style={{ height: "140px", objectFit: "cover" }}
                />
              </div>
              <h5
                className="mt-2 mb-0"
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

export default CategoryProductsPage;