const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.userId) {
    res.redirect('/dashboard'); 
  } else {
    res.render('signUp', { showSignInButton: true });
  }
});

module.exports = router;
