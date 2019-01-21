const rocks = [
  [
    0, 0
  ],
  [
    0, 1
  ],
  [
    0, 2
  ],
  [
    0, 3
  ],
  [
    0, 4
  ],
  [
    0, 5
  ],
  [
    0, 6
  ],
  [
    1, 1
  ],
  [
    1, 2
  ],
  [
    1, 3
  ],
  [
    1, 4
  ],
  [
    1, 5
  ],
  [
    1, 6
  ],
  [
    2, 2
  ],
  [
    2, 3
  ],
  [
    2, 4
  ],
  [
    2, 5
  ],
  [
    2, 6
  ],
  [
    3, 3
  ],
  [
    3, 4
  ],
  [
    3, 5
  ],
  [
    3, 6
  ],
  [
    4, 4
  ],
  [
    4, 5
  ],
  [
    4, 6
  ],
  [
    5, 5
  ],
  [
    5, 6
  ],
  [
    6, 6
  ]
];

function Dealer() {
  this.store = rocks;
  this.player1Rocks = [];
  this.player2Rocks = [];

  this.divide = divide
  this.divide()
}

Dealer.prototype.getRandomInRange = function(max) {
  return Math.floor(Math.random() * max);
}

Dealer.prototype.getRockRandomly = function() {
  const number = this.getRandomInRange(this.store.length);
  const rock = this.store[number];
  this.store.splice(number, 1);
  return rock;
} 

function divide() {
  let rock1 = [], rock2 = [];
  for (let i = 0; i < 7; i++) {
    rock1 = this.getRockRandomly();
    rock2 = this.getRockRandomly();
    this.player1Rocks.push(rock1);
    this.player2Rocks.push(rock2); 
  }
}

Dealer.prototype.getData = function() {
  return {
    store: this.store,
    player1Rocks: this.player1Rocks,
    player2Rocks: this.player2Rocks
  }
}

module.exports = Dealer