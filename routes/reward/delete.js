const express = require('express');
const router = express.Router(); 
const { deleteReward } = require('../../controllers/rewardHandling'); 

// DELETE request to delete an existing reward
router.delete('/:rewardId', async (req, res) => {
  const rewardId = req.params.rewardId; 
  const result = await deleteReward(req, rewardId);

  if (result.success) {
    console.log('Reward deleted successfully');
  } else {
    console.error('Reward deletion error:', result.error);
    res.status(500).json({ error: result.error });
  }
});

module.exports = router;