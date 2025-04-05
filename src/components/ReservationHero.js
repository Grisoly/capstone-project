import React from "react";
import restaurantHero from "../assets/restaurant-hero.jpg";
import "../components/ReservationHero.css";

export const ReservationHero = () => {
  return (
    <div className="reservation-hero">
      <div className="hero-content">
        <h1>Make a Reservation</h1>
        <p>Experience the perfect dining atmosphere</p>
        <div className="hero-features">
          <div className="feature">
            <div className="feature-icon">🍽️</div>
            <span>Fine Dining</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🌙</div>
            <span>Evening Specials</span>
          </div>
          <div className="feature">
            <div className="feature-icon">🎉</div>
            <span>Special Events</span>
          </div>
        </div>
      </div>
      <div
        className="hero-image"
        style={{ "--hero-image": `url(${restaurantHero})` }}
      >
        <div className="image-overlay"></div>
      </div>
    </div>
  );
};
