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

// ===> Akademik Start <===
// show all akademik
export const showAllAkademik = (req, res) => {
  getAkademik((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// insert akademik
export const insertAkademik = (req, res) => {
  const data = req.body;
  postAkademik(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// edit akademik
export const editAkademik = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putAkademik(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete akademik
export const delAkademik = (req, res) => {
  const id = req.params.id;
  deleteAkademik(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// ===> Akademik End <===
