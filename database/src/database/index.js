const mongoose = require("mongoose")
const {MONGO_URI} = require("../config/envs")

// Se crea la conexion con la base de datos
const conn = mongoose.createConnection(MONGO_URI);

// Exportamos los modelos
module.exports = {
 Character : conn.model("Character", require("./schemas/characterSchema")),
 Film : conn.model("Film", require("./schemas/filmSchema")),
 Planet : conn.model("Planet", require ("./schemas/planetSchema")),
}
