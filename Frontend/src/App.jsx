import { Fragment } from "react";
import "./App.css";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/Product/ProductDetail";
import SProductType from "./Components/Product/SProductType";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";  // No Router here
import NotFound from "./Components/NotFound";
import CartPage from "./Components/Cart/CartPage";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Fragment>
      <Navbar />
       <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<ProductDetail />} />
        <Route path="/:type" element={<SProductType />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Analytics />
    </Fragment>
  );
}

export default App;
