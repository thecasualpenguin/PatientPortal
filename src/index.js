import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import reportWebVitals from "./reportWebVitals";

import PatientForm from "./components/PatientForm";
import { Portal } from "react-portal";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<React.StrictMode>
			<div id='App'>
        <Sidebar />
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
