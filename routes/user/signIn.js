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
  const { email, password } = req.body;

  try {
    const result = await signInUser(req, email, password);

    if (result.success) {
      if (req.session.authenticated) {
        res.json({ success: true, redirectUrl: '/dashboard' });
      };
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error('Error in signin route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;