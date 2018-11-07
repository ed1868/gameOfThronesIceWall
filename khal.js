var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_LEFT = 37;


function Khal(game ,player) {
this.game = game;
this.player = player;
this.img = new Image(); 
this.img.src = 'images/khalDrogo.png';
this.name = "Khal Drogo"
this.x = 450;
this.y = 710;
this.w = 50;
this.h = 70;
this.vx = 3;
this.vy = 5;

this.setListeners();
 

}


Khal.prototype.drawKhal = function () {

  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h,
  
  )
}

Khal.prototype.setListeners = function(id) {
  document.onkeydown = function(e) {
    e.preventDefault();
    switch(e.keyCode) {
      case KEY_LEFT: 
        if (this.x > 20 ) {
          this.x -= this.vx;
        }
        break; 
      case KEY_RIGHT: 
        if ( this.x  < 850) {
          this.x += this.vx;
        }
        break; 
      case KEY_UP:
        if (this.y > 125){
          this.y -= this.vy;
        }
        break;
      case KEY_DOWN:
      if (this.y < 710) {
        this.y += this.vy;
        this.vy = 2;
        this.vx = 2;
      }
        break;
    }
  
  }.bind(this);

}
