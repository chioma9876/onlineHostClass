const playerModel = require('../models/football_player');
const football_Team = require('../models/football_team');

exports.createPlayer = async(req, res) => {
    try {
        //Extract all the required fields from the request body
        const{playerName, age, position, teamId} = req.body;
        //Create the player data
        const playerData = {
            playerName,
            age,
            position,
            teamId
        };
        //Create the player record in the database
        const player = await playerModel.create(playerData);
        //Send a success response
        res.status(201).json({
            message: 'Player created successfully',
            data: player
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getAllPlayer = async(req, res)=> {
    try {
        //Find all players in the database while populating the teamId field to show the team's information
        const players = await playerModel.findAll({
            include: {model: football_Team, as: 'team', attributes: ['teamName', 'coachName']}
        });
        //send a success response
        res.status(200).json({
            message: `All players found and the total is: ${players.length}`,
            data: players
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
    })
    }
}


exports.getOnePlayer = async(req, res)=> {
    try {
        //Get the player ID from the params
        const {id} = req.params
        //Find out Player that matches the ID from the databse
        const player = await playerModel.findByPk(id, {include: {model: football_Team, as: 'team'}});
        //Check if player is not found
        if(!player){
            return res.status(404).json({
                message: 'Player not found'
            })
        }
        //send a success response
        res.status(200).json({
            message:'Player found',
            data: player
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
    })
    }
} 
exports.updatePlayer = async(req, res) => {
    try {
        const {id} = req.params

        if (!id) {
            return res.status(400).json({
                error: 'player id not found'
            })
        }
        const updatedPlayer = await teamModel.findByPk(
            id,{
            playerName: req.body.playerName,
            age: req.body.age
            }
        );
        if(!updatedPlayer) {    
            return res.status(404).json({
                message: "player not found"
            })
        }
        res.status(200).json({
            message: "player update is successful",
            data: updatedPlayer
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }    
}

exports.deletePlayer = async(req,res) => {
    try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({
                message: 'player does not exist'
            })
        }
        const deletedPlayer = await playerModel.destroy({
            where: {id}
        })
        res.status(200).json({
            message: 'player delete is successful'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}