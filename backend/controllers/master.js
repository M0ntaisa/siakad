// import functions from masterModel
import {
  getIdentitasKampus,
  putIdentitasKampus,
  deleteIdentitasKampus,
  getAllProdi,
  postProdi,
  putProdi,
  deleteProdi,
  getAllProgram,
  postProgram,
  putProgram,
  deleteProgram,
  getAllFakultas,
  postFakultas,
  putFakultas,
  deleteFakultas,
  getAllKampus,
  postKampus,
  putKampus,
  deleteKampus,
  getAllDosen,
  postDosen,
} from "../models/masterModel.js";

// ===> Identitas Kampus Start <===
// show identitas kampus
export const showIdentitas =  (req, res) => {
  getIdentitasKampus((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Edit identitas kampus
export const editIdentitasKampus = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putIdentitasKampus(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete identitas kampus
export const delIdentitasKampus = (req, res) => {
  const id = req.params.id;
  deleteIdentitasKampus(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// ===> Identitas Kampus End <===

// ===> Program Studi Start <===
// show all prodi
export const showAllProdi = (req, res) => {
  getAllProdi((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// insert prodi
export const insertProdi = (req, res) => {
  const data = req.body;
  postProdi(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// edit prodi
export const editProdi = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putProdi(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete prodi
export const delProdi = (req, res) => {
  const id = req.params.id;
  deleteProdi(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// ===> Program Studi End <===

// ===> Program Start <===
// show program
export const showAllPrograms = (req, res) => {
  getAllProgram((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// insert program
export const insertProgram = (req, res) => {
  const data = req.body;
  postProgram(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// edit program
export const editProgram = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putProgram(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete program
export const delProgram = (req, res) => {
  const id = req.params.id;
  deleteProgram(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// ===> Program End <===

// ===> Fakultas Start <===
// show all fakultas
export const showAllFakultas = (req, res) => {
  getAllFakultas((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// insert fakultas
export const insertFakultas = (req, res) => {
  const data = req.body;
  postFakultas(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// edit fakultas
export const editFakultas = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putFakultas(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete fakultas
export const delFakultas = (req, res) => {
  const id = req.params.id;
  deleteFakultas(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// ===> Fakultas End <===

// ===> Kampus Start <===
// show kampus
export const showAllKampus = (req, res) => {
  getAllKampus((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// insert kampus
export const insertKampus = (req, res) => {
  const data = req.body;
  postKampus(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// edit kampus
export const editKampus = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putKampus(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete kampus
export const delKampus = (req, res) => {
  const id = req.params.id;
  deleteKampus(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// ===> Kampus End <===

// ===> Ruangan Start <===
// ===> Ruangan End <===

// ===> Mata Kuliah Start <===
// ===> Mata Kuliah End <===

// ===> Dosen Start <===
// show dosen
export const showAllDosen = (req, res) => {
  getAllDosen((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// insert dosen
export const insertDosen = (req, res) => {
  const data = req.body;
  postDosen(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
// ===> Dosen End <===