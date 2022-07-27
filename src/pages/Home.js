import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core"; //importing material ui component
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography>Another Navbar</Typography>
			</Toolbar>
		</AppBar>
	);
}

export const Home = () => {
	return (
		<React.Fragment>
			<h1>Homepage</h1>


		</React.Fragment>
	);
};
