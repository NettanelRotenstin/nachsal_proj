const router = require('express').Router()

const { createPoll, myNotifications, getPollById, reply, deletePoll } = require('../controllers/greenEyeController')
const { onlyCommanders,SoldiersAndCommanders } = require('../middleWares/authMiddlewares')

router.post('/', onlyCommanders, createPoll)

router.get('/my', SoldiersAndCommanders, myNotifications)

router.get('/:id', onlyCommanders, getPollById)

router.post('/reply', SoldiersAndCommanders, reply)

router.delete('/:id', onlyCommanders, deletePoll)

module.exports = router