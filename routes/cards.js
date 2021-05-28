const express = require('express')
const uuidv4 = require('uuid').v4
const router = express.Router()

let cards = [
  {
    text: 'Hi, how are you?',
    author: 'Derian',
    votes: 45,
    id: '0',
  },
  {
    text: 'Do you like React?',
    author: 'Vanesa',
    votes: 100,
    id: '1',
  },
]

router.get('/', (req, res, next) => {
  res.json(cards)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const foundCard = cards.find(card => card.id === id)
  foundCard ? res.json(foundCard) : next()
})

router.post('/', (req, res, next) => {
  const newCard = { ...req.body, id: uuidv4() }
  cards.push(newCard)
  res.status(201).json(newCard)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  const index = cards.findIndex(card => card.id === id)
  const card = cards[index]
  const updatedCard = { ...card, ...req.body }
  cards.splice(index, 1, updatedCard)
  res.json(updatedCard)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  cards = cards.filter(card => card.id !== id)
  res.sendStatus(204)
})

module.exports = router
