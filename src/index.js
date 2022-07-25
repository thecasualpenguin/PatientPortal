import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {Button, TextField} from '@material-ui/core'; //importing material ui component
import {AppBar, Toolbar, Typography} from '@material-ui/core';

import PatientForm from "./components/PatientForm";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/TopNavbar";



function Header() {
  return (
    <AppBar position='static'>
       <Toolbar>
           <Typography>Another Navbar</Typography>
       </Toolbar>
    </AppBar>

  );
}

const App = () => {
	return (
		<React.StrictMode>
        <div>
          <Navbar />
        </div>
        <div id='App'>
          <Button color="primary" variant="contained"> Press me </Button> 
          <TextField id="name" label="Name" variant="outlined" />
        </div>
		</React.StrictMode>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
