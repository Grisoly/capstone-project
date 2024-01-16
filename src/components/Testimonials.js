import React from "react";
import "./Testimonials.css";

function Testimonials() {
	return (
		<section className="testimonials">
			<div className="testimonial-card">
				<img src="../images/custo1.png" alt="Customer 1" />
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore"
				</p>
			</div>
			<div className="testimonial-card">
				<img src="../images/custo2.png" alt="Customer 2" />
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore"
				</p>
			</div>
			<div className="testimonial-card">
				<img src="../images/custo3.png" alt="Customer 3" />
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore"
				</p>
			</div>
			<div className="testimonial-card">
				<img src="../images/custo4.png" alt="Customer 4" />
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore"
				</p>
			</div>
		</section>
	);
}

export default Testimonials;
