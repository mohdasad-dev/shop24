import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assets'

function Hero() {
  return (
    <section className="s24-hero">
      <div className="container-xl h-75">
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
          <div className="col-12 col-lg-6 ps-lg-5 pe-lg-0 d-flex flex-column align-items-end justify-content-center mt-5 mt-lg-0">
            <div className="hero-right-visuals w-100">

              {/* Top Grid: Square Cards */}
              <div className="row g-3 mb-4 justify-content-center align-items-center">
                {/* Left Card: Product Icon */}
                
                <div className="col-6"> {/* was: col-6 col-md-5 */}
                  <div className="glass-card-sq">
                    <img src={assets.main} alt="Produce" className="img-icon" />
                  </div>
                </div>


                {/* Right Card: High-Res Store Image */}

                <div className="col-6">
                  <div className="glass-card-sq overflow-hidden">
                    <img src={assets.desk} alt="Shop24Hours Store Interior" className="img-full" />
                  </div>
                </div>
              </div>

              {/* Bottom List: Category Cards */}
              <div className="category-list-stack d-flex flex-column gap-3 align-items-center">
                {[
                  { title: "Snacks & Beverages", desc: "200+ Items in stock", icon: "🍿", image: assets.Tea_Coffee_Drinks },
                  { title: "Fresh Produce", desc: "Sourced daily, delivered fresh", icon: "🍎", image: assets.Dairy_Bread_Eggs },
                  { title: "Household Essentials", desc: "Everything you need at home", icon: "🧼", image: assets.Atta_Rice_Dal }
                ].map((item, idx) => (
                  <div key={idx} className="glass-list-card d-flex align-items-center p-3">
                    <div className="list-icon-box me-3">
                      {/* {item.icon} */}
                      <img src={item.image} alt={item.title} className="fd-img" />
                    </div>
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