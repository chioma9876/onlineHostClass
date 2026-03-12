//Import express
const express = require('express');
const { createTeam, getAllTeams, getOneTeam, updateTeam, deleteTeam } = require('../controllers/teamController');

const router = express.Router();

router.post('/createTeam', createTeam)

router.get('/allTeams', getAllTeams)
router.get('/oneTeam/:id', getOneTeam)

router.put('/updateTeam/:id', updateTeam)

router.delete('/deleteTeam/:id', deleteTeam)
module.exports = router
    