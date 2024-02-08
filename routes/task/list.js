const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.status(401).json({ error: "User not authenticated." });
  }

  try {
    const tasks = await Task.findAll({
      where: { userId: userId },
    });
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Error fetching tasks." });
  }
});

module.exports = router;