const {Router} = require("express")
const {bookController} = require("../controllers/book.controller")
const router = Router()

router.post('/admin/book', bookController.postBook)
router.delete('/admin/book/:id', bookController.deleteBook)
router.get('/book', bookController.getBook)
router.get('/book/:id', bookController.getBook)
router.patch('/admin/book/:id', bookController.patchBook)
router.get('/book/genre/:id', bookController.getBookGenre)
router.patch('/book/:id',bookController.rentBook)
router.patch('/admin/select/book/:id', bookController.selectBook)
router.patch('/book/return/:id', bookController.returnBook)
router.patch('/admin/book/noBlock/:id', bookController.noBlock)

module.exports = router