import Avatar from './Avatar';
import Rating from './Rating';

function ReviewSara() {
  return (
    <div className="review">
      <Avatar />
      <div className="review-body">
        <div className="review-top">
          <strong>Sara A.</strong>
          <Rating />
        </div>
        <p>Best brownies on campus. I ordered twice in one week!</p>
      </div>
    </div>
  );
}

export default ReviewSara;