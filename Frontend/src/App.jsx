import { Fragment } from "react";
import "./App.css";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/Product/ProductDetail";
import SProductType from "./Components/Product/SProductType";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
     
    <Fragment>
      
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:id" element={<ProductDetail />} />
          <Route path="/:type" element={<SProductType />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Analytics />
    </Fragment>
  );
}

export default App;
