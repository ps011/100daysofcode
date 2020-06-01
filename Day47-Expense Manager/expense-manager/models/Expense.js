const mongoose = require('../../../Day14-User API/database').getMongoose();
const Schema = mongoose.Schema;
const expenseSchema = new Schema({
    description: String,
    amount: Number,
    month: String,
    year: Number
});
module.exports = mongoose.model('Expense', expenseSchema);
