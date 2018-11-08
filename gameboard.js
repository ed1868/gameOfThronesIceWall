
window.onload = function() {
    var game = new Game ("myCanvas");
    game.draw();
}
var player = prompt ("Pick A Character ... S :John Snow , L :Joffrey Lannister , T :Daenerys Targaryen , K :Khal Drogo ");



function Game(id) {
  this.game = document.getElementById(id);
  this.ctx = this.game.getContext("2d");
  this.img = new Image(); 
  this.img.src = 'images/newWal.png';
  // this.walkerSound = new Audio("myAudio.mp3");
  this.player = player;
  // this.soundCollision = new Audio(/*ruta*/)
  if(player === "S"){
    this.player = new Character(this);
  }
  if(player === "L"){
    this.player   = new Lannister(this);
  }
  if(player === "T"){
    this.player    = new Targaryen(this);
  }
  if(player === "K"){
  this.player         = new Khal(this);
  }
  this.army         = new Army(this);
  this.soldier      = new Soldier(this);
  this.tron         = new Tron (this);
  this.whitewalker  = new Whitewalker(this);
  this.whitewalker.generateWalkers();
  this.doom          = new Doom(this);
  this.jordy         = new Jordy(this);
  this.score    = 0;
 
  
  // this.nightKing = new nightKing(this);
  this.fps = 60;
  this.villainXandY = [ this.army, this.soldier, this.doom , this.tron ,this.jordy ];
  this.walkerCoordinates = this.whitewalker;
}

Game.prototype.update = function(){
  this.ctx.drawImage(video,0,0,256,256);   
  requestAnimationFrame(update); // wait for the browser to be ready to present another animation fram.       
}

Game.prototype.drawBackground = function () {
  this.ctx.drawImage(this.img, 40,0,1000,900);
}

Game.prototype.draw = function () {
  if(!player) player = 'S'
  this.intervalId = setInterval(function() {
    this.drawBackground();
    if (  this.isCollision() || this.isCollisionWhiteWalker() ){
      this.gameOver();


    }
    if(player === "S"){
      this.player.drawCharacter();
      this.player.setListeners();
    }
    if(player === "L"){
      this.player.drawLannister();
      this.player.setListeners();
    }
    if(player === "K"){
      this.player.drawKhal();
      this.player.setListeners();
    }
    if(player === "T"){
      this.player.drawQueen();
      this.player.setListeners();
    }
    this.army.drawArmy();
    this.soldier.drawSoldier();
    this.whitewalker.drawWhiteWalkers();
    this.whitewalker.move();
    this.doom.drawArmy();
    this.tron.drawArmy();
    this.jordy.drawArmy();
    this.army.move();

    if (this.player.y <= 127 && !this.isCollision() && !this.isCollisionWhiteWalker() ){
      this.gameWon();
    }
  }.bind(this), 16)
}




Game.prototype.isCollision = function(villainXandY) {
  return this.villainXandY.some(function(villain) {
      if (
        ((this.player.x + this.player.w) >= villain.dx &&
         this.player.x < (villain.dx+ villain.dw) &&
         this.player.y + (this.player.h ) >= villain.y &&
         this.player.y  <= villain.y+ villain.dh)
      ) return true;
  }.bind(this));
};

Game.prototype.isCollisionWhiteWalker = function(walkerCoordinates) {
  return this.whitewalker.walkers.some(function(walker){
      if (
        (( this.player.x + this.player.w) >= walker.x &&
           this.player.x < (walker.x + walker.w) &&
           this.player.y + (this.player.h) >= walker.y  &&
           this.player.y <= walker.y + walker.h)
      ) return true;
  }.bind(this));
};


Game.prototype.gameOver = function() {
  clearInterval(this.intervalId);
  playVid();
}

Game.prototype.gameWon = function () {
    
    clearInterval(this.intervalId);
    winnerVid();
    
}



