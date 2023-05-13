const express = require('express')
const router = express.Router()
const {getUsers} = require('../controllers/user-controllers')
router.get('/get-user', getUsers) 

module.exports = {UserRouter: router}