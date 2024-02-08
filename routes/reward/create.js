const express = require('express');
const router = express.Router();
const { createReward } = require('../../controllers/rewardHandling'); 

// POST request to create a new reward
router.post('/', async (req, res) => {
  const { title, cost } = req.body; 
  const result = await createReward(req, title, cost, description);

  if (result.success) {
    console.log('Reward created successfully');
  } else {
    console.error('Reward creation error:', result.error);
    res.status(500).json({ error: result.error });
  }
});

module.exports = router; 
