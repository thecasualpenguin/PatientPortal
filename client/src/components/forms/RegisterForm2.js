import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./styles/Register.css";
import { rgbToHex } from "@material-ui/core";
import { postRegisterForm } from "../../api/post";
import { useNavigate } from "react-router-dom";

export const RegisterForm2 = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  
  let unsetUserType = 'Select One'
  const[submitCount, setSubmitCount] = useState(0)    // check how many times a user has submitted form, to guard against bots

  const [formData, setFormData] = useState({
    "dateCreated": null,
    "fname": null,
    "lname": null,
    "age": null,
    "email": null,
    "password": null,
    "city": null,
    "state": null,
    "zipcode": null,
    "userType": unsetUserType
  })

  const handleUserTypeClick = (userType) => {
    setFormData({...formData, userType:userType});
    document.getElementById('register-userType').innerText = userType;
  }


  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false || formData.userType==unsetUserType) {
      setSubmitCount(submitCount+1);
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return
    }
    event.preventDefault();

    const data = {
      ...formData, 
      'dateCreated': new Date(),
      'fname': document.getElementById('register-fname').value,
      'lname': document.getElementById('register-lname').value,
      'age': document.getElementById('register-age').value,
      'email': document.getElementById('register-email').value,
      'password': document.getElementById('register-password').value,
      'city': document.getElementById('register-city').value,
      'state': document.getElementById('register-state').value,
      'zip': document.getElementById('register-zip').value,
      'userType': document.getElementById('register-userType').innerText,
    };

    setFormData(data);    // due to some potential closure issue, set to state hook will only be updated next render
    await postRegisterForm(data);   // thus just use temp variable instead.

    form.reset();
    setValidated(false);
    // window.location.replace("/products")
    navigate('/products', { replace: true });

  };

	return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="centerForm">
      <Row className="mb-3 justify-content-md-center">
        <Form.Group as={Col} md="4" controlId="register-fname">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="John"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="register-lname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Smith"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="2" controlId="register-age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="30"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Row className="mb-3 justify-content-md-center">
        <Form.Group as={Col} md="4" controlId="register-city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="register-state">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="register-zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      
      <hr />

      <Row className="mb-3">
        <Col md='1'></Col>
        <Form.Group as={Col} md="10" controlId="register-email">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="mail@smtp.com"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide an email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        <Col md='1'></Col>
      </Row>
      <Row className="mb-3">
      <Col md='1'></Col>
        <Form.Group as={Col} md="10" controlId="register-password">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">🔑</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="password1"
              aria-describedby="inputGroupPrepend"
              required
            />

            <OverlayTrigger overlay={
                  <Tooltip id="tooltip-password"> I'm just joking, put whatever you want. </Tooltip>
                  }>
              <span className="d-inline-block">
                <Button variant="info" style={{ pointerEvents: 'none' }}>
                    ⓘ
                </Button>
              </span>
            </OverlayTrigger>

            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>


            <Form.Text id="passwordHelpBlock" style={{fontSize: '0.8rem', width: '100%'}} muted>
              Your password must be exactly 19 characters long, contains exactly 2 number and 3 letters, of which 1 must be capitalized.
              It must not contain spaces, special characters, or emoji, but sanskrit or hieroglyphs will be allowed,
              of which you may have up to 3, extending your total password length to 22 characters.  
            </Form.Text>
          </InputGroup>
        </Form.Group>
        <Col md='1'></Col>
      </Row>

      

      <Row className="mb-3">
      <Col md='1'></Col>
        <Form.Group hasValidation as={Col} md="10" controlId="formPlaintextUserType">

          <Button variant="light" style={{ pointerEvents: 'click', color: 'gray'}}>User Type &nbsp; 👤</Button>

          <Dropdown hasValidation className="d-inline mx-2" drop="down">
            <Dropdown.Toggle variant="dark" size="sm" id="dropdown-autoclose-true">
              {formData['userType']}
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item href="#" onClick={()=>handleUserTypeClick('Basic User')} >Basic User</Dropdown.Item>
              <Dropdown.Item href="#" disabled>Admin</Dropdown.Item>
              <Dropdown.Item href="#" disabled>Developer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div style={{display: 'none'}} id='register-userType'></div>
          <p 
            style={{color: "rgba(223, 50, 60)", 
                    fontSize:"0.9em", 
                    display: formData.userType===unsetUserType && submitCount > 0 ? 'block': 'none' }}
          >
             Please select a user type.
          </p>
        </Form.Group>
        <Col md='1'></Col>
      </Row>

      <hr />
      
      <Row className="mb-3 justify-content-md-center">
          <Button variant="primary" type="submit" >Submit form</Button>
      </Row>
      
    </Form>
	);
};
