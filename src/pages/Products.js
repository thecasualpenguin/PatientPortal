import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export const Products = () => {
	return (
		<React.Fragment>
			<Jumbotron fluid={true}>
				<Container>
					<h1>Products</h1>
					<p>
						This is a modified jumbotron that occupies the entire horizontal
						space of its parent.
					</p>
				</Container>
			</Jumbotron>

			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={require('../resources/testkit.jpg')} alt='testkit' />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
};
