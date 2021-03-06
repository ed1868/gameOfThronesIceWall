var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_LEFT = 37;


function NightKing(game , id) {
this.game = game;
this.id = id;
this.img = new Image(); 
this.img.src = 'images/nightKing.png';
this.name = "Night King"
this.x = randomIntFromInterval(50,300)+ randomIntFromInterval(40,800);
this.y = 710;
this.w = 120;
this.h = 120;
this.vx = 10;
this.vy = 10;

this.setListeners();
 

}


NightKing.prototype.drawNight = function () {

  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h,
  
  )
}

NightKing.prototype.setListeners = function(id) {
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
