import React from "react";
import Container from "react-bootstrap/Container";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { ProductListItems } from "./ProductListItems";
import { Link } from "react-router-dom";

const ProductList = (props) => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<MappedCards />
				</div>
			</div>
		</React.Fragment>
	);
};

const MappedCards = function () {
	const productListCards = ProductListItems.map((e, i) => {
		return (
			<div className="col-md-4">
				<Card style={{ width: "18rem", margin: "1rem 0rem" }}>
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
			</div>
		);
	});

	return productListCards;
};

export default ProductList;
