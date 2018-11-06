var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_LEFT = 37;


function Targaryen (game) {
this.game = game;
this.img = new Image(); 
this.img.src = 'images/dragonQueen.png';
this.name = "Danerys Targaryen"
this.attack = 100;
this.defense = 100;
this.soldierCount = 20000;
this.x = 500;
this.y = 550;
this.w = 80;
this.h = 80;
this.vx = 15;
this.vy = 15;

this.setListeners();
 

}


Targaryen.prototype.drawQueen = function () {

  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h,
  
  )
}

Targaryen.prototype.setListeners = function() {
  document.onkeydown = function(e) {
    e.preventDefault();
    switch(e.keyCode) {
      case KEY_LEFT: 
        if (this.x > 550) {
          this.x -= this.vx;
        }
        break; 
      case KEY_RIGHT: 
        if (this.x < 500) {
          this.x += this.vx;
        }
        break; 
      case KEY_UP:
        if (this.y > 550) {
          this.y -= this.vy;
        }
        break;
      case KEY_DOWN:
      if (this.y < 500) {
        this.y += this.vy;
      }
        break;
    }
  }.bind(this);

}