import React from "react";
import "./Header.css";

function Header() {
	return (
		<header>
			<section className="presentation">
				<div className="presentation-text">
					<h2>Little Lemon</h2>
					<h3>Chicago</h3>
					<p>
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					<button className="reserve-button">Reserve a Table</button>
				</div>

				<div className="presentation-image">
					<img src="../images/restaurantfood.jpg" alt="Restaurant" />
				</div>
			</section>
		</header>
	);
}

export default Header;
