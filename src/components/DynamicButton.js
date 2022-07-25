import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./DynamicButton.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const DynamicButton = ({
	children,
	type,
	to,
	onClick,
	buttonStyle,
	buttonSize,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];
	const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

	console.log(buttonStyle);
	console.log(buttonSize);
	return (
		<Link to={to}>
			<button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
				{children}
			</button>
		</Link>
	);
};
