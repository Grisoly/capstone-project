import React from "react";

function ConfirmedBooking() {
	return (
		<div style={styles.container}>
			<h1 style={styles.title}>Booking Confirmed!</h1>
			<div>
				<p style={styles.message}>
					Your booking has been confirmed.
					<br /> Thank you!
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

export default ConfirmedBooking;
