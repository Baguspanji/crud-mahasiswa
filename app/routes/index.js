import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect("/mahasiswa/");
});

router.post('/read_file', function(req, res) {
    res.json(req.body);
});

export default router;