//Import express
const express = require('express');
const { createTeam, getAllTeams, getOneTeam } = require('../controllers/teamController');

const router = express.Router();

router.post('/createTeam', createTeam)

router.get('/allTeams', getAllTeams)
router.get('/oneTeam/:id', getOneTeam)

module.exports = router
    