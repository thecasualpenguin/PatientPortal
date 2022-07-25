import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { DynamicButton } from "./DynamicButton";
import Sidebar from "./Sidebar";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

import "./TopNavbar.css";
import { TimerSharp } from "@material-ui/icons";

function NavbarLink({ item, index, ...props }) {
  const resolvedPath = useResolvedPath(item.url);
	const isActive = useMatch( { path: resolvedPath.pathname, end: true} )

	return (
		<li key={`${item.title}-${index}`}>
			<Link className={`${item.cName} ${isActive ? 'nav-link-active' : ''}`} to={item.url}>
				{item.title}
			</Link>
		</li>
	);
}

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

				<Link to="/" style={{ "text-decoration": "none" }}>
					<h1 className="navbar-logo">
						Patient Portal
						{/* <i className="fa-solid fa-hand-holding-medical"></i> */}
						<i className="fa-solid fa-briefcase-medical fa-custom-style" />
					</h1>
				</Link>

				<ul className={`nav-menu ${this.state.clicked ? "active" : ""}`}>
					{MenuItems.map((item, index) => {
						return <NavbarLink item={item} index={index} />;
					})}
				</ul>

				<div className="register-padding">
					<DynamicButton buttonSize="btn--large" to="/register">
						Register
					</DynamicButton>
				</div>
			</nav>
		);
	}
}

export default Navbar;
