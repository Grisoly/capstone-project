import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import "./Nav.css";
import Specials from "./Specials";
import Construction from "./Construction";
import ConfirmedBooking from "./ConfirmedBooking";
import BookingTableForm from "./BookingTableForm";

function Nav() {
	return (
		<div>
			<nav className="nav-bar">
				<ul className="nav-bar-links">
					<li className="nav-bar-logo">
						<Link to="/">
							<img src="images/logo.png" alt="logo" />
						</Link>
					</li>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
					<li>
						<Link to="/menu">MENU</Link>
					</li>
					<li>
						<Link to="/reservations">RESERVATIONS</Link>
					</li>
					<li>
						<Link to="order">ORDER ONLINE</Link>
					</li>
					<li>
						<Link to="login">LOGIN</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/menu" element={<Specials />}></Route>
				<Route path="/reservations" element={<BookingTableForm />}></Route>
				<Route path="/order" element={<Construction />}></Route>
				<Route path="/login" element={<Construction />}></Route>
				<Route path="/confirmed-booking" element={<ConfirmedBooking />} />
			</Routes>
		</div>
	);
}

export default Nav;
