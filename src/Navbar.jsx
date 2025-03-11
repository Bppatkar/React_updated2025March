import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  searchProduct,
  setSearchProduct,
  setFilteredProducts,
  products,
}) => {
  const handleSearch = () => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
      )
    );
  };

  return (
    <nav className="navbar">
      <Link to="/" className="backTOhome">
        <h2>My Store</h2>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/mens">Mens</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>
          <Link to="/general">General</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchProduct(e.target.value)}
          value={searchProduct}
        />
        <button
          onClick={() => {
            setFilteredProducts(
              products.filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(searchProduct.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
