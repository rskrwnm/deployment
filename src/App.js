import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Landing_page";
import CreateProduct from "./Pages/Create_product";
import ProductDetail from "./komponen/CreateProduct/ProductDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create_product" element={<CreateProduct />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
