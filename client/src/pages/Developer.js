import React, { Component, useState } from "react";
import { Button, TextField } from "@material-ui/core"; //importing material ui component
import { useEffect } from "react";
import axios from "axios";

export const Developer = function() {
  const [testField, setTestField] = useState('John Smith');

  useEffect(() => {
    const data = {title: 'React Hooks'};
    axios.post('https://reqres.in/api/articles', data)
      .then(response => {setTestField(response.data.id)});

  
  }, []);
   // note to self: empty dependency array means
   // this effect will only run once (like componentDidMount in classes)

  return (
    <React.Fragment>
      <h1 id='node-env'>Environment: <em>{process.env.NODE_ENV}</em></h1>
      <h1 id='tester field'>Test Result: {testField}</h1>
      <hr />
      <Button color="primary" variant="contained">
        {" "}
        Press me{" "}
      </Button>
      <TextField id="name" label="Name" variant="outlined" />
      
    </React.Fragment>
  )
}

