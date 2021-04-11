import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    nama: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model("User", userScheme);