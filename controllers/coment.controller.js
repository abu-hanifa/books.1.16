const Coment = require("../models/Coment.model")

module.exports.comentController = {
    postComentBook: (req, res) => {
        Coment.create({
            text: req.body.text,
            textBook: req.params.id
        }).then((data) => {
            res.json(data)
        })
    },
    getComentBook: (req, res) => {
        Coment.find({textBook: req.params.id}).populate('textBook').then((data) => {
            res.json(data)
        })
    }
    
}