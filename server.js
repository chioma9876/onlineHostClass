const express = require('express')
require('dotenv').config() 
const PORT = 8975;
const sequelize = require('./database/database');
const teamRouter = require('./routes/teamRouter');
const playerRouter = require('./routes/playerRouter');

const app = express();

app.use(express.json());
app.use(teamRouter);
app.use(playerRouter);

const database = async () => {
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}
}

database()

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`)
})