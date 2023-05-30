const Book = require("../models/Book.model")
const User = require("../models/User.model")

module.exports.bookController = {
    postBook: (req, res) => {
        Book.create({
            name: req.body.name,
            genreBook: req.body.genreBook
        }).then((data) => {
            res.json(data)
        })
    },
    deleteBook: (req, res) => {
        Book.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getBook: (req, res) => {
        Book.find().then((data) => {
            res.json(data)
        })
    },
    getBook: (req, res) => {
        Book.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    patchBook: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, { name: req.body.name }).then((data) => {
            res.json(data)
        })
    },
    getBookGenre: async (req, res) => {
        const data = await Book.find({ genreBook: req.params.id }).populate('genreBook', "-_id -__v")
        res.json(data)
    },
    rentBook: async (req, res) => {
        const { id } = req.params
        const { userId } = req.body

        const book = await Book.findById(id)
        const user = await User.findById(userId)

        if (book.userId) {
            return res.json('эта книга уже занята другим пользователем')
        }
        if (user.isBlocked) {
            return res.json('вы заблокированы')
        }
        if (user.rendetBook.length >= 3) {
            return res.json('нельзя орендовать больше 3 книг одновременно')
        }

        await Book.findByIdAndUpdate(id, {
            userId
        })

        await User.findByIdAndUpdate(userId, {
            $push: {
                rendetBook: id
            }
        })

        res.json('все работает')


    },
    selectBook: async (req, res) => {
        const { id } = req.params
        const { userId } = req.body


        await Book.findByIdAndUpdate(id, {
            $set: { userId: null }
        })

        await User.findByIdAndUpdate(userId, {
            $set: {
                rendetBook: []
            }
        })
        await User.findByIdAndUpdate(userId, {
            $set: { isBlocked: true }

        })
        res.json('книга отобрана')
    },
    returnBook: async (req, res) => {
        const { id } = req.params
        const { userId } = req.body


        await Book.findByIdAndUpdate(id, {
            $set: { userId: null }
        })

        await User.findByIdAndUpdate(userId, {
            $pull: {
                rendetBook: id
            }
        })
        res.json('вернул книгу')

    },
    noBlock: async (req, res) => {
        const { id } = req.params
        const { userId } = req.body

        await User.findByIdAndUpdate(userId, {
            $set: { isBlocked: false }

        })
        res.json('вы разблокированы')
    }

}