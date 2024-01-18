import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingTableForm, {
	initializeTimes,
	updateTimes,
} from "./components/BookingTableForm";

test("initializeTimes returns the correct value", async () => {
	const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	const result = await initializeTimes();
	expect(result).toEqual(expectedTimes);
});

test("updateTimes returns the matching state value", async () => {
	const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	const dispatch = jest.fn();
	await updateTimes(dispatch, "2024-05-17");
	expect(dispatch).toHaveBeenCalledWith({
		type: "SET_AVAILABLE_TIMES",
		payload: initialState,
	});
});

test("BookingTableForm can be submitted with customer details", async () => {
	const container = document.createElement("div");
	render(<BookingTableForm />, container);

	fireEvent.change(screen.getByLabelText(/Choose date/i), {
		target: { value: "2024-05-17" },
	});
	fireEvent.change(screen.getByLabelText(/Choose time/i), {
		target: { value: "17:00" },
	});
	fireEvent.change(screen.getByLabelText(/Number of guests/i), {
		target: { value: "4" },
	});
	fireEvent.change(screen.getByLabelText(/Occasion/i), {
		target: { value: "Anniversary" },
	});

	await act(async () => {
		fireEvent.click(screen.getByText(/Make Your reservation/));
	});
	expect(submitFormMock).toHaveBeenCalledWith({
		date: "2024-05-17",
		time: "17:00",
		guests: "4",
		occasion: "Anniversary",
	});
});
