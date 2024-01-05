const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

export async function checkDatabaseConnection() {
  let conn;
  try {
    conn = await pool.getConnection();

    // Checking the connection without inserting anything
    await conn.ping();

    console.log("Database connected successfully!"); // Providing feedback on successful connection
  } catch (error) {
    console.error("Error connecting to the database:", error); // Handling errors
  } finally {
    if (conn) conn.release(); // Releasing the connection to the pool
  }
}
