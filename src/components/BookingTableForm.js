import React, { useEffect, useReducer, useState } from "react";
import "../components/BookingTableForm.css";
import { generateFakeAPI } from "../utils/fakeAPI";
import { useNavigate } from "react-router-dom";

const timeReducer = (state, action) => {
	switch (action.type) {
		case "SET_AVAILABLE_TIMES":
			return action.payload;
		default:
			return state;
	}
};
const initializeTimes = async () => {
	try {
		const today = new Date();
		const availableTimes = generateFakeAPI(today);
		return availableTimes;
	} catch (error) {
		console.error("Problem available times fetch:", error);
		return [];
	}
};
const updateTimes = async (dispatch, selectedDate) => {
	try {
		const times = await initializeTimes(selectedDate);
		dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
	} catch (error) {
		console.error("Problem with available times update:", error);
	}
};

function BookingTableForm({ submitForm }) {
	const [resDate, setResDate] = useState("");
	const [resTime, setResTime] = useState("");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("Anniversary");
	const [bookedSlots, setBookedSlots] = useState([]);

	const [availableTimes, dispatch] = useReducer(
		timeReducer,
		[],
		initializeTimes
	);
	useEffect(() => {
		const fetchAvailableTimes = async () => {
			const times = await initializeTimes();
			dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
		};
		fetchAvailableTimes();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const selectedSlot = `${resDate} ${resTime}`;
		if (bookedSlots.includes(selectedSlot)) {
			alert("This time slot is already booked. Please choose another.");
			return;
		}

		console.log(resDate, resTime, guests, occasion);
		setBookedSlots([...bookedSlots, selectedSlot]);

		setGuests("");
		setResDate("");
		setGuests(1);
		setOccasion("Anniversary");

		submitForm({
			date: resDate,
			time: resTime,
			guests,
			occasion,
		});
	};
	const handleDateChange = async (e) => {
		const newlySelectedDate = e.target.value;
		setResDate(newlySelectedDate);
		await updateTimes(dispatch, newlySelectedDate);
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
					{Array.isArray(availableTimes) &&
						availableTimes.map((availableTime) => (
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
					aria-label="On Click"
				/>
			</form>
		</div>
	);
}

export default BookingTableForm;
