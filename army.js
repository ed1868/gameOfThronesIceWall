function randomIntFromInterval(min,max) 
{
    return Math.floor(Math.random()*(max-min+2) + min);
}
function Army (game) {
  this.game = game;
  this.img = new Image(); 
  this.img.src = 'images/army.png';
  this.img.frameIndex = 0;
  this.img.frames = 4;
  this.frameCounter=0
  this.w = 223;
  this.h = 50;
  this.x = 400;
  this.y = 110;
  this.sw = Math.floor(this.w / this.img.frames);
  this.sy = 0;
  this.sh = 50;
  this.dx = 500;
  this.dy = 700;
  this.dw = Math.floor(this.w / this.img.frames);
  this.dh = 50;


  this.vx = 3;
  this.vy = 1;


}

Army.prototype.drawArmy = function() {


this.sx = this.img.frameIndex *  Math.floor(this.w / this.img.frames);
this.frameCounter++

if(this.frameCounter % 10 == 0) {
  this.img.frameIndex++
}

  this.game.ctx.drawImage(
    this.img,
    this.sx,
    this.sy,
    this.sw,
    this.sh,
    this.dx,
    this.y,
    this.dw,
    this.dh

  );

 
  this.animateArmy();
  this.move();

}

 
Army.prototype.animateArmy = function() {

  if (this.img.frameIndex > 3) {
    this.img.frameIndex = 0;
  }

}

Army.prototype.move = function() {


    if (this.y < 800) {
      this.y += 0.6;
    } else {
      this.y = 0
      
    }

}
///////////////////////////// HEADLESS SOLDIER //////////////////////////////////
function Soldier (game) {
  this.game = game;
  this.img = new Image(); 
  this.img.src = 'images/army.png';
  this.img.frameIndex = 0;
  this.img.frames = 4;
  this.frameCounter=0
  this.w = 223;
  this.h = 50;
  this.x = 400;
  this.y = 110;
  this.sw = Math.floor(this.w / this.img.frames);
  this.sy = 0;
  this.sh = 50;
  this.dx = randomIntFromInterval(50,200);
  this.dy = 700;
  this.dw = Math.floor(this.w / this.img.frames);
  this.dh = 50;

  this.vx = 3;
  this.vy = 1;


}

Soldier.prototype.drawSoldier = function() {


  this.sx = this.img.frameIndex *  Math.floor(this.w / this.img.frames);
  this.frameCounter++
  
  if(this.frameCounter % 10 == 0) {
    this.img.frameIndex++
  }
  
    this.game.ctx.drawImage(
      this.img,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.dx,
      this.y,
      this.dw,
      this.dh
  
    );
  
   
    this.animateSoldier();
    this.move();
  
  }
  
   
Soldier.prototype.animateSoldier = function() {
  
    if (this.img.frameIndex > 3) {
      this.img.frameIndex = 0;
    }
  
  }
  
Soldier.prototype.move = function() {
  
  
      if (this.y < 600) {
        this.y += 0.3;
      } else {
        this.y  *= -1; 
      }
  
  }

  /////////////////////////////////////WHITE WALKER ////////////////////////////////////////


  function Whitewalker (game) {
    this.game = game;
    this.img = new Image(); 
    this.img.src = 'images/whiteWalker.png';
    this.x = randomIntFromInterval(50,300)+ randomIntFromInterval(40,800);
    this.walkersToGenerate = 4;
    this.walkers = [];
    this.y = 110;
    this.w = 50;
    this.h = 80;
    this.vx = 15;
    this.vy = 15;
    this.counter = 0;
  
    this.vx = 3;
    // this.vy = 1;
  
  
  }



  Whitewalker.prototype.generateWalkers = function () {
    for(var i = 0; i < this.walkersToGenerate ; i++){
      this.walkers.push(new Whitewalker(this.img,this.x,this.y,this.w,this.h));
      console.log(this.walkers);
  
    }
  }


  
  Whitewalker.prototype.drawWhiteWalkers = function() {
      this.walkers.forEach(function(walker){
        console.log(this.walkers);
        this.game.ctx.drawImage(walker.img,walker.x,walker.y,walker.w,walker.h);

    }.bind(this))

    }
    

    
     

    
Whitewalker.prototype.move = function() {
  this.walkers.forEach(function(walker){
      if (walker.y < 300) {
        walker.y += 0.5;
      } 
      if (walker.y < 600){
        walker.y += 1;
      }
      if (walker.y < 700){
        walker.y += 5;
      }
      else {

        walker.y *= -1
      }
      
    }.bind(this))
  }



//////////////////////////////////////Third Soldier/////////////////////////////////////////////////
function Doom (game) {
  this.game = game;
  this.img = new Image(); 
  this.img.src = 'images/army.png';
  this.img.frameIndex = 0;
  this.img.frames = 4;
  this.frameCounter=0
  this.w = 223;
  this.h = 50;
  this.x = 600;
  this.y = 110;
  this.sw = Math.floor(this.w / this.img.frames);
  this.sy = 0;
  this.sh = 50;
  this.dx = 700;
  this.dy = 700;
  this.dw = Math.floor(this.w / this.img.frames);
  this.dh = 50;


  this.vx = 3;
  this.vy = 1;


}

Doom.prototype.drawArmy = function() {


this.sx = this.img.frameIndex *  Math.floor(this.w / this.img.frames);
this.frameCounter++

if(this.frameCounter % 10 == 0) {
  this.img.frameIndex++
}

  this.game.ctx.drawImage(
    this.img,
    this.sx,
    this.sy,
    this.sw,
    this.sh,
    this.dx,
    this.y,
    this.dw,
    this.dh

  );

 
  this.animateArmy();
  this.move();

}

 
Doom.prototype.animateArmy = function() {

  if (this.img.frameIndex > 3) {
    this.img.frameIndex = 0;
  }

}

Doom.prototype.move = function() {


    if (this.y < 800) {
      this.y += 2;
    } else {
      this.y = 0
      
    }
  }