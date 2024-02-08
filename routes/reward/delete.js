const express = require('express');
const router = express.Router(); 
const { deleteReward } = require('../../controllers/rewardHandling'); 

// DELETE request to delete an existing reward
router.delete('/:rewardsId', async (req, res) => {
  await deleteReward(req, res); 
});

module.exports = router;