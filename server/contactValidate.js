'use strict';

const validator = require('validator');

module.exports = (req, res, next) => {

  const payload = req.body;
  if (!payload) {
    return res.status(400).send('Missing payload');
  }

  if (!payload.email) {
    return res.status(400).send('Missing Email');
  }

  if (!validator.isEmail(payload.email)) {
    return res.status(400).send('Invalid Email');
  }

  next();

};
