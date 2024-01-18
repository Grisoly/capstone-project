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
test("HTML5 validation attributes are applied to date input", () => {
	render(<BookingTableForm />);
	const dateInput = screen.getByLabelText(/Choose date/i);
	expect(dateInput).toHaveAttribute("type", "date");
	expect(dateInput).toHaveAttribute("required");
});

test("HTML5 validation attributes are applied to time select", () => {
	render(<BookingTableForm />);
	const timeSelect = screen.getByLabelText(/Choose time/i);
	expect(timeSelect).toHaveAttribute("required");
});

test("HTML5 validation attributes are applied to guests input", () => {
	render(<BookingTableForm />);
	const guestsInput = screen.getByLabelText(/Number of guests/i);
	expect(guestsInput).toHaveAttribute("type", "number");
	expect(guestsInput).toHaveAttribute("min", "1");
	expect(guestsInput).toHaveAttribute("max", "10");
	expect(guestsInput).toHaveAttribute("required");
});

test("HTML5 validation attributes are applied to occasion select", () => {
	render(<BookingTableForm />);
	const occasionSelect = screen.getByLabelText(/Occasion/i);
	expect(occasionSelect).toHaveAttribute("required");
});
test("isValidGuests returns true for valid input", () => {
	const validInput = 5;
	const isValid = isValidGuests(validInput);
	expect(isValid).toBe(true);
});

test("isValidGuests returns false for invalid input", () => {
	const invalidInput = 15;
	const isValid = isValidGuests(invalidInput);
	expect(isValid).toBe(false);
});
