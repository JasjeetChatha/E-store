import { Fragment } from 'react';
import './App.css';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar';
import ProductDetail from './Components/Product/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    </Fragment>
  );
}

export default App;
