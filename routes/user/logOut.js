const express = require('express');
const router = express.Router();
const { logoutUser } = require('../../controllers/userAuth');

router.post('/', async (req, res) => {
  try {
    await logoutUser(req);
    res.clearCookie('connect.sid');
    console.log('User signed out successfully'); 
    res.redirect('/user/signIn'); 
  } catch (error) {
    console.error('Error signing out user:', error); 
    res.status(400).send(error.message);
  }
});

module.exports = router;
