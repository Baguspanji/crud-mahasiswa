import express from 'express';
import conn from '../controllers/mahasiswaController';
var router = express.Router();

router.get("/", conn.viewMahasiswa);

router.get("/get_data", conn.resMahasiswa);

router.post("/", conn.addMahasiswa);
router.put("/", conn.editMahasiswa);
router.delete("/:id", conn.deleteMahasiswa);

export default router;