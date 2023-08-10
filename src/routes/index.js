const express = require("express");
const router = express.Router();

router.use("/student", require("./student"));
console.log("hehe");

module.exports = router;
