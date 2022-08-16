const express = require("express");
const router = express.Router();

router.route("/")
	.get((req, res) => {
		res.send({ application: 'patient-portal-api', version: '1.0' });
	})
  .post((req, res) => {
    res.send( {...req.body} );
  });

module.exports = router;