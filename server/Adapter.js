const Game = require('./Game');

function Adapter() {
  this.players = [];
  this.rooms = [] 
}

Adapter.prototype.randomName = function() {
  const getRandomName = () => {
    const unnamed = 'Unnamed';
    const randomFourDigit = Math.ceil(Math.random() * 10);
    const name = unnamed + randomFourDigit;
    if (this.players.some(player => player.name === name)) {
      return getRandomName();
    } else {
      return name;
    }
  }
  return getRandomName();
}

Adapter.prototype.addPlayer = function(ws) {
  this.players.push(ws);
}

Adapter.prototype.deletePlayer = async function(ws) {
  const index = await this.players.indexOf(ws);
  this.players.splice(index, 1);
  return;
}

Adapter.prototype.getNames = function() {
  const names = [];
  for (let i = 0, l = this.players.length; i < l; i++) {
    names.push(this.players[i].name)
  }
  return names
}

Adapter.prototype.getPlayerByName = function(name) {
  return this.players.find(player => player.name === name);
}

Adapter.prototype.addRoom = async function(player1, player2Name) {
  const player2 = this.getPlayerByName(player2Name);
  this.deletePlayer(player1);
  this.deletePlayer(player2);
  const game = new Game(player1, player2);
  this.rooms.push(game);
  console.log(this.players);
  return game
}

module.exports = Adapter