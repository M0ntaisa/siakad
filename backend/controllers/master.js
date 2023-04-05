// import functions from masterModel
import {
  getIdentitasKampus,
  getCodeIdentitas,
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
  getCodeFakultas,
  postFakultas,
  putFakultas,
  deleteFakultas,
  getAllKampus,
  postKampus,
  putKampus,
  deleteKampus,
  getAllDosen,
  postDosen,
  putDosen,
  deleteDosen,
  getAllMahasiswa,
  postMahasiswa,
  putMahasiswa,
  deleteMahasiswa,
} from "../models/masterModel.js";

// import handle response
import { handleResponse } from "../models/functions.js";

// ===> Identitas Kampus Start <===
// show identitas kampus
export const showIdentitas =  (req, res) => {
  getIdentitasKampus((err, results) => {
    handleResponse(err, results, res);
  });
};

// show code identitas
export const showCodeIdentitas = (req, res) => {
  getCodeIdentitas((err, results) => {
    handleResponse(err, results, res);
  });
};

// Edit identitas kampus
export const editIdentitasKampus = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putIdentitasKampus(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete identitas kampus
export const delIdentitasKampus = (req, res) => {
  const id = req.params.id;
  deleteIdentitasKampus(id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// ===> Identitas Kampus End <===

// ===> Program Studi Start <===
// show all prodi
export const showAllProdi = (req, res) => {
  getAllProdi((err, results) => {
    handleResponse(err, results, res);
  });
};

// insert prodi
export const insertProdi = (req, res) => {
  const data = req.body;
  postProdi(data, (err, results) => {
    handleResponse(err, results, res);
  });
};

// edit prodi
export const editProdi = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putProdi(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete prodi
export const delProdi = (req, res) => {
  const id = req.params.id;
  deleteProdi(id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// ===> Program Studi End <===

// ===> Program Start <===
// show program
export const showAllPrograms = (req, res) => {
  getAllProgram((err, results) => {
    handleResponse(err, results, res);
  });
};

// insert program
export const insertProgram = (req, res) => {
  const data = req.body;
  postProgram(data, (err, results) => {
    handleResponse(err, results, res);
  });
};

// edit program
export const editProgram = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putProgram(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete program
export const delProgram = (req, res) => {
  const id = req.params.id;
  deleteProgram(id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// ===> Program End <===

// ===> Fakultas Start <===
// show all fakultas
export const showAllFakultas = (req, res) => {
  getAllFakultas((err, results) => {
    handleResponse(err, results, res);
  });
};

// show code fakultas
export const showCodeFakultas = (req, res) => {
  getCodeFakultas((err, results) => {
    handleResponse(err, results, res);
  });
};

// insert fakultas
export const insertFakultas = (req, res) => {
  const data = req.body;
  postFakultas(data, (err, results) => {
    handleResponse(err, results, res);
  });
};

// edit fakultas
export const editFakultas = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putFakultas(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete fakultas
export const delFakultas = (req, res) => {
  const id = req.params.id;
  deleteFakultas(id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// ===> Fakultas End <===

// ===> Kampus Start <===
// show kampus
export const showAllKampus = (req, res) => {
  getAllKampus((err, results) => {
    handleResponse(err, results, res);
  });
};

// insert kampus
export const insertKampus = (req, res) => {
  const data = req.body;
  postKampus(data, (err, results) => {
    handleResponse(err, results, res);
  });
};

// edit kampus
export const editKampus = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putKampus(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete kampus
export const delKampus = (req, res) => {
  const id = req.params.id;
  deleteKampus(id, (err, results) => {
    handleResponse(err, results, res);
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
    handleResponse(err, results, res);
  });
};

// insert dosen
export const insertDosen = (req, res) => {
  const data = req.body;
  postDosen(data, (err, results) => {
    handleResponse(err, results, res);
  });
};

// edit dosen
export const editDosen = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putDosen(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete dosen
export const delDosen = (req, res) => {
  const id = req.params.id;
  deleteDosen(id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// ===> Dosen End <===

// ===> Mahasiswa Start <===
// show mahasiswa
export const showAllMahasiswa = (req, res) => {
  getAllMahasiswa((err, results) => {
    handleResponse(err, results, res);
  });
};

// insert mahasiswa
export const insertMahasiswa = (req, res) => {
  const data = req.body;
  postMahasiswa(data, (err, results) => {
    handleResponse(err, results, res);
  });
};

// edit mahasiswa
export const editMahasiswa = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  putMahasiswa(data, id, (err, results) => {
    handleResponse(err, results, res);
  });
};

// delete mahasiswa
export const delMahasiswa = (req, res) => {
  const id = req.params.id;
  deleteMahasiswa(id, (err, results) => {
    handleResponse(err, results, res);
  });
};
// ===> Mahasiswa End <===