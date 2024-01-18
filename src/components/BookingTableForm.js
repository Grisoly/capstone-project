import React, { useReducer, useState } from "react";
import "../components/BookingTableForm.css";

const timeReducer = (state, action) => {
	switch (action.type) {
		case "SET_AVAILABLE_TIMES":
			return action.payload;
		default:
			return state;
	}
};
const initializeTimes = () => {
	return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

function BookingTableForm() {
	const [resDate, setResDate] = useState("");
	const [resTime, setResTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("Anniversary");
	const [availableTimes, dispatch] = useReducer(
		timeReducer,
		[],
		initializeTimes
	);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(resDate, resTime, guests, occasion);
		setGuests("");
		setResDate("");
		setGuests(1);
		setOccasion("Anniversary");
	};
	const handleDateChange = (e) => {
		const newlySelectedDate = e.target.value;
		setResDate(newlySelectedDate);
		dispatch({
			type: "SET_AVAILABLE_TIMES",
			payload: { date: newlySelectedDate, times: initializeTimes() },
		});
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="res-date">Choose date</label>
				<input
					type="date"
					id="res-date"
					onChange={handleDateChange}
					value={resDate}
					required
				/>
				<label htmlFor="res-time">Choose time</label>
				<select
					id="res-time"
					onChange={(e) => setResTime(e.target.value)}
					value={resTime}
					required
				>
					{availableTimes.map((availableTime) => (
						<option key={availableTime}>{availableTime}</option>
					))}
				</select>
				<label htmlFor="guests">Number of guests</label>
				<input
					type="number"
					placeholder="1"
					min="1"
					max="10"
					id="guests"
					onChange={(e) => setGuests(e.target.value)}
					value={guests}
					required
				/>
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					value={occasion}
					onChange={(e) => setOccasion(e.target.value)}
					required
				>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input
					className="button-reservation"
					type="submit"
					value="Make Your reservation"
				/>
			</form>
		</div>
	);
}

export default BookingTableForm;
