import React from "react";

function Navbar() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = React.useState([]);
  const [types, setTypes] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        const {data} = await response.json();
        setProducts(data);
        setTypes(Object.keys(Object.groupBy(data, (product) => product.type)));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        E-store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {types.map((type) => (
            <li key={type} className="nav-item">
              <a className="nav-link" href={`/${type}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}s
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a className="nav-link" href={`/cart`}>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
