import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title : {type: String, required: true ,default: "I am a title."},
    desc : String,
    isDone : Boolean,
    days : Number,
    date: {type: Date, default: Date.now},
    // There are other conditions like unique, required, default, etc.
    // Further reading:

});

export const Todo = mongoose.model('Todo', TodoSchema);
// A collection will be created with the plural value of todo, (Here: todos)

// You can use export default Todo too