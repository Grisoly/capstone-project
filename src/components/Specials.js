import React from "react";
import "./Specials.css";
import DishCard from "./DishCard";
import greeksalad from "../assets/greeksalad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemondessert from "../assets/lemondessert.jpg";

const specials = [
	{
		recipe: "Greek Salad",
		description:
			"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		picture: greeksalad,
		price: "$12.99",
	},
	{
		recipe: "Bruschetta",
		description:
			"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		picture: bruschetta,
		price: "$5.99",
	},
	{
		recipe: "Lemon Dessert",
		description:
			"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		picture: lemondessert,
		price: "$5.00",
	},
];

const Specials = () => {
	return (
		<section className="highlights">
			<div className="specials-title">
				<h2>Our special dishes this week</h2>
			</div>
			<div>
				<button aria-label="On Click">Order Online</button>
			</div>

			{specials.map((special, recipe) => (
				<DishCard key={recipe} special={special} />
			))}
		</section>
	);
};

export default Specials;
