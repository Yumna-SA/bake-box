import Avatar from './Avatar';
import Rating from './Rating';

function ReviewHira() {
  return (
    <div className="review">
      <Avatar />
      <div className="review-body">
        <div className="review-top">
          <strong>Hira M.</strong>
          <Rating />
        </div>
        <p>The nankhatai tasted just like my grandmother&apos;s.</p>
      </div>
    </div>
  );
}

export default ReviewHira;