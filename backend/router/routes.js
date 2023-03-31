// import express
import express from "express";

// import functions from constollers
import {
  showIdentitas,
  editIdentitasKampus,
  delIdentitasKampus,
  showAllProdi,
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
} from "../controllers/master.js";
import { postDosen } from "../models/masterModel.js";

// init express router
const router = express.Router();

// ===> Identitas Kampus Start <===
// get
router.get("/identitas", showIdentitas);

// put
router.put("/identitas/:id", editIdentitasKampus);

// delete
router.delete("/identitas/:id", delIdentitasKampus);

// ===> Identitas Kampus End <===

// ===> Program Studi Start <===
// get all
router.get("/prodi", showAllProdi);

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

// export default router
export default router;