import ProductCard from "./ProductCard";

const Home = ({filteredProducts}) => {
  return (
    <>
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              id={product.id}
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
};

export default Home;
