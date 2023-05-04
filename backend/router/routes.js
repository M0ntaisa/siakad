// import express
import express from "express";

// import functions from constollers
// master's functions
import {
  showIdentitas,
  showCodeIdentitas,
  editIdentitasKampus,
  delIdentitasKampus,
  showAllProdi,
  showCodeProdi,
  insertProdi,
  editProdi,
  delProdi,
  showAllPrograms,
  insertProgram,
  editProgram,
  delProgram,
  showAllFakultas,
  insertFakultas,
  editFakultas,
  delFakultas,
  showAllKampus,
  insertKampus,
  editKampus,
  delKampus,
  showAllDosen,
  insertDosen,
  editDosen,
  delDosen,
  showAllMahasiswa,
  insertMahasiswa,
  editMahasiswa,
  delMahasiswa,
} from "../controllers/master.js";

// admin's functions
import {
  showAdministrator,
  insertAdministrator,
  editAdministrator,
  delAdministrator,
  showAllAkademik,
  insertAkademik,
  editAkademik,
  delAkademik,
} from "../controllers/admin.js";


// init express router
const router = express.Router();

// ===> Identitas Kampus Start <===
// get all
router.get("/identitas", showIdentitas);

// get only code
router.get("/identitas-code", showCodeIdentitas);

// put
router.put("/identitas/:id", editIdentitasKampus);

// delete
router.delete("/identitas/:id", delIdentitasKampus);

// ===> Identitas Kampus End <===

// ===> Program Studi Start <===
// get all
router.get("/prodi", showAllProdi);

// get code prodi
router.get("/prodi-code", showCodeProdi);

// post
router.post("/prodi", insertProdi);

// put
router.put("/prodi/:id", editProdi);

// delete
router.delete("/prodi/:id", delProdi);

// ===> Program Studi End <===

// ===> Program Start <===
// get all
router.get("/program", showAllPrograms);

// post
router.post("/program", insertProgram);

// put
router.put("/program/:id", editProgram);

// delete 
router.delete("/program/:id", delProgram);

// ===> Program End <===

// ===> Fakultas Start <===
// get all
router.get("/fakultas", showAllFakultas);

// post
router.post("/fakultas", insertFakultas);

// put
router.put("/fakultas/:id", editFakultas);

// delete 
router.delete("/fakultas/:id", delFakultas);

// ===> Fakultas End <===

// ===> Kampus Start <===
// get all
router.get("/kampus", showAllKampus);

// post
router.post("/kampus", insertKampus);

// put
router.put("/kampus/:id", editKampus);

// delete 
router.delete("/kampus/:id", delKampus);

// ===> Kampus End <===

// ===> Ruangan Start <===
// ===> Ruangan End <===

// ===> Mata Kuliah Start <===
// ===> Mata Kuliah End <===

// ===> Dosen Start <===
//get all
router.get("/dosen", showAllDosen);

// post
router.post("/dosen", insertDosen);

// put
router.put("/dosen/:id", editDosen);

// delete
router.delete("/dosen/:id", delDosen);

// ===> Dosen End <===

// ===> Mahasiswa Start <===
// get all
router.get("/mahasiswa", showAllMahasiswa);

// post
router.post("/mahasiswa", insertMahasiswa);

// put
router.put("/mahasiswa/:id", editMahasiswa);

// delete
router.delete("/mahasiswa/:id", delMahasiswa);

// ===> Mahasiswa End <===

// ===> Administrator Start <===
// get all
router.get("/administrator", showAdministrator);

// post
router.post("/administrator", insertAdministrator);

// put
router.put("/administrator/:id", editAdministrator);

// delete
router.delete("/administrator/:id", delAdministrator);

// ===> Administrator End <===

// ===> Akademik Start <===
// get all
router.get("/akademik", showAllAkademik);

// post
router.post("/akademik", insertAkademik);

// put
router.put("/akademik/:id", editAkademik);

// delete
router.delete("akademik/:id", delAkademik);

// ===> Akademik End <===

// ===> Hak Modul Start <===


// ===> Hak Modul End <===


// export default router
export default router;