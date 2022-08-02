import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core"; //importing material ui component
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ParallaxBanner from "../components/ParallaxBanner";

function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography>Another Navbar</Typography>
			</Toolbar>
		</AppBar>
	);
}

export const Home = (props) => {
  const navbar = props.inner;
	return (
		<React.Fragment>
      <ParallaxBanner>{props.children}</ParallaxBanner>
		</React.Fragment>
	);
};
