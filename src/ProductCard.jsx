
const ProductCard = ({ image, title, price, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3 className="title">{title}</h3>
      <div className="small-part">
        <h4 className="rating">Rating:⭐ {rating}</h4>
        <h3 className="price">Price {price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
