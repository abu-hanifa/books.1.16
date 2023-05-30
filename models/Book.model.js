const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    name: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        default: null
    },
    genreBook: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre'
    }
   

})


const Book = mongoose.model('Book', bookSchema)
module.exports = Book