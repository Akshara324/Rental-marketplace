const express = require("express");
const router = express.Router();

const bookingController = require("../controller/bookingController");

console.log("Booking Controller =", bookingController);

router.get("/test", (req, res) => {
    res.send("Booking Route Working");
});

router.post("/add", bookingController.createBooking);

module.exports = router;