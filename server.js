const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const addressRoutes = require("./routes/addressRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
    res.send("Welcome to RentHub Backend 🚀");
});

pool.connect()
.then(() => {
    console.log("✅ PostgreSQL Connected Successfully");
})
.catch((err) => {
    console.log("❌ Database Connection Failed");
    console.log(err.message);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});