import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "./DynamicButton";
import Sidebar from "./Sidebar";

import "./TopNavbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({ clicked: !this.state.clicked });
	}

	render() {
		return (
			<nav className="NavbarItems">
        {/* <Sidebar /> */}
				<div className="menu-icon" onClick={this.handleClick}>
					<i
						className={`fa-solid fa-custom-style ${
							this.state.clicked ? "fa-times" : "fa-bars"
						}`}
					></i>
				</div>

				<h1 className="navbar-logo">
					Patient Portal
					{/* <i className="fa-solid fa-hand-holding-medical"></i> */}
					<i className="fa-solid fa-briefcase-medical fa-custom-style"></i>
				</h1>

					<ul className={`nav-menu ${this.state.clicked ? "active" : ""}`}>
						{MenuItems.map((item, index) => {
							return (
								<li key={`${item.title}-${index}`}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
          <div className='register-padding'><DynamicButton buttonSize='btn--large'>Register</DynamicButton></div>
			</nav>
		);
	}
}

export default Navbar;
