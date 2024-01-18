import React from "react";
import "./Header.css";
import restaurant from "../assets/restaurantfood.jpg";

function Header() {
	return (
		<header>
			<section className="presentation">
				<div className="presentation-text">
					<h1>Little Lemon</h1>
					<h3>Chicago</h3>
					<p>
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					<button className="reserve-button" aria-label="On Click">
						Reserve a Table
					</button>
				</div>

				<div className="presentation-image">
					<img src={restaurant} alt="Restaurant" />
				</div>
			</section>
		</header>
	);
}

export default Header;
