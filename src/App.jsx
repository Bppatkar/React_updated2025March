import Home from "./Home";
import Kid from "./kid";
import Women from "./women";
import Men from "./Mens";
import Navbar from "./Navbar";
import General from "./General";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import CategoryPage from "./Category";

function App() {
  const [products, setproducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchingData();
    fetchCategories();
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
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  return (
    <>
      <Navbar
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
        setFilteredProducts={setfilteredProducts}
        products={products}
      />
      <Routes>
        <Route
          path="/"
          element={<Home filteredProducts={filteredProducts} />}
        />
        <Route path="/kids" element={<CategoryPage category="kids" />} />
        <Route
          path="/women"
          element={<CategoryPage category="women's clothing" />}
        />
        <Route
          path="/mens"
          element={<CategoryPage category="men's clothing" />}
        />
        <Route
          path="/general"
          element={<CategoryPage category="electronics" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
