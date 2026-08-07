const { Pool } = require("pg");
require("dotenv").config();

let pool;

if (process.env.DATABASE_URL) {
    // Railway / Production
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    // Local Development
    pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "RentHub",
        password: "2005",
        port: 5432
    });
}

pool.connect()
    .then(() => console.log("✅ PostgreSQL Connected Successfully"))
    .catch(err => console.log("❌ Database Connection Failed", err.message));

module.exports = pool;
