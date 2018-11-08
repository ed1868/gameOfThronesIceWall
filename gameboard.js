
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
  this.whitewalker.generateWalkers();
  this.doom          = new Doom(this);
  // this.nightKing = new nightKing(this);
  this.player = player;
  this.score = 0;
  // this.x = x;
  // this.y = y;
  // this.w = 100;
  // this.h = 100;
  this.fps = 60;
  this.villainXandY = [ this.army, this.soldier, this.whitewalker, this.doom ]
}


Game.prototype.drawBackground = function () {

  this.ctx.drawImage(this.img, 40,0,1000,900);

  
  
}

Game.prototype.draw = function () {
  
  setInterval(function() {
    this.drawBackground();
    if (  this.isCollision()){
      console.log("collision ");
    }

    if(player === "S"){
      this.johnsnow.id = player;
      this.johnsnow.drawCharacter();
      this.johnsnow.setListeners();
    }
    if(player === "L"){
      this.lannister.id = player;
      this.lannister.drawLannister();
      this.lannister.setListeners();
    }
    if(player === "K"){
      this.khal.id = player;
      this.khal.drawKhal();
      this.khal.setListeners();
    }
    if(player === "T"){
      this.targaryen.id = player;
      this.targaryen.drawQueen();
      this.targaryen.setListeners();
    }
    this.army.drawArmy();
    this.army.move();
    this.soldier.drawSoldier();
    this.soldier.move();
    this.whitewalker.drawWhiteWalkers();
    this.whitewalker.move();
    this.doom.drawArmy();
  }.bind(this), 16)

}




Game.prototype.isCollision = function(villainXandY) {
  // colisiones genéricas 
  // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
  debugger
  return this.villainXandY.some(function(villain) {
    
      return (
        ((this.player.x + this.player.w) >= villain.dx &&
         this.player.x < (villain.dx+ villain.dw) &&
         this.player.y + (this.player.h - 20) >= villain.dy &&
         this.player.y  <= villain.dy+ villain.dh)
      );
  }.bind(this));

};

// this.dx,
// this.y,
// this.dw,
// this.dh