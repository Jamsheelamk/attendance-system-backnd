const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jamsheela:jamsheela@products.5qdc8.mongodb.net/jamsheelaretryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewstudentSchema = new Schema({
    
    email : String,
    name : String,
    present:Boolean
    
});

var studentdata = mongoose.model('student', NewstudentSchema);                        //UserData is the model and NewBookData is the schema

module.exports = studentdata;