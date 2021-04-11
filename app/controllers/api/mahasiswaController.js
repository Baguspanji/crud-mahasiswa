import jwt from 'jsonwebtoken';
import Mahasiswa from '../../models/mahasiswa';

const accessTokenSecret = 'mahasiswa';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const data = {
    authenticateJWT,
    resUser: async(req, res) => {

        try {
            const mahasiswa = await Mahasiswa.find();
            var list = [];

            mahasiswa.forEach(mhs => {
                var row = {
                    nama: mhs.nama,
                    nim: mhs.nim,
                    jurusan: mhs.jurusan,
                    alamat: mhs.alamat,
                };
                list.push(row);
            });

            res.json({
                status: true,
                data: list,
            });
        } catch (error) {
            res.json(error);
        }
    }
};

export default data;