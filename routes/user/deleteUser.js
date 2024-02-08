const express = require('express');
const router = express.Router();
const { deleteUser } = require('../../controllers/userAuth');

// DELETE request to delete the user
router.delete('/', async (req, res) => {
  try {
    const result = await deleteUser(req);

    if (result.success) {
      res.clearCookie('connect.sid');
      console.log('User deleted successfully'); 
      res.sendStatus(200);
    } else {
      console.error('User deletion error:', result.error);
      res.status(400).json({ error: result.error }); 
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' }); 
  }
});

module.exports = router;
