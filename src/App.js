import { Fragment } from 'react';
import './App.css';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
