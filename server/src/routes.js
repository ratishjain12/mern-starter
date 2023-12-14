const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Page!!");
});

router.get("/health", (req, res) => {
  res.send("Health Score: 100%");
});

module.exports = router;
