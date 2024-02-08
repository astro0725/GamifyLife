const express = require('express');
const router = express.Router(); 
const { createTask } = require('../../controllers/taskHandling'); 

// POST request to create a new task
router.post('/', async (req, res) => {
  const { title, content, difficulty } = req.body; 

  const result = await createTask(req, title, content, difficulty);

  if (result.success) {
    console.log('Task created successfully:', result.task); 
  } else {
    console.error('Task creation error:', result.error); 
    res.status(400).json({ error: result.error });
  }
});

module.exports = router;
