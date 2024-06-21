const express = require("express");
const demo = require("./controllers/demo");
const app = express();

app.use("/api", demo);

app.listen(5000, () => {
  console.log("connected 5000");
});
