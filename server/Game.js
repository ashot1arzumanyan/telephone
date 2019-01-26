const Dealer = require('./Dealer');

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  let x = new Dealer().getData();
  this.store = x.store;
  this.player1Rocks = x.player1Rocks;
  this.player2Rocks = x.player2Rocks;
}

Game.prototype.shouldStart = function() {
  let data = {}
  
  if (this.has2_3(this.player1Rocks)) {
    data = this.player1
    return data
  }
  if (this.has2_3(this.player2Rocks)) {
    data = this.player2
    return data
  }
  

  for (let i of [1, 2, 3, 4, 5, 6, 0]) {
    if (this.hasDouble(this.player1Rocks, i)) {
      data.player = this.player1;
      data.i = i
      return data
    }
    if (this.hasDouble(this.player2Rocks, i)) {
      data.player = this.player2;
      data.i = i
      return data
    }
  }
}

Game.prototype.has2_3 = function(playerRocks) {
  return playerRocks.some(rock => (rock[0] === 2 && rock[1] === 3) || (rock[1] === 3 && rock[0] === 2) )
}

Game.prototype.hasDouble = function(playerRocks, i) {
  return playerRocks.some(rock => rock[0] === i && rock[1] === rock[0])
}

Game.prototype.deleteRock = function(playerStr, rock) {
  const playerRocks = playerStr + 'Rocks';
  const filtered = this[playerRocks].filter(r => !((r[0] === rock[0] && r[1] === rock[1]) ||
                                                 (r[1] === rock[0] && r[0] === rock[1])));
  this[playerRocks] = filtered
}

Game.prototype.getMatched = function(playerStr, rock) {
  const playerRocks = playerStr + 'Rocks';
  return this[playerRocks].filter(r => r[0] === rock[0] || r[0] === rock[1] ||
                                       r[1] === rock[0] || r[1] === rock[1] );
}

module.exports = Game