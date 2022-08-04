import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import { ProductListItems } from "./ProductListItems";
import { Link } from "react-router-dom";

const ProductList = (props) => {
	return (
		<React.Fragment>
			<Container fluid={false}>
				<Row>
					<MappedCards />
				</Row>
			</Container>
		</React.Fragment>
	);
};

const MappedCards = function () {
	const productListCards = ProductListItems.map((e, i) => {
		return (
			<Col sm='6' lg="4">
				<Card style={{ maxWidth: "20rem", minWidth: "16rem", margin: "1rem 0rem" }}>
					<Card.Img variant="top" src={e.src} alt={e.alt} />
					<Card.Body>
						<Card.Title>{e.title}</Card.Title>
						<Card.Text>{e.text}</Card.Text>

						<div className="d-grid gap-2">
            <Link to="/screening" style={{ "text-decoration": "none" }}>
              <Button variant="success" size="md" style={{backgroundColor: 'rgb(254, 156, 43)'}}>
								Purchase
							</Button>
              </Link>
							<Button variant="outline-info" size="md">
								More Info
							</Button>
						</div>
            
					</Card.Body>
				</Card>
			</Col>
		);
	});

	return productListCards;
};

export default ProductList;
