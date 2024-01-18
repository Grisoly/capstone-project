import React from "react";
import BookingTableForm from "../components/BookingTableForm";
import { useNavigate } from "react-router-dom";

function Reservations() {
	const [availableTimes, setAvailableTimes] = useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	]);
	const updateTimes = (selectedDate) => {
		const newAvailableTimes = [
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		];
		setAvailableTimes(newAvailableTimes);
	};
	const navigate = useNavigate();

	const submitForm = (formData) => {
		console.log("Booking summary:", formData);
		navigate("/confirmed-booking");
	};
	return (
		<div>
			<BookingTableForm
				submitForm={submitForm}
				updateTimes={updateTimes}
				availableTimes={availableTimes}
			/>
		</div>
	);
}

export default Reservations;
