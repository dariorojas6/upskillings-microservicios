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
});

planetSchema.statics.list = async function(){
    return await this.find()
    .populate("res_idents", ["_id", "name"])
    .populate("films", ["_id", "title"]) 
 }

 planetSchema.statics.get = async function(id){
    return await this.findById(id)
    .populate("res_idents", ["_id", "name"])
    .populate("films", ["_id", "title"])
}

planetSchema.statics.insert = async function(film){
    return await this.create(film);
}

module.exports =planetSchema;