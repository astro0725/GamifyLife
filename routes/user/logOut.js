const express = require('express');
const router = express.Router();
const { signOutUser } = require('../controllers/userAuth');

router.post('/', async (req, res) => {
  try {
      await signOutUser();
      console.log('User signed out successfully'); 
      res.render('signIn'); 
  } catch (error) {
      console.error('Error signing out user:', error);
      res.status(400).send(error.message);
  }
});