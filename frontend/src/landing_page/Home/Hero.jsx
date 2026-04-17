// import React, { useState } from "react";
// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

// const ORDER_OPTIONS = [
//   {
//     id: "pickup",
//     label: "Pickup",
//     desc: "Collect from store",
//     icon: (
//       <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <rect x="4" y="18" width="24" height="10" rx="2" fill="#2d6a4f" opacity=".15" />
//         <rect x="8" y="14" width="16" height="6" rx="1.5" fill="#2d6a4f" opacity=".3" />
//         <rect x="11" y="8" width="10" height="8" rx="1.5" fill="#2d6a4f" />
//         <circle cx="10" cy="28" r="2.5" fill="#2d6a4f" />
//         <circle cx="22" cy="28" r="2.5" fill="#2d6a4f" />
//       </svg>
//     ),
//   },
//   {
//     id: "dinein",
//     label: "Dine In",
//     desc: "Enjoy at our table",
//     icon: (
//       <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <ellipse cx="16" cy="22" rx="10" ry="3" fill="#2d6a4f" opacity=".15" />
//         <rect x="13" y="10" width="6" height="12" rx="1" fill="#2d6a4f" opacity=".3" />
//         <circle cx="16" cy="8" r="4" fill="#2d6a4f" />
//         <rect x="6" y="21" width="20" height="2.5" rx="1.25" fill="#2d6a4f" />
//         <rect x="10" y="23.5" width="12" height="1.5" rx=".75" fill="#2d6a4f" opacity=".5" />
//       </svg>
//     ),
//   },
//   {
//     id: "incar",
//     label: "In Car",
//     desc: "Drive-up delivery",
//     icon: (
//       <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <rect x="3" y="16" width="26" height="10" rx="3" fill="#2d6a4f" opacity=".15" />
//         <path d="M7 16 L10 8 H22 L25 16" fill="#2d6a4f" opacity=".3" />
//         <path d="M7 16 L10 8 H22 L25 16" stroke="#2d6a4f" strokeWidth="1.5" fill="none" />
//         <rect x="3" y="15" width="26" height="6" rx="2" fill="#2d6a4f" />
//         <circle cx="9" cy="24" r="3" fill="#1b4332" />
//         <circle cx="23" cy="24" r="3" fill="#1b4332" />
//         <rect x="12" y="10" width="8" height="5" rx="1" fill="#b7e4c7" />
//       </svg>
//     ),
//   },
// ];

// const LOCATIONS = [
//   "MP Nagar",
//   "Arera Colony",
//   "New Market",
//   "Kolar Road",
//   "Hoshangabad Rd",
// ];

// export default function Hero() {
//   const [selected, setSelected] = useState(null);
//   const [location, setLocation] = useState("MP Nagar");

//   return (
//     <Container className="py-4">

//       {/* Video Section */}
//       <div className="mb-4 position-relative">
//         {/* <div className="flex col">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-100 rounded-4"
//             style={{ height: "680px", objectFit: "cover" }}>
//             <source src="/media/images/homevideo.mov" type="video/mp4" />
//           </video>
//         </div> */}






//         {/* Hero Section */}
//         <Row className="align-items-center mb-5 mt-5 h-50">

//           {/* LEFT: TEXT */}
//           <Col md={6} className="px-4">
//             <h1 className="fw-bold mb-3" style={{ fontSize: "3rem" }}>
//               Anytime. Everything. Easy.
//             </h1>

//             <p className="text-muted mb-3">
//               Whether it’s a late-night craving, a quick snack between work, or daily groceries you forgot to pick up — Shop24Hours is always ready for you.
//             </p>

//             <p className="text-muted mb-3">
//               We bring together freshly prepared food, beverages, and everyday essentials under one roof, so you never have to worry about closing hours again.
//             </p>

//             <p className="text-muted mb-4">
//               From burgers and momos to coffee and convenience items, everything you need is just a few clicks away — fast, fresh, and available 24/7.
//             </p>

//             <div className="d-flex gap-3">
//               <Button variant="success" size="lg">
//                 Order Now
//               </Button>

//               <Button variant="outline-dark" size="lg">
//                 Find Store
//               </Button>
//             </div>
//           </Col>

//           {/* RIGHT: VIDEO */}
//           <Col md={6}>
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-100 rounded-4 shadow-sm"
//               style={{ height: "300px", objectFit: "cover" }}
//             >
//               <source src="/media/images/homevideo.mov" type="video/mp4" />
//             </video>
//           </Col>

//         </Row>

//         {/* Text Overlay */}
//         {/* <div
//           className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
//           style={{ maxWidth: "700px" }}
//         >
//           <h1 className="fw-bold mb-3">
//             Anytime. Everything. Easy.
//           </h1>

