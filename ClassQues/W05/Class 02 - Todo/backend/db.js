const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://ankurRangi:1234567890@cluster0.3qwpcmy.mongodb.net/W05-TodoApp?retryWrites=true&w=majority');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
};