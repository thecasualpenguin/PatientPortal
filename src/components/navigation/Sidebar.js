import React from "react";
import { push as Menu } from "react-burger-menu";
import "./Sidebar.css";

// import { push as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faQuestion, faPhone } from "@fortawesome/free-solid-svg-icons";

class Sidebar extends React.Component {
	showSettings(event) {
		event.preventDefault();
		window.location.href = "/settings";
	}

	render() {
		return (
			<Menu>
				<a id="home" className="bm-item-list" href="/">
					<FontAwesomeIcon icon={faHome} /> Home
				</a>
				<a id="about" className="menu-item" href="/about">
					<FontAwesomeIcon icon={faQuestion} /> About
				</a>
				<a id="contact" className="menu-item" href="/contact">
					<FontAwesomeIcon icon={faPhone} /> Contact
				</a>
				<a
					onClick={this.showSettings}
					className="menu-item--small"
					href="/settings"
				>
					Settings
				</a>
			</Menu>
		);
	}
}

export default Sidebar;