//           <p className="fs-5">
//             Shop24Hours brings you trusted FMCG brands, snacks, beverages,
//             and essentials — always fresh, always ready, 24×7.
//           </p>
//         </div> */}

//       </div>

//       {/* Order Card */}
//       <Card className="border-0 shadow-sm rounded-4 p-4">

//         {/* Header */}
//         <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">

//           <div>
//             <h5 className="fw-bold mb-1">
//               Let's Get Ordering on Shop24Hours
//             </h5>
//             <p className="text-muted small mb-0">
//               Select an option to get started
//             </p>
//           </div>

//           <Form.Select
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             style={{ width: "200px" }}
//           >
//             {LOCATIONS.map((loc) => (
//               <option key={loc} value={loc}>
//                 {loc}
//               </option>
//             ))}
//           </Form.Select>

//         </div>

//         {/* Sub Heading */}
//         <div className="mb-3">
//           <h6 className="fw-bold mb-1">
//             How would you like your order?
//           </h6>
//           <p className="text-muted small mb-0">
//             Choose pickup, dine in, or in-car service
//           </p>
//         </div>

//         {/* Order Options */}
//         <Row className="g-3">
//           {ORDER_OPTIONS.map((opt) => (
//             <Col xs={12} sm={4} key={opt.id}>
//               <Button
//                 variant={selected === opt.id ? "success" : "light"}
//                 className="w-100 border d-flex flex-column align-items-center gap-2 py-3"
//                 onClick={() => setSelected(opt.id)}
//               >
//                 {opt.icon}

//                 <span className="fw-semibold small">
//                   {opt.label}
//                 </span>

//                 <span className="text-muted" style={{ fontSize: "12px" }}>
//                   {opt.desc}
//                 </span>

//                 <span className="fw-bold fs-5">→</span>
//               </Button>
//             </Col>
//           ))}
//         </Row>

//       </Card>
//     </Container>
//   );
// }



import React from 'react'
import './Hero.css'
import {assets} from '../../assets/assets'

function Hero() {
  return (
    <section className="s24-hero">
      <div className="container-xl h-75">
      {/* <div className="container-fluid px-4 px-xl-5"> */}
        {/* <div className="row align-items-center min-vh-80"> */}
        <div className="row align-items-center justify-content-between">

          {/* Left Side: Text Content */}
          <div className="col-lg-6 hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Open 24 / 7 — Always Fresh
            </div>
            <h1 className="hero-headline">
              Anytime.
              <em>Everything.</em>
              Easy.
            </h1>
            <p className="hero-sub">
              Cravings don't follow a clock. From late-night momos to morning chai —
              Shop24Hours brings freshly prepared food, beverages & everyday essentials
              to your door, always.
            </p>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <button className="btn-hero-primary">Order Now →</button>
              <button className="btn-hero-secondary">Find Store</button>
            </div>
          </div>

          {/* Right Side: Visual Collage */}
          {/* <div className="col-lg-6 d-none d-lg-flex flex-column align-items-center justify-content-center"> */}
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center mt-5 mt-lg-0">

            <div className="hero-right-visuals w-100">

              {/* Top Grid: Square Cards */}
              {/* <div className="row g-3 mb-4 justify-content-center"> */}
              <div className="row g-3 mb-4 justify-content-center align-items-center">
                {/* Left Card: Product Icon */}
                <div className="col-6 col-md-5">
                  <div className="glass-card-sq">
                    <img 
                      src={assets.main} 
                      alt="Produce" 
                      className="img-icon" 
                    />
                  </div>
                </div>

                {/* Right Card: High-Res Store Image */}
                <div className="col-6">
                  <div className="glass-card-sq overflow-hidden">
                    <img 
                      src={assets.desk}
                      alt="Shop24Hours Store Interior" 
                      className="img-full" 
                    />
                  </div>
                </div>
              </div>

              {/* Bottom List: Category Cards */}
              <div className="category-list-stack d-flex flex-column gap-3 align-items-center">
                {[
                  { title: "Snacks & Beverages", desc: "200+ Items in stock", icon: "🍿" },
                  { title: "Fresh Produce", desc: "Sourced daily, delivered fresh", icon: "🍎" },
                  { title: "Household Essentials", desc: "Everything you need at home", icon: "🧼" }
                ].map((item, idx) => (
                  <div key={idx} className="glass-list-card d-flex align-items-center p-3">
                    <div className="list-icon-box me-3">{item.icon}</div>
                    <div className="text-start">
                      <h6 className="mb-0 fw-bold">{item.title}</h6>
                      <small className="opacity-50">{item.desc}</small>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;