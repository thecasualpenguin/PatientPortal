import React from "react";
import { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import ProductList from "../components/ProductList";

export const Products = () => {
	return (
		<React.Fragment>
			<Jumbotron
				fluid={true}
				style={{
					"backgroundImage": "url(/images/lab-background.jpg)",
					padding: "8rem 0em",
					border: "solid",
					borderColor: "white",
					borderWidth: "2rem 0px",
				}}
			>
				<Container style={{ color: "white", fontWeight: "500" }}>
					<h1>Products</h1>
					<p>This Banner is used to highlight a specific product.</p>
				</Container>
			</Jumbotron>

			<ProductList />
		</React.Fragment>
	);
};
