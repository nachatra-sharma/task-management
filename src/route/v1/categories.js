const express = require("express");
const router = express.Router();
const { categoriesController } = require("../../controllers");

// categories routes
router.post("/categories", categoriesController.handleCreateCategories);
router.get("/categories", categoriesController.handleGetAllCategories);
router.delete("/categories", categoriesController.handleDeleteCategories);
router.patch("/categories", categoriesController.handleUpdateCategories);

module.exports = router;
