import {Fragment} from "react";
import "./App.css";
import Home from "./components/Home/home";
import Navbar from "./Navbar.js";
import SProductType from "./components/Product/SProductType";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "./NotFound";
import CartPage from "./ShoppingCart/CartPage.js";
import ProductDetail from "./Product/ProductDetail.js";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:_id" element={<ProductDetail />} />
          <Route path="/:type" element={<SProductType />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
