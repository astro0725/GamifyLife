const express = require('express');
const router = express.Router(); 
const { editTask } = require('../../controllers/taskHandling');

// PUT request to edit an existing task
router.put('/:taskId', async (req, res) => {
  const taskId = req.params.taskId; 
  const { title, description, difficulty } = req.body; 
  const result = await editTask(req, rewardId, {
    title: title,
    description: description,
    difficulty: difficulty,
  });

  if (result.success) {
    console.log('Task edited successfully:', result.task); 
  } else {
    console.error('Task edit error:', result.error); 
    res.status(400).json({ error: result.error });
  }
});

module.exports = router;
