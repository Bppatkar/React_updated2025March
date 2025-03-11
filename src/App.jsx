import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

function App() {
  const [products, setproducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setproducts(data);
      setfilteredProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="input-field">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchProduct(e.target.value)}
          value={searchProduct}
        />
        <button
          onClick={() => {
            setfilteredProducts(
              products.filter((product) => {
                product.title
                  .toLowerCase()
                  .includes(searchProduct.toLowerCase());
              })
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating?.rate}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
