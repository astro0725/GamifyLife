const db = require("../models");
const Task = db.Tasks;
const User = db.User;

async function completeTask(taskId) {
  try {
    const task = await Task.findByPk(taskId);
    if (!task) {
      return { error: "Task not found." };
    }

    task.isCompleted = true;
    await task.save();

    let experienceGain, coinsGain;
    switch (task.difficulty) {
      case 'low':
        experienceGain = 10;
        coinsGain = 1;
        break;
      case 'medium':
        experienceGain = 20;
        coinsGain = 2;
        break;
      case 'high':
        experienceGain = 30;
        coinsGain = 3;
        break;
      default:
        experienceGain = 0;
        coinsGain = 0;
    }

    const user = await User.findByPk(task.userId);
    user.experience += experienceGain;
    user.coins += coinsGain; 

    updateLevel(user);
    await user.save();
    return { success: true, task, user };
  } catch (error) {
    console.error("Error completing task:", error);
    return { error: "Error completing task." };
  }
}

function updateLevel(user) {
  const levelThresholds = [0, 100, 300, 600, 1000, 1500];

  for (let level = levelThresholds.length - 1; level >= 0; level--) {
    if (user.experience >= levelThresholds[level]) {
      user.level = level + 1;
      break;
    }
  }
}

module.exports = {
  completeTask,
  updateLevel
};