import Avatar from './Avatar';
import Rating from './Rating';

function ReviewCard({ name, comment }) {
  return (
    <div className="review">
      <Avatar />
      <div className="review-body">
        <div className="review-top">
          <strong>{name}</strong>
          <Rating />
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default ReviewCard;