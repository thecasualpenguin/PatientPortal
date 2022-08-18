const express = require("express");
const router = express.Router();
const { readAllProducts, writeProduct } = require('../model/interactDB.js');

router.route("/")
	.get((req, res) => {
		res.send({ application: 'patient-portal-api', version: '1.0' });
	})

router.route("/developer/text")
  .post((req, res) => {
    res.send( {status: 'POST received', ...req.body} );
  });

router.route("/developer/text")
	.get((req, res) => {
    res.send( "Some Text data for development testing");
	})
  router.route("/developer/json")
  .get((req, res) => {
    res.send( {status: "normal", data: 'some json data for development testing'} );
  })

router.route("/getProducts")
  .get(async (req, res) => {
    // if (Object.keys(req.query).length === 0) res.send({});
    if (req.query.numItems === undefined) {
      res.send( {status: 'error', msg: 'bad GET request'})
      return;
    }

    if (req.query.numItems === 'all') {
      const dbResponse = await readAllProducts();
      res.send( {...dbResponse} );
    }
    else {
      res.statusCode = 501;
      res.send( {status: 'awaiting implementation', msg: `numItems=${req.query.numItems}`} );
    }
  })

router.route("/addProduct")
  .get((req, res) => {
    res.send( "received GET @ addProduct, please use POST ");
  })
  .post( (req, res) => {
    writeProduct(req.body)
    res.send( {status: 'POST received', reqBody: req.body, ...req.body} )    
  });

module.exports = router;