const mongoose = require('./database').getMongoose();
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: String,
    email: String,
    city: String,
    company: String
});

module.exports = mongoose.model('User', userSchema);
