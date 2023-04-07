// import db connection 
import db from "../config/database.js";

// import functions
import {
  getAll,
  postData,
  deleteEntry,
  handleErr,
} from "./functions.js";

// ===> Identitas Kampus Start <===
// get identitas kampus
export const getIdentitasKampus = (result) => {
  const table = "identitas";
  getAll(table, result);
};

// get code identitas
export const getCodeIdentitas = (result) => {
  const query = "SELECT Identitas_ID, Nama_Identitas FROM identitas";

  db.query(query, (err, results) => {
    handleErr(err, result, results);
  });
};

// put identitas kampus
export const putIdentitasKampus = (data, id, result) => {
  const query = "UPDATE identitas SET Identitas_ID = ?, KodeHukum = ?, Nama_Identitas = ?, TglMulai = ?, Alamat1 = ?, Kota = ?, KodePos = ?, Telepon = ?, Email = ?, Website = ?, NoAkta = ?, TglAkta = ?, NoSah = ?, TglSah = ? WHERE ID = ?";

  db.query(query, [data.identitas_id, data.kode_hukum, data.nama_identitas, data.tgl_mulai, data.alamat, data.kota, data.kodepos, data.telepon, data.email, data.website, data.no_akta, data.tgl_akta, data.no_sah, data.tgl_sah, id], (err, results) => {
    handleErr(err, result, results);
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
  const query = "UPDATE jurusan SET Identitas_ID = ?, Jurusan_ID = ?, nama_jurusan = ?, kprodi = ?, nama_fakultas = ?, jenjang = ?, akreditasi = ? WHERE ID = ?";

  db.query(query, [data.identitas_id, data.jurusan_id, data.nama_jurusan, data.ketua_prodi, data.nama_fakultas, data.jenjang, data.akreditasi, id], (err, results) => {
    handleErr(err, result, results);
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
  const query = "UPDATE program SET Identitas_ID = ?, Program_ID = ?, nama_program = ? WHERE ID = ?";

  db.query(query, [data.identitas_id, data.program_id, data.nama_program, id], (err, results) => {
    handleErr(err, result, results);
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

// get kode fakultas
export const getCodeFakultas = (result) => {
  const query = "SELECT kode_fakultas, nama_fakultas FROM fakultas";

  db.query(query, (err, results) => {
    handleErr(err, result, results);
  });
};

// post fakultas
export const postFakultas = (data, result) => {
  const table = "fakultas";
  postData(table, data, result);
};

// put fakultas
export const putFakultas = (data, id, result) => {
  const query ="UPDATE fakultas SET Identitas_ID = ?, kode_fakultas = ?, nama_fakultas = ?, Dekan = ? WHERE ID = ?";

  db.query(query, [data.identitas_id, data.kode_fakultas, data.nama_fakultas, data.dekan, id], (err, results) => {
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

// get code kampus
export const getCodeKampus = (result) => {
  const query = "SELECT Kampus_ID, Nama FROM kampus";

  db.query(query, (err, results) => {
    handleErr(err, result, results);
  });
};

// post kampus
export const postKampus = (data, result) => {
  const table = "kampus";
  postData(table, data, result);
};

// put kampus
export const putKampus = (data, id, result) => {
  const query = "UPDATE kampus SET Identitas_ID = ?, Kampus_ID = ?, Nama = ?, Alamat = ?, Kota = ?, Telepon = ?, Fax = ? WHERE ID = ?";

  db.query(query, [data.identitas_id, data.kampus_id, data.nama, data.alamat, data.kota, data.telepon, data.fax, id], (err, results) => {
    handleErr(err, result, results);
  });
};

// delete kampus
export const deleteKampus = (id, result) => {
  const table = "kampus";
  deleteEntry(table, id, result);
};

// ===> Kampus End <===

// ===> Kurikulum Start <===
// get spesify kurikulum
export const getSpesifyKurikulum = (data, result) => {
  const query = "SELECT Kurikulum_ID, Kode, Nama FROM kampus WHERE Identitas_ID = ? AND Jurusan_ID = ?";
  
  db.query(query, [data.identitas_id, data.jurusan_id], (err, results) => {
    handleErr(err, result, results);
  });
};

// ===> Kurikulum End <===

// ===> Ruangan Start <===
// ===> Ruangan End <===

// ===> Mata Kuliah Start <===
// get spesify matakuliah
export const getSpesifyMatakuliah = (data, result) => {
  const query = "SELECT * FROM matakuliah WHERE Identitas_ID = ? AND Jurusan_ID = ? AND Kurikulum_ID = ?";

  db.query(query, [data.identitas_id, data.jurusan_id, data.kurikulum_id], (err, results) => {
    handleErr(err, result, results);
  });
};

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
  const query = "UPDATE dosen SET NIDN = ?, nama_lengkap = ?, username = ?, password = ?, TempatLahir = ?, TanggalLahir = ?, Identitas_ID = ? WHERE ID = ?";

  db.query(query, [data.nidn, data.nama_lengkap, data.username, data.password, data.tempat_lahir, data.tanggal_lahir, data.identitas_id, id], (err, results) => {
    handleErr(err, result, results);
  });
};

// delete dosen
export const deleteDosen = (id, result) => {
  const table = "dosen";
  deleteEntry(table, id, result);
}

// ===> Dosen End <===

// ===> Mahasiswa Start <===
// get all mahasiswa
export const getAllMahasiswa = (result) => {
  const table = "mahasiswa";
  getAll(table, result);
}

// post mahasiswa
export const postMahasiswa = (data, result) => {
  const table = "mahasiswa";
  postData(table, data, result);
}

// put mahasiswa
export const putMahasiswa = (data, id, result) => {
  const query = "UPDATE mahasiswa SET Identitas_ID = ?, Jurusan_ID = ?, Program_ID = ?, nama = ?, NIM = ?, Angkata = ?, username = ?, password = ?, TempatLahir = ?, TanggalLahir = ?, Kelamin = ?, Agama = ?, StatusSipil = ?, Alamat = ?, StatusAwal_ID = ?, PenasehatAkademik = ? WHERE ID = ?";
  
  db.query(query, [data.identitas_id, data.jurusan_id, data.program_id, data.nama, data.nim, data.angkatan, data.username, data.password, data.tempat_lahir, data.tanggal_lahir, data.kelamin, data.agama, data.status_sipil, data.alamat, data.status_awal, data.penasehat_akademik, id], (err, results) => {
    handleErr(err, result, results);
  });
};

// delete mahasiswa
export const deleteMahasiswa = (id, result) => {
  const table = "mahasiswa";
  deleteEntry(table, id, result);
}

// ===> Mahasiswa End <===
