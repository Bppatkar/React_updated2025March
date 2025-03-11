import Home from "./Home";
import Kid from "./kid";
import Women from "./women";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <Route path="/kids" element={<Kid />} />
        <Route path="/women" element={<Women />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
