import React from "react";

function Footer() {
	return (
		<footer>
			<div className="footer-navigation">
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
				<ul>
					<li>Adress</li>
					<li>phone number</li>
					<li>email</li>
				</ul>
			</div>
			<div className="footer-social">
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
