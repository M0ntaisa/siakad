// import db connection 
import db from "../config/database.js";

// function to get all data
const getAll = (table, result) => {
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
const postData = (table, data, result) => {
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
const deleteEntry = (table, id, result) => {
  db.query(`DELETE FROM ${table} WHERE ID = ?`, [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// ===> Identitas Kampus Start <===
// get identitas kampus
export const getIdentitasKampus = (result) => {
  const table = "identitas";
  getAll(table, result);
};

// put identitas kampus
export const putIdentitasKampus = (data, id, result) => {
  db.query("UPDATE identitas SET Identitas_ID = ?, KodeHukum = ?, Nama_Identitas = ?, TglMulai = ?, Alamat1 = ?, Kota = ?, KodePos = ?, Telepon = ?, Email = ?, Website = ?, NoAkta = ?, TglAkta = ?, NoSah = ?, TglSah = ? WHERE ID = ?", [data.identitas_id, data.kode_hukum, data.nama_identitas, data.tgl_mulai, data.alamat, data.kota, data.kodepos, data.telepon, data.email, data.website, data.no_akta, data.tgl_akta, data.no_sah, data.tgl_sah, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete identitas kampus
export const deleteIdentitasKampus = (id, result) => {
  const table = "identitas";
  deleteEntry(table, id, result);
};

// ===> Identitas Kampus End <===

// ===> Program Studi Start <===
// get program studi
export const getAllProdi = (result) => {
  const table = "jurusan";
  getAll(table, result);
};

// post program studi
export const postProdi = (data, result) => {
  const table = "jurusan";
  postData(table, data, result);
};

// put program studi
export const putProdi = (data, id, result) => {
  db.query("UPDATE jurusan SET Identitas_ID = ?, Jurusan_ID = ?, nama_jurusan = ?, kprodi = ?, nama_fakultas = ?, jenjang = ?, akreditasi = ? WHERE ID = ?", [data.identitas_id, data.jurusan_id, data.nama_jurusan, data.ketua_prodi, data.nama_fakultas, data.jenjang, data.akreditasi, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete program studi
export const deleteProdi = (id, result) => {
  const table = "jurusan";
  deleteEntry(table, id, result);
};

// ===> Program Studi End <===

// ===> Program Start <===
// get all program
export const getAllProgram = (result) => {
  const table = "program";
  getAll(table, result);
};

// post program
export const postProgram = (data, result) => {
  const table = "program";
  postData(table, data, result);
};

// put program studi
export const putProgram = (data, id, result) => {
  db.query("UPDATE program SET Identitas_ID = ?, Program_ID = ?, nama_program = ? WHERE ID = ?", [data.identitas_id, data.program_id, data.nama_program, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete program studi
export const deleteProgram = (id, result) => {
  const table = "program";
  deleteEntry(table, id, result);
};

// ===> Program End <===

// ===> Fakultas Start <===
// get all fakultas
export const getAllFakultas = (result) => {
  const table = "fakultas";
  getAll(table, result);
};

// post fakultas
export const postFakultas = (data, result) => {
  const table = "fakultas";
  postData(table, data, result);
};

// put fakultas
export const putFakultas = (data, id, result) => {
  db.query("UPDATE fakultas SET Identitas_ID = ?, kode_fakultas = ?, nama_fakultas = ?, Dekan = ? WHERE ID = ?", [data.identitas_id, data.kode_fakultas, data.nama_fakultas, data.dekan, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete fakultas
export const deleteFakultas = (id, result) => {
  const table = "fakultas";
  deleteEntry(table, id, result);
};

// ===> Fakultas End <===

// ===> Kampus Start <===
// get all kampus
export const getAllKampus = (result) => {
  const table = "kampus";
  getAll(table, result);
};

// post kampus
export const postKampus = (data, result) => {
  const table = "kampus";
  postData(table, data, result);
};

// put kampus
export const putKampus = (data, id, result) => {
  db.query("UPDATE kampus SET Identitas_ID = ?, Kampus_ID = ?, Nama = ?, Alamat = ?, Kota = ?, Telepon = ?, Fax = ? WHERE ID = ?", [data.identitas_id, data.kampus_id, data.nama, data.alamat, data.kota, data.telepon, data.fax, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete kampus
export const deleteKampus = (id, result) => {
  const table = "kampus";
  deleteEntry(table, id, result);
};

// ===> Kampus End <===

// ===> Ruangan Start <===
// ===> Ruangan End <===

// ===> Mata Kuliah Start <===
// ===> Mata Kuliah End <===

// ===> Dosen Start <===
// get all dosen
export const getAllDosen = (result) => {
  const table = "dosen";
  getAll(table, result);
}

// post dosen
export const postDosen = (data, result) => {
  const table = "dosen";
  postData(table, data, result);
}

// put dosen
export const putDosen = (data, id, result) => {
  db.query("UPDATE dosen SET NIDN = ?, nama_lengkap = ?, username = ?, password = ?, TempatLahir = ?, TanggalLahir = ?, Identitas_ID = ? WHERE ID = ?", [data.nidn, data.nama_lengkap, data.username, data.password, data.tempat_lahir, data.tanggal_lahir, data.identitas_id, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// delete dosen
export const deleteDosen = (id, result) => {
  const table = "dosen";
  deleteEntry(table, id, result);
}

// ===> Dosen End <===
