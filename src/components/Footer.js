import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-logo">
				<img src="../images/logo-white.png" alt="Logo" />
			</div>
			<div className="footer-navigation">
				<p>LINKS</p>
				<br></br>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/menu">Menu</a>
					</li>
					<li>
						<a href="/reservations">Reservations</a>
					</li>
					<li>
						<a href="order">Order Online</a>
					</li>
					<li>
						<a href="login">Login</a>
					</li>
				</ul>
			</div>
			<div className="footer-contact">
				<p>CONTACT</p>
				<br></br>
				<ul>
					<li>Address</li>
					<li>Phone number</li>
					<li>Email</li>
				</ul>
			</div>
			<div className="footer-social">
				<p>CONNECT</p>
				<br></br>
				<ul>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Youtube</li>
				</ul>
			</div>
		</footer>
	);
}
export default Footer;
