const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    isBlocked: {
        type: Boolean,
        default: false
    },
    rendetBook: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Book'}]

})




const User = mongoose.model('User', userSchema)
module.exports = User