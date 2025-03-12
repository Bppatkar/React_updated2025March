import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  // console.log("Product ID from URL:", id); // Debugging
  
  useEffect(() => {
    if (!id) {
      console.error("Product ID is undefined!");
      return;
    }
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);
  
  

  return (
    <div className="product-details">
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width="200" />
          <p>{product.description}</p>
          <strong>Price: ${product.price}</strong>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetails;
