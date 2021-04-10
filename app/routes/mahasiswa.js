import express from 'express';
var router = express.Router();

import mahasiswaController from '../controllers/mahasiswaController';

router.get("/", mahasiswaController.viewMahasiswa);

router.get("/get_data", mahasiswaController.resMahasiswa);

router.post("/", mahasiswaController.addMahasiswa);
router.put("/", mahasiswaController.editMahasiswa);
router.delete("/:id", mahasiswaController.deleteMahasiswa);

export default router;