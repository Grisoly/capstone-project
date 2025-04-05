import React, { useEffect, useReducer, useState } from "react";
import "../components/BookingTableForm.css";
import { generateFakeAPI } from "../utils/fakeAPI";
import { useNavigate } from "react-router-dom";
import restaurantBg from "../assets/restaurant-bg.jpg";

const timeReducer = (state, action) => {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return { ...state, times: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
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
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Fallback times
  }
};

const updateTimes = async (dispatch, selectedDate) => {
  try {
    dispatch({ type: "SET_LOADING", payload: true });
    const times = await initializeTimes(selectedDate);
    dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
  } catch (error) {
    console.error("Problem with available times update:", error);
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
};

function BookingTableForm({ submitForm }) {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Anniversary");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});

  const [state, dispatch] = useReducer(timeReducer, {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], // Initial times
    loading: false,
  });

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      const times = await initializeTimes();
      dispatch({ type: "SET_AVAILABLE_TIMES", payload: times });
      dispatch({ type: "SET_LOADING", payload: false });
    };
    fetchAvailableTimes();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!resDate) newErrors.date = "Please select a date";
    if (!resTime) newErrors.time = "Please select a time";
    if (guests < 1 || guests > 10)
      newErrors.guests = "Number of guests must be between 1 and 10";
    if (!occasion) newErrors.occasion = "Please select an occasion";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const selectedSlot = `${resDate} ${resTime}`;
    if (bookedSlots.includes(selectedSlot)) {
      setErrors({
        ...errors,
        time: "This time slot is already booked. Please choose another.",
      });
      return;
    }

    const formData = {
      date: resDate,
      time: resTime,
      guests,
      occasion,
    };

    setFormData(formData);
    setShowConfirmation(true);
  };

  const confirmBooking = () => {
    setBookedSlots([...bookedSlots, `${formData.date} ${formData.time}`]);
    submitForm(formData);
    setShowConfirmation(false);
    resetForm();
  };

  const resetForm = () => {
    setResDate("");
    setResTime("");
    setGuests(1);
    setOccasion("Anniversary");
    setErrors({});
  };

  const handleDateChange = async (e) => {
    const newlySelectedDate = e.target.value;
    setResDate(newlySelectedDate);
    setErrors({ ...errors, date: null });
    await updateTimes(dispatch, newlySelectedDate);
  };

  return (
    <div className="container" style={{ "--bg-image": `url(${restaurantBg})` }}>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            onChange={handleDateChange}
            value={resDate}
            required
            min={new Date().toISOString().split("T")[0]}
            className={errors.date ? "error" : ""}
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            onChange={(e) => {
              setResTime(e.target.value);
              setErrors({ ...errors, time: null });
            }}
            value={resTime}
            required
            className={errors.time ? "error" : ""}
            disabled={state.loading}
          >
            <option value="">Select a time</option>
            {state.times &&
              state.times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
          </select>
          {errors.time && <span className="error-message">{errors.time}</span>}
          {state.loading && (
            <span className="loading">Loading available times...</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => {
              setGuests(parseInt(e.target.value));
              setErrors({ ...errors, guests: null });
            }}
            required
            className={errors.guests ? "error" : ""}
          />
          {errors.guests && (
            <span className="error-message">{errors.guests}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => {
              setOccasion(e.target.value);
              setErrors({ ...errors, occasion: null });
            }}
            required
            className={errors.occasion ? "error" : ""}
          >
            <option value="Anniversary">Anniversary</option>
            <option value="Birthday">Birthday</option>
            <option value="Business">Business</option>
            <option value="Casual">Casual</option>
          </select>
          {errors.occasion && (
            <span className="error-message">{errors.occasion}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Make Reservation
        </button>
      </form>

      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <h2>Confirm Your Reservation</h2>
            <p>Date: {formData.date}</p>
            <p>Time: {formData.time}</p>
            <p>Number of guests: {formData.guests}</p>
            <p>Occasion: {formData.occasion}</p>
            <div className="modal-buttons">
              <button onClick={() => setShowConfirmation(false)}>Cancel</button>
              <button onClick={confirmBooking}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingTableForm;
