const pool = require("../config/db");

// Save Payment
const makePayment = async (req, res) => {

    try {

        const {
            booking_id,
            payment_method,
            amount
        } = req.body;

        await pool.query(
            `INSERT INTO payments
            (booking_id, payment_method, amount)
            VALUES ($1,$2,$3)`,
            [
                booking_id,
                payment_method,
                amount
            ]
        );

        res.status(201).json({
            message: "Payment Successful"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    makePayment
};