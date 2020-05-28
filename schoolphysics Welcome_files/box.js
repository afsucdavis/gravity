function Box (width, height, lineWidth, color) {
  if (width === undefined) { width = 100; }
  if (height === undefined) { height = 100; }
  if (lineWidth === undefined) { lineWidth = 2; }
  if (color === undefined) { color = "#000000"; }
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.width = width;
  this.height = height;
  this.lineWidth = lineWidth;
  this.color = color;
  //this.scaleX = 1;
  //this.scaleY = 1;
}

Box.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  //context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(this.width,0);
  context.lineTo(this.width,this.height);
  context.lineTo(0,this.height);
  context.lineTo(0,0);
  context.closePath();
  context.fill();
  context.stroke();

  context.restore();
};


 
