const Categories = require("../models/categories-model");
const Task = require("../models/task-model");
const { TaskSchema, TaskUpdateSchema } = require("../utils/validation");

async function handleGetAllTask(req, res) {
  try {
    const task = await Task.find({}).populate("categories");
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all the task",
      data: { task },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while getting the task.");
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong while getting the task",
      data: {},
      error: error.message,
    });
  }
}

async function handleCreateTask(req, res) {
  const { title, description, dueDate, categories } = req.body;

  try {
    if (!title || !description) {
      throw new Error("Title and description is required");
    }

    const isTaskSchemaValid = TaskSchema.safeParse({ title, description });
    if (!isTaskSchemaValid.success) {
      throw new Error("Invalid Data (title or description)");
    }
    const task = await Task.create({
      title: title,
      description: description,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      categories,
    });
    if (categories) {
      await Categories.findByIdAndUpdate(
        categories,
        { $push: { data: task._id } },
        { new: true }
      );
    }
    return res.status(200).json({
      success: true,
      message: "Successfully created the task",
      data: { task },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while creating the task.");
    console.log(error);
    return res.status(400).json({
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
      throw new Error("Task ID is required");
    }
    const deletedTask = await Task.findByIdAndDelete({
      _id: task_id,
    });
    if (!deletedTask) {
      throw new Error("Task not found");
    }
    return res.status(200).json({
      success: true,
      message: "Successfully deleted the task",
      data: { deletedTask },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while deleting the task.");
    console.log(error);
    return res.status(400).json({
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
      throw new Error("Task ID is required");
    }
    const task = await Task.findById({
      _id: task_id,
    });

    if (task.status === "Completed") {
      throw new Error("We cannot update already completed task");
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
    return res.status(200).json({
      success: true,
      message: "Successfully updated the status of the task",
      data: { completedTask },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while updating the status of the task.");
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong while updating the status of the task",
      data: {},
      error: error.message,
    });
  }
}

async function handleUpdateTask(req, res) {
  const { task_id, title, description, dueDate } = req.body;
  try {
    if (!task_id) {
      throw new Error("Task ID is required");
    }
    const isValidTaskSchema = TaskUpdateSchema.safeParse({
      title,
      description,
    });
    if (!isValidTaskSchema.success) {
      throw new Error("Title or description must be valid");
    }
    const updatedTask = await Task.findByIdAndUpdate(
      {
        _id: task_id,
      },
      {
        title: title,
        description: description,
        dueDate: dueDate,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated the task.",
      data: { updatedTask },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while updating the task.");
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong while updating the task",
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
  handleUpdateTask,
};
