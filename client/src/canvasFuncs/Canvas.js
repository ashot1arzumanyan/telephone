// const canvas = document.createElement('canvas');
// canvas.id = 'board';
// canvas.height = document.documentElement.offsetHeight;
// canvas.width = document.documentElement.offsetWidth - 200;
// document.querySelector('.Game').appendChild(canvas);
// const ctx = canvas.getContext('2d');

function Canvas() {
  this.canvas = document.createElement('canvas');
  this.canvas.id = 'board';
  this.canvas.height = document.documentElement.offsetHeight;
  this.canvas.width = document.documentElement.offsetWidth - 200;
  document.body.appendChild(this.canvas);
}

Canvas.prototype.getContext = function() {
  return this.canvas.getContext('2d');
}

export default Canvas