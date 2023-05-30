const {Router} = require("express")
const {comentController} = require("../controllers/coment.controller")
const router = Router()

router.post('/coment/:id', comentController.postComentBook)
router.get('/coment/:id', comentController.getComentBook)




module.exports = router