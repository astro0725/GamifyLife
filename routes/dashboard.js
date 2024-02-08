const express = require('express');
const router = express.Router();
const { renderDashboard } = require('../controllers/renderDash');

router.get('/', renderDashboard);

module.exports = router;
