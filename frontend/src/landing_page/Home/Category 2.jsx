import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

const CATEGORIES = [
  { id: 1, name: "Sides", image: "https://plus.unsplash.com/premium_photo-1664391811784-53a136d9ab16?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Dessert", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Momos", image: "https://images.unsplash.com/photo-1664138218128-2dcf791a9d27?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Burger", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", badge: "JUST LAUNCHED" },
  { id: 5, name: "Sandwich", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", badge: "FESTIVE SPECIAL" },
  { id: 6, name: "Italian", image: "https://plus.unsplash.com/premium_photo-1664472634106-1430c3973e68?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", badge: "4 IN 1" },
  { id: 7, name: "Meals & Combos", image: "https://images.unsplash.com/photo-1627955280978-f54fff2f316a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Biryani", image: "https://images.unsplash.com/photo-1705174299330-939dd03cc864?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D" },
];

const BEST_SELLERS = [
  { id: 1, name: "Farm Villa Pizza", price: 225, image: "https://plus.unsplash.com/premium_photo-1667682942060-977925f9a54b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Burn To Hell Pizza", price: 225, image: "https://media.istockphoto.com/id/531674893/photo/traditional-italian-pizza-in-the-wood-oven.jpg?s=2048x2048&w=is&k=20&c=YZ64H4apM931vCcI4zYgM3ZgD0R2RVAIMQkhxXFFjec=" },
  { id: 3, name: "Cheezy-7 Pizza", price: 245, image: "https://plus.unsplash.com/premium_photo-1674147605295-53b30e11d8c0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Paneer Tikka Pizza", price: 255, image: "https://media.istockphoto.com/id/1209458973/photo/paneer-tikka-butter-masala-pizza.jpg?s=2048x2048&w=is&k=20&c=Dv5Yqs5JG9N41UKmMsR2MrWzLngXcGrLosVA_Pe7qug=" },
];

function Category() {
  return (
    <section className="py-5" style={{ backgroundColor: "#dde8dc" }}>
      <Container>

        {/* Categories Title */}
        <h2 className="text-center fw-bold mb-4 text-uppercase">
          Explore Categories
        </h2>

        {/* Categories Grid */}
        <Row className="g-3">
          {CATEGORIES.map((cat) => (
            <Col xs={6} md={3} key={cat.id}>
              <Card className="category-card border-0 shadow-sm h-100 text-center">

                <div className="category-img-wrapper" style={{ height: "300px" }}>
                  <Card.Img
                    src={cat.image}
                    style={{ height: "100%", objectFit: "cover" }}
                  />

                  <div className="category-overlay"></div>

                  {cat.badge && (
                    <Badge bg="success" className="position-absolute top-0 end-0 m-2">
                      {cat.badge}
                    </Badge>
                  )}
                </div>

                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    {cat.name}
                  </Card.Title>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

        {/* View All Button */}
        <div className="text-center mt-4 mb-5">
          <Button variant="success" className="px-4 rounded-pill fw-bold">
            View All
          </Button>
        </div>


        {/* ================= BEST SELLERS SECTION ================= */}

        <h2 className="text-center fw-bold mb-4 text-uppercase">
          Explore Our Best Sellers
        </h2>

        <Row className="g-4">
          {BEST_SELLERS.map((item) => (
            <Col xs={6} md={3} key={item.id}>
              <Card className="product-card border-0 shadow-sm h-100">

                <div className="product-img-wrapper">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>

                <Card.Body>

                  <Card.Title className="small fw-semibold">
                    {item.name}
                  </Card.Title>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">₹{item.price}</span>

                    <Button size="sm" variant="success" className="rounded-pill">
                      View
                    </Button>
                  </div>

                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default Category;