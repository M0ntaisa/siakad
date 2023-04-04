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
  const query = "UPDATE admin SET username = ?, password = ?, nama_lengkap = ?, keterangan = ?, email = ?, telepon = ?, foto = ? WHERE ID = ?";

  db.query(query, [data.username, data.password, data.nama_lengkap, data.keterangan, data.email, data.telepon, data.foto, id], (err, results) => {
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
  deleteEntry(table, id, result);
};

// ===> Administrator End <===

// ===> Akademik Start <===
// get akademin
export const getAkademik = (result) => {
  const table = "akademik";
  getAll(table, result);
};

// post akademik
export const postAkademik = (data, result) => {
  const table = "akademik";
  postData(table, data, result);
};

// put akademik
export const putAkademik = (data, id, result) => {
  const query = "UPDATE akademik SET Identitas_ID = ?, Jurusan_ID = ?, username = ?, password = ?, nama_lengkap = ?, alamat = ?, keterangan = ?, email = ?, telepon = ?, foto = ? WHERE ID = ?";
  
  db.query(query, [data.identitas_id, data.jurusan_id, data.username, data.password, data.nama_lengkap, data.alamat, data.keterangan, data.email, data.telepon, data.foto, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete akademik
export const deleteAkademik = (id, result) => {
  const table = "akademik";
  deleteEntry(table, id, result);
};

// ===> Akademik End <===

// ===> Hak Modul Start <===
// get hak modul

// ===> Hak Modul End <===
