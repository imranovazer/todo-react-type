const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
    text: String,
    isCompleted: Boolean
})

module.exports = mongoose.model('Todos', todosSchema)