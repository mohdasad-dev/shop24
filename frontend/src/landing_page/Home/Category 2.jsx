// import React from 'react'

// function Category() {
//     return (
//         <h1>Category</h1>
//     );
// }



// import React from "react";

// const CATEGORIES = [
//   {
//     id: 1,
//     name: "Sides",
//     image: "/media/images/sides.webp",
//     badge: null,
//   },
//   {
//     id: 2,
//     name: "Dessert",
//     image: "/media/images/dessert.webp",
//     badge: null,
//   },
//   {
//     id: 3,
//     name: "Super Saver Trio",
//     image: "/media/images/super-saver.webp",
//     badge: null,
//   },
//   {
//     id: 4,
//     name: "International Menu",
//     image: "/media/images/international.webp",
//     badge: { text: "JUST LAUNCHED", color: "#2e7d32" },
//   },
//   {
//     id: 5,
//     name: "Signature Flavours",
//     image: "/media/images/signature.webp",
//     badge: { text: "FESTIVE SPECIAL", color: "#2e7d32" },
//   },
//   {
//     id: 6,
//     name: "Season's Specials ( 4 In 1 )",
//     image: "/media/images/seasons.webp",
//     badge: { text: "4 IN 1", color: "#2e7d32" },
//   },
//   {
//     id: 7,
//     name: "Meals & Combos",
//     image: "/media/images/meals.webp",
//     badge: null,
//   },
//   {
//     id: 8,
//     name: "Combo",
//     image: "/media/images/combo.webp",
//     badge: null,
//   },
// ];

// function Category() {
//   return (
//     <>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
//       />
//       <style>{`
//         :root { --green: #1a6b2f; }

//         .categories-section {
//           background-color: #dde8dc;
//         }

//         .section-title {
//           font-size: 1.3rem;
//           font-weight: 800;
//           letter-spacing: 1.5px;
//           color: #1a1a1a;
//           text-transform: uppercase;
//         }
//         .section-title::before,
//         .section-title::after {
//           content: '';
//           display: inline-block;
//           width: 80px;
//           height: 1.5px;
//           background: #aaa;
//           vertical-align: middle;
//           margin: 0 14px;
//         }

//         .cat-card {
//           background: #fff;
//           border-radius: 16px;
//           overflow: hidden;
//           cursor: pointer;
//           transition: transform .2s, box-shadow .2s;
//           border: none;
//         }
//         .cat-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 12px 32px rgba(0,0,0,.14) !important;
//         }

//         .cat-img-wrap {
//           width: 100%;
//           height: 175px;
//           overflow: hidden;
//           position: relative;
//           background: #2a2a2a;
//         }
//         .cat-img-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         .cat-badge {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           background: #2e7d32;
//           color: #fff;
//           font-size: 10px;
//           font-weight: 800;
//           padding: 4px 10px;
//           border-radius: 20px;
//           letter-spacing: .4px;
//           white-space: nowrap;
//         }

//         .cat-name {
//           font-size: 14px;
//           font-weight: 600;
//           color: #1a1a1a;
//           text-align: center;
//           padding: 12px 10px;
//         }

//         .btn-view-all {
//           background: var(--green);
//           color: #fff;
//           border: none;
//           border-radius: 30px;
//           padding: 10px 36px;
//           font-size: 15px;
//           font-weight: 700;
//           transition: background .2s, transform .15s;
//         }
//         .btn-view-all:hover {
//           background: #145224;
//           color: #fff;
//           transform: scale(1.04);
//         }
//       `}</style>

//       <section className="categories-section py-5">
//         <div className="container">

//           {/* Section Title */}
//           <h2 className="section-title text-center mb-4">Explore Categories</h2>

//           {/* Grid */}
//           <div className="row g-3">
//             {CATEGORIES.map((cat) => (
//               <div className="col-6 col-md-3" key={cat.id}>
//                 <div className="cat-card shadow-sm">

//                   {/* Image */}
//                   <div className="cat-img-wrap">
//                     <img src={cat.image} alt={cat.name} />
//                     {cat.badge && (
//                       <span className="cat-badge">{cat.badge.text}</span>
//                     )}
//                   </div>

//                   {/* Name */}
//                   <div className="cat-name">{cat.name}</div>

//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View All Button */}
//           <div className="d-flex justify-content-center mt-4">
//             <button className="btn-view-all">View All</button>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

// export default Category;




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
            // <Col xs={6} md={3} key={cat.id}>
            //   <Card className="border-0 shadow-sm h-100 text-center">

            //     <div style={{ height: "300px", overflow: "hidden", position: "relative" }}>
            //       <Card.Img
            //         src={cat.image}
            //         style={{ height: "100%", objectFit: "cover" }}
            //       />

            //       {cat.badge && (
            //         <Badge bg="success" className="position-absolute top-0 end-0 m-2">
            //           {cat.badge}
            //         </Badge>
            //       )}
            //     </div>

            //     <Card.Body>
            //       <Card.Title style={{ fontSize: "14px" }}>
            //         {cat.name}
            //       </Card.Title>
            //     </Card.Body>

            //   </Card>
            // </Col>
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
            // <Col xs={6} md={3} key={item.id}>
            //   <Card className="border-0 shadow-sm h-100">

            //     <Card.Img
            //       variant="top"
            //       src={item.image}
            //       style={{ height: "200px", objectFit: "cover" }}
            //     />

            //     <Card.Body>

            //       <Card.Title className="small fw-semibold">
            //         {item.name}
            //       </Card.Title>

            //       <div className="d-flex justify-content-between align-items-center">

            //         <span className="fw-bold">
            //           ₹{item.price}
            //         </span>

            //         <Button size="sm" variant="success" className="rounded-pill">
            //           View
            //         </Button>

            //       </div>

            //     </Card.Body>

            //   </Card>
            // </Col>



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