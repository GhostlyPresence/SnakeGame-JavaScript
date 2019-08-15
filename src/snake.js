

var snake;
var r=20,speed=10;
var points = 0;

var food = createVector();
function setup() { 
    createCanvas(1520, 540); 
    snake = new snake();
    frameRate(10);
    pickLocation();
    player();
    
  } 
    
  function draw() { 
    background(204, 255, 255); 
    snake.death();
    snake.update();
    snake.show(); 



    /////////////////////////////////////////////
    if(snake.eat(food)){ //when snake eats food
          playAudio();
          points++;
          document.getElementById("points").innerHTML = "POINTS : " + points;
          pickLocation();
          speed+=1;
          frameRate(speed);

    }
    fill("yellow");
    rect(food.x,food.y,20,20);
  }
    /////////////////////////////////////////////


  function endAudio() //audio when game ends
  {
      var audio = new Audio("public/sounds/tom-1.mp3");
      audio.play();
  }

  function playAudio() //audio when snake eats food
  {
        var audio = new Audio("public/sounds/kick-bass.mp3");
        audio.play();
  }

      /////////////////////////////////////////////
  function player() //information of player
  {
     var person = "";
     while(person === "")
     {
       person = prompt("Please enter your name:", "Manas Sinha");  
       if (person == null || person == "") {
            alert("PLEASE ENTER PLAYER NAME");
          } else {
           var txt =  " Player name : " + person;
          }
     }
    document.getElementById("playerName").innerHTML = txt;
  }
      /////////////////////////////////////////////



  function pickLocation() //pick random location for food
  {
      var col= floor(width/r);
      var row= floor(height/r);
      food = createVector(floor(random(col)),floor(random(row)));
      food.mult(r);

  }

  /////////////////////////////////////////////

  function keyPressed(){ //detect the pressed key
      if(keyCode === UP_ARROW && snake.yspeed != 1) 
            snake.dir(0,-1);
      else if(keyCode === DOWN_ARROW && snake.yspeed != -1)
            snake.dir(0,1);
      else if(keyCode === RIGHT_ARROW && snake.xspeed != -1)
            snake.dir(1,0);
      else if(keyCode === LEFT_ARROW && snake.xspeed != 1)
            snake.dir(-1,0);
      else if(key === '5'){
            snake.reset();
            pickLocation();
            points=0;
            document.getElementById("points").innerHTML = "POINTS : " + points;
            fill("yellow");
            rect(food.x,food.y,20,20);
            
      }
      else if(key === '0') frameRate(0);
      else if(key === '9') frameRate(speed);
      //else if(key === 'c') snake.total+=20;
    
  }
  /////////////////////////////////////////////
