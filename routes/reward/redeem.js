const express = require('express');
const router = express.Router();
const { redeemReward } = require('../../controllers/onComplete'); 

router.post('/:rewardId', async (req, res) => {
  const userId = req.session.userId; 
  const rewardsId = req.params.rewardsId;

  console.log(`User ${userId} attempting to redeem rewards with ID: ${rewardsId}`); 

  try {
    const result = await redeemReward(userId, rewardsId);

    if (result.success) {
      console.log(`Rewards: ${result} with ID: ${rewardsId} redeemed successfully by user ${userId}`); 
    } else {
      console.error(`Error in redeeming rewards with ID: ${rewardsId} by user ${userId}: ${result.error}`);
    }
  } catch (error) {
    console.error(`Server error while redeeming rewards with ID: ${rewardsId} by user ${userId}: ${error.message}`); // Log unexpected server errors
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;