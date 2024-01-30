const db = require("../models");
const Reward = db.Rewards;

async function createReward(req, title, cost) {
  try {
    // check if there is an authenticated user 
    if (!req.session.userId) {
      return { error: "User not authenticated." };
    }

    const userId = req.session.userId;

    // create a new reward record associated with the authenticated user
    const newReward = await Reward.create({
      title: title,
      cost: cost,
      userId: userId, 
    });

    console.log("Reward created successfully:", newReward);
    return { success: true, Reward: newReward };
  } catch (error) {
    console.error("Error creating Reward:", error);
    return { error: "Error creating Reward." };
  }
}

// function to edit data of already existing Reward
async function editReward(req, rewardId, updatedData) {
  try {
    // check if there is an authenticated user
    if (!req.session.userId) {
      return { error: "User not authenticated." };
    }

    const userId = req.session.userId;

    // find the Reward in the database
    const existingReward = await Reward.findOne({
      where: { id: rewardId, userId: userId },
    });

    if (!existingReward) {
      return { error: "Reward not found." };
    }

    // update the Reward data with the provided updatedData
    await existingReward.update(updatedData);

    console.log("Reward edited successfully:", existingReward);
    return { success: true, Reward: existingReward };
  } catch (error) {
    console.error("Error editing Reward:", error);
    return { error: "Error editing Reward." };
  }
}

async function deleteReward(req, res) {
  const rewardId = req.params.rewardId;

  try {
    // check if there is an authenticated user
    if (!req.session.userId) {
      return res.status(401).json({ error: "User not authenticated." });
    }

    const userId = req.session.userId;

    // find the reward in the database
    const existingReward = await Reward.findOne({
      where: { id: rewardId, userId: userId },
    });

    if (!existingReward) {
      return res.status(404).json({ error: "Reward not found." });
    }

    // delete the reward from the database
    await existingReward.destroy();

    console.log("Reward deleted successfully.");
    res.status(200).json({ message: "Reward deleted successfully." });
  } catch (error) {
    console.error("Error deleting Reward:", error);
    res.status(500).json({ error: "Error deleting Reward." });
  }
}

module.exports = {
  createReward,
  editReward,
  deleteReward,
};