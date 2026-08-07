const express = require("express");
const router = express.Router();

const { saveAddress } = require("../controller/addressController");

console.log("saveAddress =", saveAddress);

router.post("/add", saveAddress);

module.exports = router;