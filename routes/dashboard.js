const express = require('express');
const router = express.Router();
const { renderDashboard } = require('../controllers/renderDash');

function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
      return next();
  } else {
      res.redirect('/login');
  }
}

router.get('/dashboard', isAuthenticated, renderDashboard);

module.exports = router;
