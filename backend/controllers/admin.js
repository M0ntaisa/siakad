// import functions from adminModel
import {
  getAdministrator,
  postAdministrator,
  putAdministrator,
  deleteAdministrator,
  getAkademik,
  postAkademik,
  putAkademik,
  deleteAkademik,
} from "../models/adminModel.js";

// import handle response
import { handleResponse } from "../models/functions.js";

// ===> Administrator Start <===
// show admin
export const showAdministrator = (req, res) => {
  getAdministrator((err, results) => {
    handleResponse(err, results, res);
  });
};

// insert admin
export const insertAdministrator = (req, res) => {
  const data = req.body;
  postAdministrator(data, (err, results) => {
    handleResponse(err, results, res);
  });
};

// edit admin
export const editAdministrator = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putAdministrator(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete admin
export const delAdministrator = (req, res) => {
  const id = req.params.id;
  deleteAdministrator(id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// ===> Administrator End <===

// ===> Akademik Start <===
// show all akademik
export const showAllAkademik = (req, res) => {
  getAkademik((err, results) => {
    handleResponse(err, results, res);
  });
};

// insert akademik
export const insertAkademik = (req, res) => {
  const data = req.body;
  postAkademik(data, (err, results) => {
    handleResponse(err, results, res);
  });
};

// edit akademik
export const editAkademik = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putAkademik(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete akademik
export const delAkademik = (req, res) => {
  const id = req.params.id;
  deleteAkademik(id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// ===> Akademik End <===

// ===> Hak Modul Start <===


// ===> Hak Modul End <===
