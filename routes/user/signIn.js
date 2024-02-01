const express = require('express');
const router = express.Router();
const { signInUser } = require('../../controllers/userAuth');

// GET request to render the signin page
router.get('/', (req, res) => {
  try {
    res.render('signIn');
  } catch (error) {
    console.error("Signin Error:", error);
  }
});

// POST request to handle the form submission
router.post('/', async (req, res) => {
  try {
    await signInUser(req.body.email, req.body.password);
    console.log('User signed in successfully');
  } catch (error) {
    console.error('Error signing in user:', error);
  }
});

module.exports = router;