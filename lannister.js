var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_LEFT = 37;


function Lannister(game,id) {
this.game = game;
this.id = id;
this.img = new Image(); 
this.img.src = 'images/lannister.png';
this.name = "Tyrion"
this.attack = 100;
this.defense = 100;
this.soldierCount = 10000;
this.x = 300;
this.y = 490;
this.w = 50;
this.h = 70;
this.vx = 15;
this.vy = 15;

this.setListeners();
 

}


Lannister.prototype.drawLannister = function (id) {

  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h,
  
  )
}

Lannister.prototype.setListeners = function() {
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
      if (this.y < 520) {
        this.y += this.vy;
      }
        break;
    }
  }.bind(this);

}