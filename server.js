require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const pool = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const addressRoutes = require("./routes/addressRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


// Serve Frontend
app.use(express.static(path.join(__dirname, "Frontend")));


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/products", productRoutes);


// Home page
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "Frontend/index.html")
    );
});


// Initialize Database Tables
const initDb = async () => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100) UNIQUE,
            phone VARCHAR(20),
            password VARCHAR(255)
        );

        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            category VARCHAR(100),
            description TEXT,
            price NUMERIC,
            image TEXT,
            owner_id INT REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS bookings (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id),
            product_id INT REFERENCES products(id),
            start_date DATE,
            end_date DATE,
            rental_days INT,
            total_amount NUMERIC
        );

        CREATE TABLE IF NOT EXISTS payments (
            id SERIAL PRIMARY KEY,
            booking_id INT REFERENCES bookings(id),
            payment_method VARCHAR(50),
            amount NUMERIC
        );

        CREATE TABLE IF NOT EXISTS addresses (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id),
            full_name VARCHAR(100),
            phone VARCHAR(20),
            address_line TEXT,
            city VARCHAR(100),
            state VARCHAR(100),
            pincode VARCHAR(20)
        );
    `;
    try {
        await pool.query(queryText);
        console.log("✅ Database tables initialized successfully");
    } catch (err) {
        console.log("❌ Error initializing tables:", err.message);
    }
};

// Database connection
pool.connect()
.then(() => {
    console.log("✅ PostgreSQL Connected Successfully");
    initDb();
})
.catch((err) => {
    console.log("❌ Database Connection Failed");
    console.log(err.message);
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});