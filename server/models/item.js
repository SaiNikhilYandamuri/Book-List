const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item: String
});

module.exports = mongoose.model('Todo',itemSchema);