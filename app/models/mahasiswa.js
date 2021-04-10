import mongoose from "mongoose";

const mahasiswaScheme = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    nim: {
        type: Number,
        required: true,
    },
    jurusan: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Mahasiswa", mahasiswaScheme);