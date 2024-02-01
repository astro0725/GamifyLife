const express = require('express');
const router = express.Router();
const { signInUser } = require('../../controllers/userAuth');

// GET request to render the signin page
router.get('/', (req, res) => {
  try {
    res.render('signIn', { showSignUpButton: true });
  } catch (error) {
    console.error("Signin Error:", error);
  }
});

// POST request to handle the form submission
router.post('/', async (req, res) => {
  try {
    const result = await signInUser(req.body.email, req.body.password);
    console.log('Signin successful');
    res.json({ message: 'Signin successful', data: result });
  } catch (error) {
    console.error("Signin Error:", error);
    res.status(500).json({ error: "Signin Error" });
  }
});

module.exports = router;