import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import "./styles/Register.css";
import { rgbToHex } from "@material-ui/core";
import { postRegisterForm } from "../../api/post";

export const RegisterForm2 = () => {
  const [validated, setValidated] = useState(false);
  
  let unsetUserType = 'Select One'
  const[submitCount, setSubmitCount] = useState(0)    // check how many times a user has submitted form, to guard against bots

  const [formData, setFormData] = useState({
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


  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false || formData.userType==unsetUserType) {
      setSubmitCount(submitCount+1);
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return
    }

    event.preventDefault();

    setFormData({
      ...formData,
      'fname': document.getElementById('register-fname').value,
      'lname': document.getElementById('register-lname').value,
      'age': document.getElementById('register-age').value,
      'email': document.getElementById('register-email').value,
      'password': document.getElementById('register-password').value,
      'city': document.getElementById('register-city').value,
      'state': document.getElementById('register-state').value,
      'zip': document.getElementById('register-zip').value,
      'userType': document.getElementById('register-userType').innerText,
    });

    postRegisterForm(formData);


    // check all fields filled out
  };

	return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="centerForm">
      <Row className="mb-3">
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
        
        <Form.Group as={Col} md="4" controlId="register-age">
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

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="register-email">
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

          <Form.Group as={Col} md="6" controlId="register-password">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">🔑</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="password1"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
      </Row>
      
      
      <hr />


      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="register-city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="register-state">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="register-zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group hasValidation as={Col} md="6" controlId="formPlaintextUserType">
          <Form.Label>
            User Type: 
          </Form.Label>
          <Dropdown hasValidation className="d-inline mx-2" drop="down">
            <Dropdown.Toggle size="sm" id="dropdown-autoclose-true">
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
      </Row>
      
      <Button type="submit">Submit form</Button>
    </Form>
	);
};
