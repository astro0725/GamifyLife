const db = require("../models");
const Task = db.Tasks;
const User = db.User;
const Reward = db.Rewards;

// function to mark a task as completed and update user's experience and coins
async function completeTask(tasksId) {
  try {
    // find the task by its ID
    const task = await Task.findByPk(tasksId);
    if (!task) {
      return { error: "Task not found." };
    }

    // mark the task as completed
    task.isCompleted = true;
    await task.save();

    // determine experience and coins gain based on task difficulty
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

    // update user's experience and coins
    const user = await User.findByPk(task.userId);
    user.experience += experienceGain;
    user.coins += coinsGain; 

    // update user's level based on new experience
    updateLevel(user);
    await user.save();
    return { success: true, task, user };
  } catch (error) {
    console.error("Error completing task:", error);
    return { error: "Error completing task." };
  }
}

// function to update user's level based on experience
function updateLevel(user) {
  // define experience thresholds for each level
  const levelThresholds = [0, 100, 300, 600, 1000, 1500];

  // update the user's level based on their experience
  for (let level = levelThresholds.length - 1; level >= 0; level--) {
    if (user.experience >= levelThresholds[level]) {
      user.level = level + 1;
      break;
    }
  }

  // calculate the user's level as a percentage
  const isAtOrAboveMaxLevel = user.level >= levelThresholds.length;
  const nextLevelThreshold = isAtOrAboveMaxLevel ? levelThresholds[levelThresholds.length - 1] : levelThresholds[user.level];
  const currentLevelThreshold = levelThresholds[Math.max(0, user.level - 1)];

  const experienceWithinLevel = user.experience - currentLevelThreshold;
  const experienceToNextLevel = isAtOrAboveMaxLevel ? 0 : nextLevelThreshold - currentLevelThreshold; 

  user.levelProgress = isAtOrAboveMaxLevel ? 100 : (experienceWithinLevel / experienceToNextLevel) * 100;

  user.nextLevelThreshold = nextLevelThreshold;
  user.currentLevelThreshold = currentLevelThreshold;
}

// function to redeem a reward using user's coins
async function redeemReward(userId, rewardsId) {
  try {
    // find the user and reward by their IDs
    const user = await User.findByPk(userId);
    const reward = await Reward.findByPk(rewardsId);

    // check if the reward exists
    if (!reward) {
      return { error: "Reward not found." };
    }

    // check if the user has enough coins to redeem the reward
    if (user.coins < reward.cost) {
      return { error: "Not enough coins." };
    }

    // subtract the reward cost from user's coins and mark reward as redeemed
    user.coins -= reward.cost; 
    reward.isRedeemed = true; 

    // save the updated user and reward data
    await user.save();
    await reward.save();

    return { success: true, user, reward };
  } catch (error) {
    console.error("Error redeeming reward:", error);
    return { error: "Error redeeming reward." };
  }
}

module.exports = {
  completeTask,
  updateLevel,
  redeemReward,
};
