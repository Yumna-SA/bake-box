import Badge from './Badge';

function BrownieCard() {
  const price = 450;

  return (
    <div className="card">
    <Badge text="Bestseller" />      
    <h3>Chocolate Brownies</h3>
    <p className="card-desc">Box of 6, fudgy and warm</p>
    <p className="price">Rs {price}</p>
    </div>
  );
}

export default BrownieCard;