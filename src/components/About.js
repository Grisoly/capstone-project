import React from "react";
import "./About.css";

function About() {
	return (
		<section className="about">
			<div className="about-text">
				<h2>Little Lemon</h2>
				<h3>Chicago</h3>
				<p>
					Little Lemon is a charming neighborhood bistro that serves simple food
					and classic cocktails in a lively but casual environment. The
					restaurant features a locally-sourced menu with daily specials.
				</p>
			</div>
			<div className="about-images">
				<img
					className="image1"
					src="../images/MarioAdrian-A.jpg"
					alt="Our cooks smiling"
				/>
				<img
					className="image2"
					src="../images/MarioAdrian-B.jpg"
					alt="Our cooks smiling"
				/>
			</div>
		</section>
	);
}

export default About;
