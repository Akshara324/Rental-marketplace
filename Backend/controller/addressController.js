const pool = require("../config/db");

// Save Address
const saveAddress = async (req, res) => {
    try {
        const {
            user_id,
            full_name,
            phone,
            address_line,
            city,
            state,
            pincode
        } = req.body;

        await pool.query(
            `INSERT INTO addresses
            (user_id, full_name, phone, address_line, city, state, pincode)
            VALUES ($1,$2,$3,$4,$5,$6,$7)`,
            [
                user_id,
                full_name,
                phone,
                address_line,
                city,
                state,
                pincode
            ]
        );

        res.status(201).json({
            message: "Address Saved Successfully"
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

module.exports = {
    saveAddress
};