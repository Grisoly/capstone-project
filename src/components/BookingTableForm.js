import React, { useState } from "react";
import "../components/BookingTableForm.css";

function BookingTableForm() {
	const [resDate, setResDate] = useState("");
	const [resTime, setResTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("Anniversary");
	const [availableTimes] = useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	]);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(resDate, resTime, guests, occasion);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="res-date">Choose date</label>
				<input
					type="date"
					id="res-date"
					onChange={(e) => setResDate(e.target.value)}
					value={resDate}
				/>
				<label htmlFor="res-time">Choose time</label>
				<select
					id="res-time"
					onChange={(e) => setResTime(e.target.value)}
					value={resTime}
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
				/>
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					value={occasion}
					onChange={(e) => setOccasion(e.target.value)}
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
