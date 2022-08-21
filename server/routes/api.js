const { response } = require("express");
const express = require("express");
const router = express.Router();
const { readAllProducts, writeProduct, writeUser } = require('../model/interactDB.js');

router.route("/")
	.get((req, res) => {
		res.send({ application: 'patient-portal-api', version: '1.0' });
	})

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

router.route('/users')
  .get((req, res) => {
    res.send( {status: 200, msg: 'received GET req to getUsers'} );
  })
  .post(async (req, res) => {
    let status = await writeUser(req.body)    // attempt to write to database
    
    // formulate response object
    let responseJSON = {status: 'pending', payload: {...req.body}}
    if (status === 0) responseJSON.status = 'success';
    else responseJSON.status = 'database error';
    
    // sending response
    res.send(responseJSON)
  });
  
module.exports = router;