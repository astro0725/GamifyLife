const express = require('express');
const router = express.Router();
const { completeTask } = require('../../controllers/onComplete'); 

// POST route to complete a task
router.post('/:taskId', async (req, res) => {
  const taskId = req.params.taskId;

  console.log(`Attempting to complete task with ID: ${taskId}`); 

  try {
    const result = await completeTask(taskId);

    if (result.success) {
      console.log(`Task with ID: ${taskId} completed successfully: ${result}`);
    } else {
      console.error(`Error in completing task with ID: ${taskId}: ${result.error}`); 
    }
  } catch (error) {
    console.error(`Server error while completing task with ID: ${taskId}: ${error.message}`); 
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
