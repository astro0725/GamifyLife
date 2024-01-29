const express = require('express');
const router = express.Router(); 
const { deleteUser } = require('../../controllers/userAuth'); 

// DELETE request to delete the user
router.delete('/', async (req, res) => {
  try {
    const result = await deleteUser(req);

    if (result.success) {
      console.log('User deleted successfully'); 
      res.render('signUp')
    } else {
      console.error('User deletion error:', result.error); 
    }
  } catch (error) {
    console.error('Server error:', error); 
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;