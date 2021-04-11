import express from 'express';
import conn from '../../controllers/api/mahasiswaController';
var router = express.Router();

/* GET users listing. */
router.get('/list', conn.authenticateJWT, conn.resUser);

export default router;