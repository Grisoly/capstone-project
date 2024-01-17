import React from "react";
import "./About.css";
import cooks1 from "../assets/MarioAdrian-A.jpg";
import cooks2 from "../assets/MarioAdrian-B.jpg";

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
				<img className="image1" src={cooks1} alt="Our cooks smiling" />
				<img className="image2" src={cooks2} alt="Our cooks smiling" />
			</div>
		</section>
	);
}

export default About;
