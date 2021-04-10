let mongo = {
    uri: "mongodb://localhost:27017/db_mahasiswa",
    params: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
};

export default mongo;