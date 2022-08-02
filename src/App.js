import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import PatientForm from "./pages/PatientForm";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";
import { Register } from "./pages/Register.js";
import { Reports } from "./pages/Reports.js";
import { Products } from "./pages/Products.js";
import { ScreeningForm } from "./pages/ScreeningForm.js";
import { Developer } from "./pages/Developer.js";

const App = () => {

	return (
		<React.StrictMode>
			<BrowserRouter>
				<div id="App">
					<Routes>
            <Route path="/" element={<Home><Navigation /></Home>} />
            <Route path="/products" element={<div> <Navigation /><Products /></div>} />
            <Route path="/reports" element={<div> <Navigation /><Reports /></div>} />
            <Route path="/contactus" element={<div> <Navigation /><ContactUs /></div>} />
            <Route path="/register" element={<div> <Navigation /><Register /></div>} />
            <Route path="/screening" element={<div> <Navigation /><ScreeningForm /></div>} />
            <Route path="/developer" element={<div> <Navigation /><Developer /></div>} />
            <Route path="/*" element={ <Navigate to="/" replace={true}/> } />
					</Routes>
				</div>
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
