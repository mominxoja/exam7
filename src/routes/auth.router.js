const {Router} = require('express')
const { login , loginGet , registerGet, register, logOut} = require('../controllers/auth.controller')

const router = Router()

router.get('/login', loginGet)
router.post('/api/login', login)
router.get('/logout', logOut)
router.post('/api/register', register)
router.get('/register',  registerGet )


module.exports = router