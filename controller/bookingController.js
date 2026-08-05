const pool = require("../config/db");

const createBooking = async (req, res) => {

    try {

        const {
            user_id,
            product_id,
            start_date,
            end_date,
            rental_days,
            total_amount
        } = req.body;

        await pool.query(
            `INSERT INTO bookings
            (user_id, product_id, start_date, end_date, rental_days, total_amount)
            VALUES ($1,$2,$3,$4,$5,$6)`,
            [
                user_id,
                product_id,
                start_date,
                end_date,
                rental_days,
                total_amount
            ]
        );

        res.status(201).json({
            message: "Booking Successful"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
    createBooking
};