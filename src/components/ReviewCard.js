import react from "react";
import "./ReviewCard.css";

const ReviewCard = ({ customer }) => {
	return (
		<article className="review-card">
			<div>
				<img src={customer.picture} alt={customer.fullName} />
			</div>
			<div className="review-card-name">
				<p>{customer.fullName}</p>
			</div>
			<div className="rating">{customer.rating}</div>

			<div className="review-card-text">
				<p>{customer.review}</p>
			</div>
		</article>
	);
};
export default ReviewCard;
