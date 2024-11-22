const express = require("express");
const app = express();
const ServerConfig = require("./config/server-config");
const PORT = ServerConfig.PORT || 3000;
const connectToDB = require("./db/db");

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Successfully made a get req",
    data: {},
    error: {},
  });
});

app.listen(3000, async () => {
  console.log(`Server is up and running on PORT ${PORT}`);
  await connectToDB(ServerConfig.DB_URL);
});
