import React, { useEffect, useState } from 'react'
import ProductCard from "./ProductCard";
import Navbar from './Navbar';


const Home = () => {
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
       <Navbar
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
        setfilteredProducts={setfilteredProducts}
        products={products}
      />
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

export default Home