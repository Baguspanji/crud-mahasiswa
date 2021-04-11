import jwt from 'jsonwebtoken';
import Users from '../models/users';

const accessTokenSecret = 'admin';

const data = {
    // resUser: async(req, res) => {
    //     try {
    //         const mahasiswa = await Mahasiswa.find();
    //         var list = [];
    //         let i = 0;

    //         mahasiswa.forEach(mhs => {
    //             i = i + 1;
    //             var row = [
    //                 i,
    //                 mhs.nama,
    //                 mhs.nim,
    //                 mhs.jurusan,
    //                 mhs.alamat,
    //             ];
    //             list.push(row);
    //         });

    //         res.json({ data: list });
    //     } catch (error) {
    //         res.json(error);
    //     }
    // },

    addUser: async(req, res) => {
        try {
            const { username, nama, email, password } = req.body;
            await Users.create({ username, nama, email, password });
            res.json("Success add data Mahasiswa");
        } catch (error) {
            res.json(`${error.message}`);
        }
    },

    authUser: async(req, res) => {
        const { username, password } = req.body;
        const user = await Users.find({ username, password });

        res.json(user[0].username);

        // if (user) {
        //     const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
        //     res.json({
        //         accessToken
        //     });
        // } else {
        //     res.send('Username or password incorrect');
        // }
    },
};

export default data;