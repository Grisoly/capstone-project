import React, { Component, Fragment } from "react";
import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
	render() {
		return (<Fragment>
					<Nav />
					<Header />
					<Main />
					<Footer />
					</Fragment>
				
		);
	}
}

export default App;
