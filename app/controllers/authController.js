import jwt from 'jsonwebtoken';
import Users from '../models/users';
import Mahasiswa from '../models/mahasiswa';

const accessTokenSecret = 'mahasiswa';

const data = {
    addUser: async(req, res) => {
        try {
            const { username, nama, email, password, role } = req.body;
            await Users.create({ username, nama, email, password, role });
            res.json("Success add data Mahasiswa");
        } catch (error) {
            res.json(`${error.message}`);
        }
    },

    authUser: async(req, res) => {
        const { username, password } = req.body;
        const list = await Users.find({ username, password });

        var user = list[0];

        if (user) {
            const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
            res.json({
                accessToken
            });
        } else {
            res.send('Username or password incorrect');
        }
    },
};

export default data;