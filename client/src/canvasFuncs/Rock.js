function Rock(x, y, nums) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 100;
  this.nums = nums;
  this.ctx = document.getElementById('board').getContext('2d')
}

Rock.prototype.draw = function() {
  this.ctx.fillStyle = '#f3f140a1'
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
  this.ctx.beginPath()
  this.ctx.arc(this.x + 10, this.y + 10, 5, 0, 2 * Math.PI)
  this.ctx.fillStyle = 'black';
  this.ctx.fill()
}

export default Rock