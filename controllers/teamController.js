const football_Player = require('../models/football_player');
const teamModel = require('../models/football_team');

exports.createTeam = async (req, res)=> {
    try {
        //Extract the required fields from the request body
        const {teamName, coachName} = req.body;
        //Create an object with the new team details
        const newTeam = {
            teamName,
            coachName
        }
        //Create the team records in the database
        const team = await teamModel.create(newTeam);
        //Send a success response
        res.status(201).json({
            message: 'Team created succesfully',
            data: team
        })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        
    }
}
exports.getAllTeams = async(req, res) => {
    try {
        //Find all the teams in the database
        const teams = await teamModel.findAll({
            include: {
                model: football_Player,
                as: 'players'
            }
        });
        //Send a success response
        res.status(200).json ({
            message: `All teams found and the total is: ${teams.length}`,
            data: teams
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

exports.getOneTeam = async(req, res) => {
    try {
        //Get the team's ID from the params
        const {id} = req.params;
        //Get the team that matches the ID from the database
        const team = await teamModel.findByPk(id);
        if(!team) {
            return res.status(404).json({
                message: 'Team not found'
            })
        }
        //Send a success response 
        res.status(200).json({
            message: `Team with ID: ${id} found`,
            data: team
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
} 