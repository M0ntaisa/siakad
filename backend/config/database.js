// import mysql
import mysql from "mysql2";

// create connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_sisfomaster28"
});

export default db;