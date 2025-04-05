import React from "react";
import BookingTableForm from "../components/BookingTableForm";
import { useNavigate } from "react-router-dom";
import { ReservationHero } from "../components/ReservationHero";
import "../pages/Reservations.css";

export const Reservations = () => {
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
    <div className="reservations-page">
      <ReservationHero />
      <div className="reservations-content">
        <div className="reservations-intro">
          <h2>Book Your Table</h2>
          <p>
            Choose your preferred date and time for an unforgettable dining
            experience.
          </p>
        </div>
        <BookingTableForm
          submitForm={submitForm}
          updateTimes={updateTimes}
          availableTimes={availableTimes}
        />
      </div>
    </div>
  );
};

export default Reservations;
