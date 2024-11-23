const express = require("express");
const router = express.Router();
const taskRouter = require("./v1/task");
const categoriesRouter = require("./v1/categories");

router.use("/v1", taskRouter);
router.use("/v1", categoriesRouter);

module.exports = router;
