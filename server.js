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
app.use(express.static(path.join(__dirname, "../Frontend")));


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/products", productRoutes);


// Home page
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../Frontend/index.html")
    );
});


// Database connection
pool.connect()
.then(() => {
    console.log("✅ PostgreSQL Connected Successfully");
})
.catch((err) => {
    console.log("❌ Database Connection Failed");
    console.log(err.message);
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});