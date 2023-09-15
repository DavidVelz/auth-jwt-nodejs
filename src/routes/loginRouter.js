const {Router} = require('express')
const controller = require('../controllers/loginController')
const auth = require('../middleware/auth')
const router = Router()

/**
 * Middleware Auth usign Jwt
 */
router.get('login', auth, controller.loginController)

module.exports = router
