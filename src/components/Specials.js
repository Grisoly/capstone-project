import React from "react";
import "./Specials.css";

function Specials() {
	return (
		<section className="highlights">
			<div className="menu-card">
				<img src="../images/greek salad.jpg" alt="Greek Salad" />
				<h3>Greek Salad</h3>
				<p>
					The famous greek salad of crispy lettuce, peppers, olives and our
					Chicago style feta cheese, garnished with crunchy garlic and rosemary
					croutons.
				</p>
			</div>
			<div className="menu-card">
				<img src="../images/bruschetta.jpg" alt="Bruschetta" />
				<h3>Bruschetta</h3>
				<p>
					Our Bruschetta is made from grilled bread that has been smeared with
					garlic and seasoned with salt and olive oil.
				</p>
			</div>
			<div className="menu-card">
				<img src="../images/lemon-dessert.jpg" alt="Lemon Dessert" />
				<h3>Lemon Dessert</h3>
				<p>
					This comes straight from grandma's recipe book, every last ingredient
					has been sourced and is as authentic as can be imagined.
				</p>
			</div>
		</section>
	);
}

export default Specials;
