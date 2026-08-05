const express = require("express");

const router = express.Router();

const { makePayment } = require("../controller/paymentController");

router.post("/pay", makePayment);

module.exports = router;