import React, { Component, useState } from "react";
import { Button, TextField } from "@material-ui/core"; //importing material ui component
import { useEffect } from "react";
import axios from "axios";
import qs from 'qs';

export const DisplayDatabase = function() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {

    // testing GET all users request 
    let data = {title: 'React Hooks'};
    
    // let promise = axios.get(process.env.REACT_APP_UserEndpoint)
    // promise.then( (res) => {
    //   setUserList( JSON.stringify(res.data) );
    // });

    // test POST user request
    data = {
      "fname": "Kyle",
      "lname": "Hoffman",
      "age": "50",
      "zipcode": "10019",
      "email": "kylehoffman@bing.com",
      "password": "password1"
    };
    
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },   // encoding problem
      data: qs.stringify(data),
      url: process.env.REACT_APP_UserEndpoint,
    };
    axios(options).then(response => {
          console.log(response)
          setUserList( JSON.stringify(response) );
        });

  }, []);



   // note to self: empty dependency array means
   // this effect will only run once (like componentDidMount in classes)

  return (
    <React.Fragment>
      <p>Environment: <em>{process.env.NODE_ENV}</em></p>
      <div>{userList}</div>
    </React.Fragment>
  )
}

