const db = require("../models");
const Task = db.Tasks;

async function createTask(req, title, description) {
  try {
    // check if there is an authenticated user 
    if (!req.session.userId) {
      return { error: "User not authenticated." };
    }

    const userId = req.session.userId;

    // create a new task record associated with the authenticated user
    const newTask = await Task.create({
      title: title,
      description: description,
      difficulty: difficulty,
      userId: userId, 
    });

    console.log("Task created successfully:", newTask);
    return { success: true, task: newTask };
  } catch (error) {
    console.error("Error creating task:", error);
    return { error: "Error creating task." };
  }
}

module.exports = {
  createTask,
};