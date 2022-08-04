import React, { useState } from "react";

const SideNav = (props) => {
	const [wid, setWid] = useState("0%");

	const openSideNav = () => {
		setWid("10%");
	};

	return (
		<React.StrictMode>
			<button onClick={openSideNav}>Open</button>
			<div className="sidenav" style={{ width: wid }}>
				<a href="#section">About</a>
				<a href="#section">Services</a>
				<a href="#section">Clients</a>
				<a href="#section">Contact</a>
				<a href="#section">{props.name}</a>
			</div>
		</React.StrictMode>
	);
};
export default SideNav;
