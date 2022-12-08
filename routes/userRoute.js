const express = require('express')
const authController = require('../controller/authController')
const userController = require('../controller/userController')

const router = express.Router()


router.route('/signup').post(authController.signup)
router.route('/getAllUsers').get(userController.getAllUsers)

module.exports = router