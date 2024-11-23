const express = require("express");
const app = express();
const ServerConfig = require("./config/server-config");
const PORT = ServerConfig.PORT || 3000;
const connectToDB = require("./db/db");
const apiRouter = require("./route");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(3000, async () => {
  console.log(`Server is up and running on PORT ${PORT}`);
  await connectToDB(ServerConfig.DB_URL);
});
