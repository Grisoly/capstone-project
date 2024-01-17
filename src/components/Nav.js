import React from "react";
import "./Nav.css";

function Nav() {
	return (
		<nav className="nav-bar">
			<ul className="nav-bar-links">
				<li className="nav-bar-logo">
					<a href="/">
						<img src="images/logo.png" alt="logo" />
					</a>
				</li>

				<li>
					<a href="/">HOME</a>
				</li>
				<li>
					<a href="/about">ABOUT</a>
				</li>
				<li>
					<a href="/menu">MENU</a>
				</li>
				<li>
					<a href="/reservations">RESERVATIONS</a>
				</li>
				<li>
					<a href="order">ORDER ONLINE</a>
				</li>
				<li>
					<a href="login">LOGIN</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
