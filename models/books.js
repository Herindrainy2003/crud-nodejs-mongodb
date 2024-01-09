const mongoose = require('mongoose')

//creeons le schemas de notre donnes
const bookSchema = mongoose.Schema({
    titre : {type: String , required : true} ,
    auteur : {type: String , required : true} ,
    pages : {type : Number , required : true}
});

//creeons le modules
module.exports = mongoose.model('Book' , bookSchema);