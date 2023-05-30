const mongoose = require("mongoose")

const comentSchema = mongoose.Schema({
    text: String,
    textBook: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book'

    }

})



const Coment = mongoose.model('Coment', comentSchema)
module.exports = Coment