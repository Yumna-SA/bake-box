import ReviewSara from './ReviewSara';
import ReviewHira from './ReviewHira';

function ReviewSection() {
  return (
    <section className="reviews" id="reviews">
      <h2>What students say</h2>
      <div className="review-row">
        <ReviewSara />
        <ReviewHira />
      </div>
    </section>
  );
}

export default ReviewSection;