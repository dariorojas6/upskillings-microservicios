const { Schema } = require("mongoose");

const planetSchema = new Schema({
     _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    res_idents: [{type: String}],
    films: []
})

module.exports =planetSchema;