const { Schema, model } = require("mongoose");

let ClientSchema = Schema({
    cedula: {
        type: Number,
        unique: true
    },
    email: { type: String },
    nombre: { type: String },
    telefono: { type: String }
},
    {
        timestamps: true, //cada que se cree un dato vaya con su fecha de creacion y su ultima fecha de actualizacion.
        versionKey: false, //cada que se cree un dato no aparezca su _v
    }
);

module.exports = model("clientSchema", ClientSchema);