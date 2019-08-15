
  function snake()
  {
      this.x=20;
      this.y=20;
      this.xspeed = 1;
      this.yspeed = 0;
      this.total = 0;
      this.tail = [];

      this.reset = function() // press 5 to reset
      {
        this.x=20;
        this.y=20;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
        document.getElementById("header").innerHTML = "SNAKE GAME";
        speed=10;
        frameRate(10);
      }

      this.death = function() //when snake dies
      {
        
        if(this.x === -r || this.x === width || this.y === -r || this.y === height)    
        {
            
            frameRate(0);
            //alert("u loose");
            document.getElementById("header").innerHTML = "YOU LOSE!! PRESS 5 TO RESTART";
            endAudio();
        }
        else {
        
        for(var i =0;i<this.tail.length;++i)
            {
                var pos= this.tail[i];
                var d= dist(this.x,this.y,pos.x,pos.y);
                if(d<1)
                {
                    
                    frameRate(0);
                    //alert("u loose");
                    document.getElementById("header").innerHTML = "YOU LOOSE!! PRESS 5 TO RESTART"
                    endAudio();

                }
            }
      }
    }

      this.dir = function(x,y)
      {
          this.xspeed=x;
          this.yspeed=y;
      }
      this.eat = function(pos)
      {
          var d = dist(this.x,this.y,pos.x,pos.y);
          if(d < 1) {
              this.total++;
              
              return true;
          }
          else return false;
      }

      this.update = function(){ //update snake's location 
        if(this.total === this.tail.length){  
        for(var i = 0;i < this.tail.length-1;++i)
          {
              this.tail[i] = this.tail[i+1];
          }
        }
          this.tail[this.total-1] = createVector(this.x,this.y);
          this.x=this.x+this.xspeed*r;
          this.y=this.y+this.yspeed*r;

          this.x=constrain(this.x,-r,width);
          this.y=constrain(this.y,-r,height);
          console.log(this.x);
          console.log(this.y);
          
      }
      this.show = function() //draw snake
      {
          fill("white");
          for(var i = 0;i <this.tail.length;++i)
          {
            rect(this.tail[i].x,this.tail[i].y,r,r);
          }
          rect(this.x,this.y,r,r);
         
      }
  }