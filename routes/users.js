const express = require('express')
const router = express.Router()
const User = require('../models/User')

let usersList = [
  {
    name: 'Jane Doe',
    age: 33,
    email: 'jane@doe.com',
    id: '0',
  },
  {
    name: 'John Doe',
    age: 32,
    email: 'john@doe.com',
    id: '1',
  },
]

router.get('/', async (req, res, next) => {
  res.json(await User.find())
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findById(id))
})

router.post('/', async (req, res, next) => {
  res.status(201).json(await User.create(req.body))
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findByIdAndUpdate(id, req.body, { new: true }))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.status(204).json(await User.findByIdAndDelete(id))
})

module.exports = router
