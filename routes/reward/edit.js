const express = require('express');
const router = express.Router();
const { editReward } = require('../../controllers/rewardHandling'); 

// POST request to edit an existing reward
router.post('/:rewardId', async (req, res) => {
  const rewardId = req.params.rewardId; 
  const { title, description, cost } = req.body; 
  const result = await editTask(req, taskId, updatedData);

  if (result.success) {
    console.log('Reward edited successfully');
  } else {
    console.error('Reward editing error:', result.error);
    res.status(500).json({ error: result.error });
  }
});

module.exports = router; 
