const mongoose = require('mongoose');
const {
    mongodb
} = require('./config');

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => {
        mongoose.connect('mongodb+srv://LuisADM:NcpYtgQc46wUSy5I@cluster0.zkjrm.mongodb.net/test?retryWrites=true&w=majority', {
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