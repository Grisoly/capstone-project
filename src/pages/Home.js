import React from "react";
import Header from "../components/Header";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "./About";

function Home() {
	return (
		<>
			<Header />
			<Specials />
			<Testimonials />
			<About />
		</>
	);
}

export default Home;
