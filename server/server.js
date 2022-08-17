// encapulating into serverless
const serverless = require('serverless-http');

require("dotenv").config()

// set up dependencies
const express = require('express');
const cors = require('cors');
const logger = require("./middleware/logger");
const app = express();


// setting up view engine and middleware
app.set('view engine', 'ejs');
app
  .use(cors())
  .use(logger)
  .use(express.static('public'))
  .use(express.urlencoded({extended: true}));


// setting up default path
app.get('/', (req, res) => {
  res.status(500);
  res.send("Hello World");
});

// configure routes
app
  .use('/users/', require('./routes/users.js'))
  .use('/api/', require('./routes/api.js'));

app.listen(
  process.env.PORT, 
  () => {console.log('patient portal listening on port ' + process.env.PORT)}
);

// module.exports.handler = serverless(app);
