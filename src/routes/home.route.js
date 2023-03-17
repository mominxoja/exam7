const {Router} = require('express')
const { homeGet } = require('../controllers/home.controller')

const router = Router()

router.get('/',  homeGet)

module.exports = router