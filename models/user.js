const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { type: String },
    address: { type: String },
    email: { type: String },
    phone: { type: Number }
})

module.exports = mongoose.model('User', UserSchema);
