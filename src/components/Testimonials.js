import React from "react";
import "./Testimonials.css";
import custo1 from "../assets/custo1.png";
import custo2 from "../assets/custo2.png";
import custo3 from "../assets/custo3.png";
import custo4 from "../assets/custo4.png";
import ReviewCard from "./ReviewCard";

const customers = [
	{
		rating: "⭐️⭐️⭐️⭐️",
		picture: custo1,
		fullName: "Tony Montana",
		review: "I had so much fun !",
	},
	{
		rating: "⭐️⭐️⭐️⭐️⭐️",
		picture: custo3,
		fullName: "Suzie Show",
		review: "We hoped we could stay there all night, what a wonderful place !",
	},
	{
		rating: "⭐️⭐️⭐️⭐️⭐️",
		picture: custo2,
		fullName: "Alfred Ental",
		review: "I will go back for more !",
	},
	{
		rating: "⭐️⭐️⭐️⭐️",
		picture: custo4,
		fullName: "Eva Mendes",
		review:
			"My husband and I decided that will be our regular restaurant for our weekly dates !",
	},
];

const Testimonials = () => {
	return (
		<section className="testimonials">
			{customers.map((customer, fullName) => (
				<ReviewCard key={fullName} customer={customer} />
			))}
		</section>
	);
};

export default Testimonials;
