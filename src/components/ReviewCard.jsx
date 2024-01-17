import React from "react";
import { Fragment } from "react";
import "./ReviewCard.css";

const ReviewCard = ({ customer }) => {
	return (<Fragment>
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
		</Fragment>
	);
};
export default ReviewCard;
