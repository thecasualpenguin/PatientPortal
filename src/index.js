import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./components/Navigation"
import PatientForm from "./pages/PatientForm";
import {Home} from "./pages/Home";
import {ContactUs} from "./pages/ContactUs";
import {Register} from "./pages/Register.js";
import {Reports} from "./pages/Reports.js";
import {Products} from "./pages/Products.js";
import {ScreeningForm} from "./pages/ScreeningForm.js";
import {Developer} from "./pages/Developer.js";


const App = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Navigation />
				<div id="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/screening" element={<ScreeningForm />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/*" element={ <Navigate to="/" replace={true}/> } />
          </Routes>
        </div>
			</BrowserRouter>
		</React.StrictMode>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
