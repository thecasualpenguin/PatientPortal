import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductList = (props) => {
	// populate product list first
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			// let text = await fetchTextCustom("http://127.0.0.1:3001/api/developer/text");
			// console.log(text);

			const response = await fetch("http://127.0.0.1:3001/api/getProducts?numItems=all");
			const jsonData = await response.json()

			// converted fetched JSON object to array
			const productArray = [];

			for (const [key, value] of Object.entries(jsonData)) {
				productArray.push(value);
			}
      setProducts(productArray);
		}
    
		fetchProducts();
	}, []);

	// map product list to card elements for display
	return (
		<React.Fragment>
			<Container fluid={false}>
				<Row>
					<MappedCards productList={products} />
				</Row>
			</Container>
		</React.Fragment>
	);
};

const MappedCards = function (props) {
	const productListCards = props.productList.map((e, i) => {
		return (
			<Col sm="6" lg="4">
				<Card
					style={{ maxWidth: "20rem", minWidth: "16rem", margin: "1rem 0rem" }}
				>
					<Card.Img variant="top" src={e.src} alt={e.alt} />
					<Card.Body>
						<Card.Title>{e.title}</Card.Title>
						<Card.Text>{e.text}</Card.Text>

						<div className="d-grid gap-2">
							<Link to="/screening" style={{ "text-decoration": "none" }}>
								<Button
									variant="success"
									size="md"
									style={{ backgroundColor: "rgb(254, 156, 43)" }}
								>
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
