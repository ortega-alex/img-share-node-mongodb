const mongoose = require('mongoose');
const { database } = require('./keys');

mongoose.connect(database.URL , {
    useNewUrlParser : true 
}).then(() => {
    console.log('DB is connectd')
}).catch((err) => console.log('err' , err.toString()));