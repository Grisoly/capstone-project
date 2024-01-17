import React from "react";
import logo from "../assets/logo.png";

function Construction() {
	return (
		<div style={styles.container}>
			<h1 style={styles.title}>Under Construction </h1>
			<div>
				<p style={styles.message}>
					This page is currently under construction.
					<br /> Please check back later.
				</p>
			</div>
		</div>
	);
}
const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		backgroundColor: "#edefee",
		textAlign: "center",
		margin: 0,
		padding: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
	},
	title: {
		color: "#495e57",
		margin: "1rem",
	},
	message: {
		color: "#495e57",
	},
};

export default Construction;
