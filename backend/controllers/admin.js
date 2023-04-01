// import functions from adminModel
import {
  getAdministrator,
  postAdministrator,
  putAdministrator,
  deleteAdministrator,
} from "../models/adminModel.js";

// ===> Administrator Start <===
// show admin
export const showAdministrator = (req, res) => {
  getAdministrator((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// insert admin
export const insertAdministrator = (req, res) => {
  const data = req.body;
  postAdministrator(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// edit admin
export const editAdministrator = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putAdministrator(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete admin
export const delAdministrator = (req, res) => {
  const id = req.params.id;
  deleteAdministrator(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// ===> Administrator End <===
