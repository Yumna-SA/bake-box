import Badge from './Badge';

function ProductCard({ name, price, description, badge }) {
  return (
    <div className="card">
      <Badge text={badge} />
      <h3>{name}</h3>
      <p className="card-desc">{description}</p>
      <p className="price">Rs {price}</p>
    </div>
  );
}

export default ProductCard;