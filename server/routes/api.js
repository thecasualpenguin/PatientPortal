const express = require("express");
const router = express.Router();
const { readAllProducts, writeProduct } = require('../model/interactDB.js');

router.route("/")
	.get((req, res) => {
		res.send({ application: 'patient-portal-api', version: '1.0' });
	})
  .post((req, res) => {
    res.send( {...req.body} );
  });

router.route("/addProduct")
  .get((req, res) => {
    res.send( "received GET @ addProduct, please use POST ");
  })
  .post( async (req, res) => {
    let dbResponse = await readAllProducts();
    res.send( {status: 'POST received', dbResponse: dbResponse,...req.body} )    
  });

  
module.exports = router;