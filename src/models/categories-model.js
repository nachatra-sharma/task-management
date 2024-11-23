const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
      unique: true,
    },
    data: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;
