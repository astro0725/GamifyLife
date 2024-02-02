const express = require('express');
const router = express.Router();
const { signUpUser } = require('../../controllers/userAuth');

// GET request to render the signup page
router.get('/', (req, res) => {
  try {
    res.render('signUp', { showSignInButton: true });
  } catch (error) {
    console.error("Failed rendering view:", error); 
  }
});

// POST request to handle the form submission
router.post('/', async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const result = await signUpUser(req, email, password, username);

    if (result.success) {
      req.session.save(() => {
        res.json({ success: true, redirectUrl: '/dashboard' });
      });
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error('Error in signup route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;