import express from 'express';
var router = express.Router();
import mahasiswaController from '../controllers/mahasiswaController';


/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect("/mahasiswa/");
});

router.post('/read_file', function(req, res) {
    res.json(req.body);
});

export default router;