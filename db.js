require("dotenv").config();
const { Pool } = require("pg");

// Create a PostgreSQL connection pool using the DATABASE_URL environment variable
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
});
// Test the connection
pool.query("SELECT * FROM todo", (err, result) => {
  if (err) {
    console.error("Error testing database connection:", err);
  } else {
    console.log("Database connection test successful:", result.rows);
  }
});

module.exports = pool;
