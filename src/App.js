import { Fragment } from 'react';
import './App.css';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar';
import ProductDetail from './Components/Product/ProductDetail';
import SProductType from './Components/Product/SProductType';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<ProductDetail />} />
        <Route path="/:type" element={<SProductType />} />
      </Routes>
    </Router>
    </Fragment>
  );
}

export default App;
