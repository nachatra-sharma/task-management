const express = require("express");
const router = express.Router();
const { taskController } = require("../../controllers");

router.get("/task", taskController.handleGetAllTask);
router.post("/task", taskController.handleCreateTask);
router.delete("/task", taskController.handleDeleteTask);
router.patch("/task/completed", taskController.handleCompleteTask);

module.exports = router;
