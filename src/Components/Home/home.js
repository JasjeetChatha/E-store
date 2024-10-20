import React, { Fragment } from "react";
import ProductCard from "../Product/productCard";
import './Home-CSS/Home.scss';
import { products } from "../Data/Data";
function Home() {
  
  return (
    <Fragment>
      <h1>Welcome to E-store</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, voluptate, quas, tempora quia quae quod dolorum doloremque
        voluptatem quibusdam laboriosam. Quod, voluptatem. Quisquam voluptates,
        voluptate, quas, tempora quia quae quod dolorum doloremque voluptatem
        quibusdam laboriosam. Quod, voluptatem.
      </p>
      {/* PCs */}
      <div className="container">
        <div className="pc">
          <h2>PCs</h2>
          {products
            .filter((product) => product.type === "pc")
            .map((pc) => (
              <ProductCard
                type={pc.type}
                id={pc.id}
                name={pc.name}
                price={pc.price}
                brand={pc.brand}
                rating={pc.rating}
                desc={pc.desc}
                imageUrl={pc.imageUrl}
              />
            ))}
        </div>
      </div>

      {/* Laptops */}
      <div className="container">
        <div className="laptop">
          <h2>Laptops</h2>
          {products
            .filter((product) => product.type === "laptop")
            .map((lap) => (
              <ProductCard
                type={lap.type}
                id={lap.id}
                name={lap.name}
                price={lap.price}
                brand={lap.brand}
                rating={lap.rating}
                desc={lap.desc}
                imageUrl={lap.imageUrl}
              />
            ))}
        </div>
      </div>

      {/* Mobiles */}
      <div className="container">
        <div className="mobile">
          <h2>Mobiles</h2>
          {products
            .filter((product) => product.type === "mobile")
            .map((mob) => (
              <ProductCard
                type={mob.type}
                id={mob.id}
                name={mob.name}
                price={mob.price}
                brand={mob.brand}
                rating={mob.rating}
                desc={mob.desc}
                imageUrl={mob.imageUrl}
              />
            ))}
        </div>
      </div>

      {/* Consoles */}
      <div className="container">
        <div className="console">
          <h2>Consoles</h2>
          {products
            .filter((product) => product.type === "console")
            .map((con) => (
              <ProductCard
                type={con.type}
                id={con.id}
                name={con.name}
                price={con.price}
                brand={con.brand}
                rating={con.rating}
                desc={con.desc}
                imageUrl={con.imageUrl}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;