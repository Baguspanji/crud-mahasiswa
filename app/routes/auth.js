import express from 'express';
import jwt from 'jsonwebtoken';
import authController from '../controllers/authController';
var router = express.Router();

/* GET users listing. */
router.post('/', authController.authUser);

router.post("/add", authController.addUser);

export default router;