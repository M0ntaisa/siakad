// import db conncection
import db from "../config/database.js";

// function to get all data
export const getAll = (table, result) => {
  db.query(`SELECT * FROM ${table}`, (err, results) => {
    if (err) {
      console.log(err);
      result(err.null);
    } else {
      result(null, results)
    }
  });
};

// function to post data
export const postData = (table, data, result) => {
  db.query(`INSERT INTO ${table} SET ?`, [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// function to delete one entry data
export const deleteEntry = (table, id, result) => {
  db.query(`DELETE FROM ${table} WHERE ID = ?`, [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};