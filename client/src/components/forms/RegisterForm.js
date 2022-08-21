import React from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import "./styles/Register.css";

export const RegisterForm = () => {
  return (
		<React.Fragment>
			 <Form className="centerForm">


      <Form.Group as={Row} className="mb-3" controlId="formPlaintextFirstName">
        <Form.Label column className='text-left'  sm="3">
          First Name
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="John" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
        <Form.Label column className='text-left' sm="3">
          Last Name
        </Form.Label>
        <Col sm="9">
          <Form.Control type="text" placeholder="Smith" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextAge">
        <Form.Label column className='text-left' sm="3">
          Age
        </Form.Label>
        <Col sm="9">
          <Form.Control type="Number" placeholder="30" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextZip">
        <Form.Label column className='text-left' sm="3">
          Zipcode
        </Form.Label>
        <Col sm="9">
          <Form.Control type="zipcode" placeholder="Smith" />
        </Col>
      </Form.Group>
      
      <hr />




				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" size="" placeholder="anything@somewhere.com" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be exactly 19 characters long, contains exactly 2 number and 3 letters, of which 1 must be capitalized.
            It must not contain spaces, special characters, or emoji, but sanskrit or hieroglyphs will be allowed,
            of which you may have up to 3, extending your total password length to 22 characters.  
          </Form.Text>
          <Form.Text id="passwordHelpBlock2" muted>
            *I'm just joking, put anything you want. 
          </Form.Text>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserType">
          <Form.Label column sm="3">
            User Type
          </Form.Label>
          <Col sm="9">
            <Form.Control readOnly defaultValue="Basic" />
          </Col>
        </Form.Group>


				<Form.Group controlId="formBasicCheckbox">
          
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</React.Fragment>
	);
};
