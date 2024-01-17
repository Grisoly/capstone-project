import react from "react";
import "./DishCard.css";

const DishCard = ({ special }) => {
	return (
		<article className="dish-card">
			<div className="dish-card-picture">
				<img src={special.picture} alt={special.recipe} />
			</div>
			<div className="dish-card-title">
				<h3>{special.recipe}</h3>
				<span>{special.price}</span>
			</div>
			<div className="dish-card-body">
				<p>{special.description}</p>
				<a>Order a delivery</a>
			</div>
		</article>
	);
};

export default DishCard;
