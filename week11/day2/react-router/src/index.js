import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductCard from "./components/ProductCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<ProductCard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
