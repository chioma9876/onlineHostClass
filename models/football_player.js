const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');
const football_Team = require('./football_team');

class football_Player extends Model {}

football_Player.init(
  {
    // Model attributes are defined here
     id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      teamId: {
        type: Sequelize.UUID,
        allowNull:false,
        references: {
          model:'football_Teams',
          key:'id'
        },
        onDelete: 'CASACADE',
        onUpdate: 'CASCADE'
      },
      playerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'football_Player', // We need to choose the model name
  },
);

football_Team.hasMany(football_Player, {
  foreignKey: 'teamId',
  as: 'players'
})

football_Player.belongsTo(football_Team,{
  foreignKey: 'teamId',
  as: 'team'
})


module.exports = football_Player