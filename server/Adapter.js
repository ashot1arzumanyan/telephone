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
  console.log('added player name: %s', ws.name);
}

Adapter.prototype.deletePlayer = function(ws) {
  const index = this.players.indexOf(ws);
  this.players.splice(index, 1);
  console.log('with name %s player deleted', ws.name)
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
  const game = new Game(player1, player2);
  this.rooms.push(game);
  this.deletePlayer(player1);
  this.deletePlayer(player2);
  return game
}

module.exports = Adapter