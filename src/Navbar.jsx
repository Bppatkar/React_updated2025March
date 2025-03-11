import React from "react";

const Navbar = ({ searchProduct, setSearchProduct, setFilteredProducts, products }) => {
  return (
    <nav className="navbar">
      <h2>My Store</h2>
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
                product.title.toLowerCase().includes(searchProduct.toLowerCase())
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
