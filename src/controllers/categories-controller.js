const Categories = require("../models/categories-model");

async function handleCreateCategories(req, res) {
  const { title } = req.body;
  try {
    if (!title) {
      throw new Error("Title is required");
    }
    const existingCategory = await Categories.findOne({ title });
    if (existingCategory) {
      throw new Error("Category with this title already exists");
    }
    const category = await Categories.create({
      title: title,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully created the category",
      data: { category },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while creating the category.");
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong while creating the category",
      data: {},
      error: error.message,
    });
  }
}

async function handleGetAllCategories(req, res) {
  try {
    const categories = await Categories.find({}).populate("data");
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all the categories",
      data: { categories },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while fetching the categories.");
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong while fetching the categories",
      data: {},
      error: error.message,
    });
  }
}

async function handleDeleteCategories(req, res) {
  const { categories_id } = req.body;
  try {
    if (!categories_id) {
      throw new Error("Category ID is required");
    }
    const category = await Categories.findByIdAndDelete({ _id: categories_id });
    if (!category) {
      throw new Error("Category not found");
    }
    return res.status(200).json({
      success: true,
      message: "Successfully deleted the category",
      data: { category },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while deleting the category.");
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong while deleting the category",
      data: {},
      error: error.message,
    });
  }
}

async function handleUpdateCategories(req, res) {
  const { categories_id, title } = req.body;
  try {
    if (!categories_id || !title) {
      throw new Error("Invalid title or category id");
    }
    const category = await Categories.findByIdAndUpdate(
      {
        _id: categories_id,
      },
      {
        title: title,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated the category",
      data: { category },
      error: {},
    });
  } catch (error) {
    console.log("Something went wrong while updating the category.");
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong while updating the category",
      data: {},
      error: error.message,
    });
  }
}

module.exports = {
  handleCreateCategories,
  handleGetAllCategories,
  handleDeleteCategories,
  handleUpdateCategories,
};
