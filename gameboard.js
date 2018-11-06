
window.onload = function() {
    var game = new Game ("myCanvas");
    game.draw();
 
  
}
var player = prompt ("Player, Pick A Character ... Enter S : John Snow , L : Joffrey Lannister , T : Daenerys Targaryen , K : Khal Drogo ");

function Game(id) {

  this.game = document.getElementById(id);
  this.ctx = this.game.getContext("2d");
  this.img = new Image(); 
  this.img.src = 'images/newWal.png';
  this.lannister    = new Lannister(this);
  this.johnsnow     = new Character(this);
  this.targaryen    = new Targaryen(this);
  this.khal         = new Khal(this);
  this.army         = new Army(this);
  this.soldier      = new Soldier(this);
  this.whitewalker  = new Whitewalker(this);
  // this.nightKing = new nightKing(this);
  this.player = player;
  this.score = 0;
  this.x = 50;
  this.y = 100;
  this.w = 100;
  this.h = 100;
  this.fps = 60;


}



Game.prototype.drawBackground = function () {

  this.ctx.drawImage(this.img, 40,0,1000,900);

  
  
}

Game.prototype.draw = function () {
  
  setInterval(function() {
    this.drawBackground();
    if(player === "S"){
      this.johnsnow.id = player;
      this.johnsnow.drawCharacter();
    }
    if(player === "L"){
      this.lannister.drawLannister();
    }
    if(player === "K"){
      this.khal.drawKhal();
    }
    if(player === "T"){
      this.targaryen.drawQueen();
    }
    this.army.drawArmy();
    this.army.move();
    this.soldier.drawSoldier();
    this.soldier.move();
    this.whitewalker.drawWhiteWalker();
    this.whitewalker.move();
  }.bind(this), 16)
}




