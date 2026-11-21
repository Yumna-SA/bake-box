import BrownieCard from './BrownieCard';
import NankhataiCard from './NankhataiCard';
import RollCard from './RollCard';

function ProductSection() {
  return (
    <section className="products" id="shop">
      <h2>Fresh from the oven</h2>
      <div className="card-row">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  );
}

export default ProductSection;