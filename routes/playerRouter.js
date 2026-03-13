const express = require('express');
const { createPlayer, getAllPlayer, getOnePlayer, updatePlayer, deletePlayer } = require('../controllers/playerController');
const router = express.Router();

router.post('/createPlayer', createPlayer);

router.get('/allPlayers', getAllPlayer);
router.get('/onePlayer/:id', getOnePlayer)

router.put('/updatePlayer/:id', updatePlayer)

router.delete('/deletePlayer/:id', deletePlayer)
module.exports = router