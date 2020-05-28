function Vector (length, lineWidth, color) {
  if (length === undefined) { length = 100; }
  if (lineWidth === undefined) { lineWidth = 2; }
  if (color === undefined) { color = "#000000"; }
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.length = length;
  this.lineWidth = lineWidth;
  this.color = color;
  //this.scaleX = 1;
  //this.scaleY = 1;
}

Vector.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  //context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(this.length,0);
  context.closePath();
  context.strokeStyle = this.color;
  context.stroke();


  context.fillStyle=this.color;
  context.beginPath();
  context.moveTo(this.length,0);
  context.lineTo(this.length-10,-5);
  context.lineTo(this.length-10,5);
  context.lineTo(this.length,0);
  context.closePath();
  context.fill();
  context.strokeStyle = this.color;
  context.stroke();

  context.restore();
};

Line.prototype.setLength = function (len) {
  this.length=len;
}




