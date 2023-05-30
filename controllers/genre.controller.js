const Genre = require("../models/Genre.model")

module.exports.genreController = {
    postGenre: (req, res) => {
        Genre.create({
            name: req.body.name
        }). then((data) => {
            res.json(data)
        })
    },
    deleteGenre: (req, res) => {
        Genre.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getGenre: (req, res) => {
        Genre.find().then((data) => {
            res.json(data)
        })
    },
    getGenre: (req, res) => {
        Genre.findById(req.params.id).then((data) => {
            res.json(data)
        })
    }
    
}