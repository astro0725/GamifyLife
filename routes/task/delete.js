const express = require('express');
const router = express.Router(); 
const { deleteTask } = require('../../controllers/taskHandling'); 

// DELETE request to delete an existing task
router.delete('/:taskId', async (req, res) => {
  await deleteTask(req, res); 
});

module.exports = router;