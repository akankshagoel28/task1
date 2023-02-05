const express = require('express')
const router = new express.Router()
const appController = require('../controllers/appController')
router.post('/users', appController.postUser)
router.get('/users', appController.getUsers)
router.get('/users/:id', appController.getUser)
router.patch('/users/:id', appController.updateUser)
router.delete('/users/:id', appController.deleteUser)

module.exports = router;
