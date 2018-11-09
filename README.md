# IronThroneStory

## Key Movements 
<ul>
<li> Up Arrow    = Climb Up </li>
<li> Right Arrow = Move Right </li>
<li> Down Arrow  = Move Down </li>
<li> Left Arrow  = Move Left </li>
</ul>

## Dont Look Down !!

You might get scared and Slow Your speed to try and not fall Off or Get killed by a White Walker.
![](https://66.media.tumblr.com/c2932a130645df77b2999ab006f35a27/tumblr_phx6jdAJI71u4bxgt_540.jpg)

## Score System

- Your Score is determined by how much you move on the X-axis. The more risks you take, The higher your score. For your Score to count, you must also climb the Wall.

## Easter Egg

-  ********* Hidden Character 

--- 
### Questions 

 1.Code that I am proud of
  
  
         let vid = document.getElementById("myVideo"); 
         let aud = document.getElementById("iframeAudio");
  
              function playVid() { 
                  aud.pause();
                  $(vid).addClass('videoStyle');
                  vid.play(); 
                  } 
               setTimeout(function(){
                     window.location = 'throneBoard.html';
                },15000);
               
               
 
    2. REThink before starting to Code. Structuring Ideas before Touching the keyboard. Less repeated code.
    
    3. Better graphics , better movement 
    
    4. 
    
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
