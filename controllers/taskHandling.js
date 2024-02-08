const db = require("../models");
const Task = db.Tasks;

async function createTask(req, title, content, difficulty) {
  try {
    // check if there is an authenticated user 
    if (!req.session.userId) {
      return { error: "User not authenticated." };
    }

    const userId = req.session.userId;

    // create a new task record associated with the authenticated user
    const newTask = await Task.create({
      title: title,
      content: content,
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

// // function to edit data of already existing task
// async function editTask(req, taskId, updatedData) {
//   try {
//     // check if there is an authenticated user
//     if (!req.session.userId) {
//       return { error: "User not authenticated." };
//     }

//     const userId = req.session.userId;

//     // find the task in the database
//     const existingTask = await Task.findOne({
//       where: { id: taskId, userId: userId },
//     });

//     if (!existingTask) {
//       return { error: "Task not found." };
//     }

//     // update the task data with the provided updatedData
//     await existingTask.update(updatedData);

//     console.log("Task edited successfully:", existingTask);
//     return { success: true, task: existingTask };
//   } catch (error) {
//     console.error("Error editing task:", error);
//     return { error: "Error editing task." };
//   }
// }

async function deleteTask(req, res) {
  const tasksId = req.params.tasksId;

  try {
    // check if there is an authenticated user
    if (!req.session.userId) {
      return res.status(401).json({ error: "User not authenticated." });
    }

    const userId = req.session.userId;

    // find the task in the database
    const existingTask = await Task.findOne({
      where: { tasksid: tasksId, userId: userId },
    });

    if (!existingTask) {
      return res.status(404).json({ error: "Task not found." });
    }

    // delete the task from the database
    await existingTask.destroy();

    console.log("Task deleted successfully.");
    res.status(200).json({ message: "Task deleted successfully." });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Error deleting task." });
  }
}

module.exports = {
  createTask,
  // editTask,
  deleteTask,
};