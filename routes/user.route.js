const {Router} = require("express")
const {userController} = require("../controllers/user.controller")
const router = Router()

router.post('/user', userController.postUser)
router.delete('/user/:id', userController.deleteUser)
router.get('/userr', userController.getUser)






module.exports = router