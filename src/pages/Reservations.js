import React from "react";
import BookingTableForm from "../components/BookingTableForm";

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
	return (
		<div>
			<BookingTableForm
				updateTimes={updateTimes}
				availableTimes={availableTimes}
			/>
		</div>
	);
}

export default Reservations;
