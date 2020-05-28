function Car2 (width, height, lineWidth, color) {
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

Car2.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  //context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = "#33ccff";
  context.beginPath();
  context.moveTo(0,-10);
  context.lineTo(this.width,-10);
  context.lineTo(this.width,-this.height);
  context.lineTo(0,-this.height);
  context.lineTo(0,-10);
  context.closePath();
  context.fill();  
  context.stroke();

//TYRESL
  context.fillStyle = "#333333";
  context.beginPath(); 
  context.moveTo(-2,0);  
  context.lineTo(-2,-40);
  context.lineTo(20,-40);
  context.lineTo(20,0);
  context.lineTo(-2,0);  
  context.closePath();
  context.fill();
  context.stroke();

//TYRESR
  context.fillStyle = "#333333";
  context.beginPath(); 
  context.moveTo(this.width-18,0);  
  context.lineTo(this.width-18,-40);
  context.lineTo(this.width+2,-40);
  context.lineTo(this.width+2,0);
  context.lineTo(this.width-18,0);  
  context.closePath();
  context.fill();
  context.stroke();


//WINDSCREEN
  context.fillStyle = "#66ffff";
  context.beginPath(); 
  context.moveTo(10,-100);  
  context.lineTo(10,-140);
  context.lineTo(this.width-10,-140);
  context.lineTo(this.width-10,-100);
  context.lineTo(10,-100);  
  context.closePath();
  context.fill();
  context.stroke();



//RADIATOR
  context.fillStyle = "#cccccc";
  context.beginPath(); 
  context.moveTo(30,-15);  
  context.lineTo(30,-80);
  context.lineTo(this.width-30,-80);
  context.lineTo(this.width-30,-15);
  context.lineTo(30,-15);  
  context.closePath();
  context.fill();
  context.stroke();

//HEADLIGHTS
  context.fillStyle = "#ffff00";
  context.beginPath(); 
  context.moveTo(15,-60);  
  context.arc(15, -60, 15, 0, (Math.PI * 2), true);
    
  context.closePath();
  context.fill();
 // context.stroke();

//HEADLIGHTS
  context.fillStyle = "#ffff00";
  context.beginPath(); 
  context.moveTo(this.width-15,-60);  
  context.arc(this.width-15, -60, 15, 0, (Math.PI * 2), true);
    
  context.closePath();
  context.fill();
//  context.stroke();

//CENTRE OF GRAVITY
  context.fillStyle = "#000000";
  context.beginPath(); 
  context.moveTo(this.width/2,-60);  
  context.arc(this.width/2, -60, 5, 0, (Math.PI * 2), true);
    
  context.closePath();
  context.fill();
 // context.stroke();


//MASK
  context.fillStyle = "#ffffff";
  context.beginPath(); 
  context.moveTo(20,-9);  
  context.lineTo(this.width-20,-9);
  context.lineTo(this.width-20,10);
  context.lineTo(20,10);
  context.lineTo(20,-9);  
  context.closePath();
  context.fill();
  //context.stroke();

  context.restore();
};


 
