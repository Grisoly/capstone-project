import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingTableForm from "./components/BookingTableForm";

test("Renders the BookingTableForm heading", () => {
	const container = document.createElement("div");
	render(<BookingTableForm />, container);
	const headingElement = screen.getByText("Occasion");
	expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the correct value", () => {
	const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	const result = initializeTimes();
	expect(result).toEqual(expectedTimes);
});

test("updateTimes returns the matching state value", () => {
	const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	const result = updateTimes(initialState);
	expect(result).toEqual(initialState);
});

test("BookingTableForm can be submitted but customer", () => {
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
	fireEvent.click(screen.getByText(/Make Your reservation/));
});
