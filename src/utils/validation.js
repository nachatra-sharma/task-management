const zod = require("zod");

const TaskSchema = zod.object({
  title: zod
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must not exceed 50 characters"),
  description: zod
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters"),
});

module.exports = TaskSchema;
