const express = require('express');
const router = express.Router();
const { signUpUser } = require('../../controllers/userAuth');

// GET request to render the signup page
router.get('/', (req, res) => {
  try {
    res.render('signUp', { showSignInButton: true });
  } catch (error) {
    console.error("Signup Error:", error); 
  }
});

// POST request to handle the form submission
router.post('/', async (req, res) => {
  try {
    await signUpUser(req.body.email, req.body.password, req.body.username);
    console.log('Signup successful'); 
  } catch (error) {
    console.error("Signup Error:", error);
  }
});

module.exports = router;