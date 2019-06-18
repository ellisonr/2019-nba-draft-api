const mongoose = require('./connection');
const Player = require('./model');
const playerData = require('./nba-draft.json');

Player.deleteMany({})
.then(() => {
    Player.create(playerData)
    .then((players) => {
        console.log(players)
        process.exit()
    })
})
.catch((err) => {
    console.log(err)
})