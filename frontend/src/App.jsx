import React from "react";
import {Routes, Route } from "react-router-dom";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

import HomePage from "./landing_page/Home/HomePage";
import StoreLocatorPage from "./landing_page/storelocator/StoreLocatorPage";
import FranchiseEnquiryPage from "./landing_page/franchise/FranchiseEnquiryPage";
import ContactUsPage from "./landing_page/contact/ContactUsPage";
import AllCategoriesPage from "./landing_page/Home/AllCategoriesPage";
import CategoryProductsPage from "./landing_page/Home/CategoryProductsPage";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store-locator" element={<StoreLocatorPage />} />
        <Route path="/franchise" element={<FranchiseEnquiryPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/categories" element={<AllCategoriesPage />} />
        <Route path="/category/:name" element={<CategoryProductsPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;