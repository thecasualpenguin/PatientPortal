const express = require("express");
const router = express.Router();

router.param("firstName", (req, res, next, firstName) => {
  console.log(firstName);
  next();
});


router.route("/")
	.get((req, res) => {
		res.render('newUser', {firstName: 'Kyle'});
    console.log(req.query)
	})
	.post((req, res) => {
    res.send(req.body.firstName);
  });

router.route('/:firstName&:lastName')
  .get( (req, res) =>  {
    res.send(`Getting user with first name ${req.params.firstName}, last name ${req.params.lastName}`)
  });


const users = []
module.exports = router;

