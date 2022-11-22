const express = require('express')
const router = express.Router()

const usercontoller = require('../contollers/users')

router.get('/users', usercontoller.index)
router.get('/users/:id', usercontoller.show)

  router.post('/users', usercontoller.store)
  
  router.put('/users/:id', usercontoller.update)
  
  router.delete('/users/:id', usercontoller.delete)

  module.exports = router