'use strict';

require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const app = express();

const validate = require('./contactValidate');
const emailer = require('./email');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Test Route
router.get('/', (req, res) => {
  res.send('Ok');
});

// Send a contact us request
router.post('/contact', validate, (req, res, next) => {
  const payload = req.body;
  const name = payload.name;
  const email = payload.email;
  const message = payload.message;
  
  emailer.sendContact(name, email, message, (err, info) => {
    if (err) {
      return res.status(500).send('Server Error: ' + err);
    }
    res.send(info);
  });
});

app.use('/api', router);

app.listen(port, () => {
  console.log('Listening on Port: ' + port);
});
