const express = require('express');
const router = express.Router(); 
const { deleteTask } = require('../../controllers/taskHandling'); 

// DELETE request to delete an existing task
router.delete('/:taskId', async (req, res) => {
  const taskId = req.params.taskId; 
  const result = await deleteTask(req, taskId);

  if (result.success) {
    console.log('Task deleted successfully');
  } else {
    console.error('Task deletion error:', result.error);
    res.status(500).json({ error: result.error });
  }
});

module.exports = router;