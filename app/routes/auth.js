import express from 'express';
import conn from '../controllers/authController';
var router = express.Router();

router.post('/login/', conn.authUser);

router.post("/user/add", conn.addUser);

export default router;