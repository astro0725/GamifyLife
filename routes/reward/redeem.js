const express = require('express');
const router = express.Router();
const { redeemReward } = require('../../controllers/onComplete'); 

router.post('/:rewardId', async (req, res) => {
  const userId = req.session.userId; 
  const rewardId = req.params.rewardId;

  console.log(`User ${userId} attempting to redeem reward with ID: ${rewardId}`); 

  try {
    const result = await redeemReward(userId, rewardId);

    if (result.success) {
      console.log(`Reward: ${result} with ID: ${rewardId} redeemed successfully by user ${userId}`); 
    } else {
      console.error(`Error in redeeming reward with ID: ${rewardId} by user ${userId}: ${result.error}`);
    }
  } catch (error) {
    console.error(`Server error while redeeming reward with ID: ${rewardId} by user ${userId}: ${error.message}`); // Log unexpected server errors
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;