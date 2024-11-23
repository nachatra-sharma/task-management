const express = require("express");
const router = express.Router();
const taskRouter = require("./v1/index");

router.use("/v1", taskRouter);

module.exports = router;
