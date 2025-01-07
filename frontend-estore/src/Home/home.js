import React, {useEffect, Fragment} from "react";
import ProductCard from "../Product/productCard";
function Home() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [products, setProducts] = React.useState([]);
  const [groupedProducts, setGroupedProducts] = React.useState({});
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        const {data} = await response.json();
        setProducts(data);
        setGroupedProducts(Object.groupBy(data, (product) => product.type));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  const addToCart = (productId, name, price, imageUrl) => {
    const cartStore = window.sessionStorage.getItem("cart");
    if (cartStore) {
      const cart = JSON.parse(cartStore);
      cart.push({productId, name, price, imageUrl});
      window.sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
      window.sessionStorage.setItem(
        "cart",
        JSON.stringify([{productId, name, price, imageUrl}])
      );
    }
  };
  return (
    <Fragment>
      <h1>Welcome to E-store</h1>
      <p>
        <b> Welcome to E-store!</b>{" "}
        <i>
          Discover the latest and greatest in tech – from powerful PCs and sleek
          laptops to cutting-edge consoles and the hottest smartphones. Whether
          you're upgrading your gear or shopping for the best deals, we've got
          something for everyone. Dive into our world of innovation and find
          your perfect tech companion today!
        </i>
      </p>

      <div className="container">
        {Object.keys(groupedProducts).map((type) => (
          <div key={type}>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
            <br />
            <br />
            {groupedProducts[type].map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Home;
