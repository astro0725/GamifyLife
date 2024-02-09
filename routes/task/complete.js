const express = require('express');
const router = express.Router();
const { completeTask } = require('../../controllers/onComplete'); 

// POST route to complete a task
router.post('/:tasksId', async (req, res) => {
  const tasksId = req.params.tasksId;

  console.log(`Attempting to complete task with ID: ${tasksId}`); 

  try {
    const result = await completeTask(tasksId);

    if (result.success) {
      console.log(`task with ID: ${tasksId} completed successfully: ${result}`);
    } else {
      console.error(`Error in completing task with ID: ${tasksId}: ${result.error}`); 
    }
  } catch (error) {
    console.error(`Server error while completing task with ID: ${tasksId}: ${error.message}`); 
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
