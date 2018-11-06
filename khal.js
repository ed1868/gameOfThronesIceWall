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
this.attack = 100;
this.defense = 100;
this.soldierCount = 5000;
this.territoryXstart = 210;
this.territoryYstart = 570;
this.territoryXend = 
this.territoryYend = 490;
this.x = 250;
this.y = 690;
this.w = 50;
this.h = 70;
this.vx = 3;
this.vy = 1;

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
        if (this.x > 250) {
          this.x -= this.vx;
        }
        break; 
      case KEY_RIGHT: 
        if (this.x < 300) {
          this.x += this.vx;
        }
        break; 
      case KEY_UP:
        if (this.y > 490) {
          this.y -= this.vy;
        }
        break;
      case KEY_DOWN:
      if (this.y < 600) {
        this.y += this.vy;
      }
        break;
    }
  }.bind(this);

}