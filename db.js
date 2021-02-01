const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usersCrudDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
 error => {
    if (!error) 
        console.log('MongoDB connection suceeded!!!');
    else 
        console.log('Error in DB connection: ' + JSON.stringify(error, undefined, 2));
});

module.exports = mongoose;