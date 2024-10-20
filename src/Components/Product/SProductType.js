import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data/Data"; // Assuming you have a products data file
import ProductCard from "./productCard"; // Assuming you have a ProductCard component

function SProductType() {
    const { type } = useParams(); // Get the type from URL params
    const filteredProducts = products.filter((product) => product.type === type); // Filter products by type

    return (
        <div className="container">
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
            <br /><br />
            <div className={type}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            brand={product.brand}
                            rating={product.rating}
                            desc={product.desc}
                            imageUrl={product.imageUrl}
                        />
                    ))
                ) : (
                    <p>No products found for {type}</p>
                )}
            </div>
        </div>
    );
}

export default SProductType;
