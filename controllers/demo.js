const express = require("express");

const router = express.Router();

router.get("/sign", async (req, res, next) => {
  res.status(200).send("suceess");
});

module.exports = router;
