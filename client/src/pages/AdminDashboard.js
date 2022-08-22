import React, { Component, useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button, TextField } from "@mui/material"; //importing material ui component
import { Send } from '@mui/icons-material';
import ProductForm from "../components/forms/ProductForm";

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { getAllUsers } from "../api/get";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Patient Portal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const AdminDashboard = function() {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    console.log('you\'ve landed at admin page');
  }, []);
  // note to self: empty dependency array means
  // this effect will only run once (like componentDidMount in classes)

  const handleFetchAllUsers = async (event) => {
    // begin fetching
    let button = event.target
    button.innerHTML = 'fetching ...';
    button.setAttribute('color', 'success');
    const rawUserList = await getAllUsers();
    
    //begin populating
    let tempDisplayList = []
    for (let [key, value] of Object.entries(rawUserList.data)) {
      tempDisplayList.push( 
        <Row>
          <Col className="mx-2 my-1" >{value.fname}</Col>
          <Col className="mx-2 my-1">{value.lname}</Col>
          <Col className="mx-2 my-1">{value.email}</Col>
          <Col className="mx-2 my-1">{value.userType}</Col>
        </Row>
      );
    }
    // document.getElementById('displayUserArea').value = displayList;
    setDisplayList(tempDisplayList);

    // done fetching
    event.target.innerHTML = 'Done. Fetch Again?';

  }



  return (
    <React.Fragment>
      <div style={{width: '80%', margin: 'auto', marginTop: '1em'}}>
        <h3 style={{textAlign: 'center'}}><b>Admin Dashboard</b></h3>
        <p style={{textAlign: 'center'}}>Environment: <em>{process.env.NODE_ENV}</em></p>


        <ProductForm />

        <hr />

        <Typography sx={{ pt: 5 }}component="h1" variant="h5" align="center">
            Display All Users
          </Typography>
        <Container className="my-3">
          <Row>
            <Col>
              <Button variant="contained" color="primary" endIcon={<Send />}
                onClick={(event) => handleFetchAllUsers(event)}>Fetch All Users </Button>
            </Col>
            <Col>
              <TextField id="outlined-basic" label="Search (placeholder)" variant="outlined" />
            </Col>
          </Row>
        </Container>

        
        <Container>
          <Row>
            <Col>F-Name</Col>
            <Col>L-Name</Col>
            <Col>Email</Col>
            <Col>UserType</Col>
          </Row>
          <hr />

          {displayList}
        </Container>
      </div>



      <Copyright sx={{ pt: 10, pb: 5 }} />
    </React.Fragment>
  )
}

