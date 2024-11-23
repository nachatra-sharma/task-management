const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 30,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 500,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Completed", "Pending"],
    },
    dueDate: {
      type: Date,
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
