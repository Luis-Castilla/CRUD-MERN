const mongoose = require('mongoose');

require('dotenv').config();

console.log(process.env.URI);
const {
    mongodb
} = require('./config');
mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => {
        mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
            .then(db => console.log('Database is connected'))
            .catch(err => {
                console.log("La base de datos no esta tenta");
                console.error(err)
            });
        console.error(err)
    });