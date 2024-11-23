const Task = require("../models/task-model");
const TaskSchema = require("../utils/validation");

async function handleGetAllTask(req, res) {
  try {
    const task = await Task.find({});
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all the task",
      data: { task },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while getting the task.");
    console.log(error);
    return res.status(411).json({
      success: false,
      message: "Something went wrong while getting the task",
      data: {},
      error: error.message,
    });
  }
}

async function handleCreateTask(req, res) {
  const { title, description } = req.body;

  try {
    if (!title || !description) {
      throw new Error("Invalid request");
    }

    const isTaskSchemaValid = TaskSchema.safeParse({ title, description });
    if (!isTaskSchemaValid.success) {
      throw new Error("Invalid Length");
    }
    const task = await Task.create({
      title: title,
      description: description,
    });
    console.log(task);
    return res.status(200).json({
      success: true,
      message: "Successfully created the task",
      data: { task },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while creating the task.");
    console.log(error);
    return res.status(411).json({
      success: false,
      message: "Something went wrong while creating the task",
      data: {},
      error: error.message,
    });
  }
}

async function handleDeleteTask(req, res) {
  const { task_id } = req.body;
  try {
    if (!task_id) {
      throw new Error("Invalid Delete ID");
    }
    const deletedTask = await Task.findByIdAndDelete({
      _id: task_id,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully deleted the task",
      data: { deletedTask },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while deleting the task.");
    console.log(error);
    return res.status(411).json({
      success: false,
      message: "Something went wrong while deleting the task",
      data: {},
      error: error.message,
    });
  }
}

async function handleCompleteTask(req, res) {
  const { task_id } = req.body;
  try {
    if (!task_id) {
      throw new Error("Invalid Task ID");
    }
    const task = await Task.findById({
      _id: task_id,
    });

    if (task.status === "Completed") {
      throw new Error("Already Completed Task");
    }

    const completedTask = await Task.findByIdAndUpdate(
      {
        _id: task_id,
      },
      {
        status: "Completed",
      },
      { new: true }
    );

    console.log(completedTask);
    return res.status(200).json({
      success: true,
      message: "Successfully updated the status of the task",
      data: { completedTask },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while updating the status of the task.");
    console.log(error);
    return res.status(411).json({
      success: false,
      message: "Something went wrong while updating the status of the task",
      data: {},
      error: error.message,
    });
  }
}

module.exports = {
  handleGetAllTask,
  handleCreateTask,
  handleDeleteTask,
  handleCompleteTask,
};
