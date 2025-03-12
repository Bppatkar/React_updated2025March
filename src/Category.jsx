import React, { useEffect, useState } from "react";

const CategoryPage = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching category products:", error));
  }, [category]);

  return (
    <div className="category-page">
      <h2>{category.toUpperCase()}</h2>
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h3 className="title">{product.title}</h3>
              <p className="price">Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
