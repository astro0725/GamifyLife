const express = require('express');
const router = express.Router();
const { checkAuthentication } = require('../utils/authCheck');

router.get('/', checkAuthentication, (req, res) => {
  res.render('main');
});

module.exports = router;
