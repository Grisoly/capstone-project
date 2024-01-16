import React from "react";
import Testimonials from "./Testimonials";
import About from "./About";
import Specials from "./Specials";
import "./Main.css";

function Main() {
	return (
		<main>
			<Specials />
			<Testimonials />
			<About />
		</main>
	);
}

export default Main;
