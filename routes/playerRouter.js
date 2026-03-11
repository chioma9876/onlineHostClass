const express = require('express');
const { createPlayer, getAllPlayer, getOnePlayer } = require('../controllers/playerController');
const router = express.Router();

router.post('/createPlayer', createPlayer);

router.get('/allPlayers', getAllPlayer);
router.get('/onePlayer/:id', getOnePlayer)

module.exports = router