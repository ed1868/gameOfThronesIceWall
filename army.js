function Army (game) {
  this.game = game;
  this.img = new Image(); 
  this.img.src = 'images/army.png';
  this.img.frameIndex = 0;
  this.img.frames = 4;
  this.frameCounter=0
  this.w = 223;
  this.h = 50;
  this.x = 500;
  this.y = 60;
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
      this.y += 0.5;
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
  this.y = 60;
  this.sw = Math.floor(this.w / this.img.frames);
  this.sy = 0;
  this.sh = 50;
  this.dx = 400;
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
        this.y += 1;
      } else {
        this.y  *= -1; 
      }
  
  }

  /////////////////////////////////////WHITE WALKER ////////////////////////////////////////

  function Whitewalker (game) {
    this.game = game;
    this.img = new Image(); 
    this.img.src = 'images/whiteWalker.png';
    this.x = 450;
    this.y = 60;
    this.w = 50;
    this.h = 80;
    this.vx = 15;
    this.vy = 15;
  
    this.vx = 3;
    this.vy = 1;
  
  
  }
  
  Whitewalker.prototype.drawWhiteWalker = function() {
  
      this.game.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h,
      
      )
      this.move();
    }
    

    
     

    
Whitewalker.prototype.move = function() {
    
    
        if (this.y < 600) {
          this.y += 1;
        } else {
          this.y  *= -1; 
        }
    
    }