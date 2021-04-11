import Mahasiswa from '../models/mahasiswa';

const data = {
    resMahasiswa: async(req, res) => {
        try {
            const mahasiswa = await Mahasiswa.find();
            var list = [];
            let i = 0;

            mahasiswa.forEach(mhs => {
                i = i + 1;
                var row = [
                    i,
                    mhs.nama,
                    mhs.nim,
                    mhs.jurusan,
                    mhs.alamat,
                    `<td class="text-center">
                        <form action="/mahasiswa/${mhs.id}?_method=DELETE" method="POST">
                        <a href="javascript:void()" class="btn btn-outline-warning btn-sm button-update" data-id="${mhs.id}" data-nama="${mhs.nama}" data-nim="${mhs.nim}" data-jurusan="${mhs.jurusan}" data-alamat="${mhs.alamat}">Edit</a>
                        <button type="submit" onclick="return confirm('Apa kamu yakin ingin menghapus aku dari ingatan kamu?');" class="btn btn-outline-danger btn-sm">Delete</button>
                        </form>
                    </td>`,
                ];
                list.push(row);
            });

            res.json({ data: list });
        } catch (error) {
            res.json(error);
        }
    },

    viewMahasiswa: async(req, res) => {
        try {
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");
            const alert = { message: alertMessage, status: alertStatus };
            res.render("mahasiswa", {
                alert,
                title: "Daftar Mahasiswa",
            });
        } catch (error) {
            res.redirect("/mahasiswa");
        }
    },


    addMahasiswa: async(req, res) => {
        try {
            const { nama, nim, jurusan, alamat } = req.body;
            await Mahasiswa.create({ nama, nim, jurusan, alamat });
            req.flash("alertMessage", "Success add data Mahasiswa");
            req.flash("alertStatus", "success");
            res.redirect("/mahasiswa");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/mahasiswa");
        }
    },

    editMahasiswa: async(req, res) => {
        try {
            const { id, nama, nim, jurusan, alamat } = req.body;
            const mahasiswa = await Mahasiswa.findOne({ _id: id });
            mahasiswa.nama = nama;
            mahasiswa.nim = nim;
            mahasiswa.jurusan = jurusan;
            mahasiswa.alamat = alamat;
            await mahasiswa.save();
            req.flash("alertMessage", "Success edit data mahasiswa");
            req.flash("alertStatus", "success");
            res.redirect("/mahasiswa");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/mahasiswa");
        }
    },

    deleteMahasiswa: async(req, res) => {
        try {
            const { id } = req.params;
            const mahasiswa = await Mahasiswa.findOne({ _id: id });
            await mahasiswa.remove();
            req.flash("alertMessage", "Success delete data mahasiswa");
            req.flash("alertStatus", "warning");
            res.redirect("/mahasiswa");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/mahasiswa");
        }
    },
};

export default data;