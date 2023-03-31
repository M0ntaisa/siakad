// import db conncection
import db from "../config/database.js";

// import functions
import {
  getAll,
  postData,
  deleteEntry,
} from "./functions.js";

// ===> Administrator Start <===
// get administrator
export const getAdministrator = (result) => {
  const table = "admin";
  getAll(table, result);
};

// post administrator
export const postAdministrator = (data, result) => {
  const table = "admin";
  postData(table, data, result);
};

// put administrator
export const putAdministrator = (data, id, result) => {
  db.query("UPDATE admin SET username = ?, password = ?, nama_lengkap = ?, keterangan = ?, email = ?, telepon = ?, foto = ? WHERE ID = ?", [data.username, data.password, data.nama_lengkap, data.keterangan, data.email, data.telepon, data.foto, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete administrator
export const deleteAdministrator = (id, result) => {
  const table = "admin";
  deleteEntry(id, result);
}

// ===> Administrator End <===
