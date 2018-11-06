var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_LEFT = 37;

function Character(game) {
this.game = game;
this.id = ""
this.img = new Image(); 
this.img.src = 'images/johnSnow.png';
this.name = "John Snow"
this.x = 450;
this.y = 710;
this.w = 50;
this.h = 80;
this.vx = 15;
this.vy = 15;

this.setListeners();
 

}


Character.prototype.drawCharacter = function () {

  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h,
  
  )
}

Character.prototype.setListeners = function(id) {
  document.onkeydown = function(e) {
    e.preventDefault();
    switch(e.keyCode) {
      case KEY_LEFT: 
        if (this.x > 700 ) {
          this.x -= this.vx;
        }
        break; 
      case KEY_RIGHT: 
        if (this.x < 10) {
          this.x += this.vx;
        }
        break; 
      case KEY_UP:
        if (this.y > 10){
          this.y -= this.vy;
        }
        break;
      case KEY_DOWN:
      if (this.y < 1000) {
        this.y += this.vy;
      }
        break;
    }
  
  }.bind(this);

}


