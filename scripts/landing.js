2$(document).ready(game);

let score= 0;                                                        // gives the user a score based on how long they've been playing the game
setInterval(function gameScore(){
 score++;
$('#score').text(score);
}, 70)
                                                                    // Sets a function for the game
function game() {
let quakeSkater= $('img#bart');
let bartCounter= 0;

                                                                    //create keyboard event listeners for bart
document.addEventListener("keydown", moveBart, false);

                                                                    // Create a function that makes bart go right when the right arrow key is pressed
                                                                    // Create a function that makes bart go left when the left arrow key is pressed
                                                                    // Create a function that backs bart jump when the space key is pressed


function moveBart(e) {
  let topQuake= quakeSkater.css('top');
  let leftQuake= quakeSkater.css('left')

   if (e.which === 39 && bartCounter < 25){
     bartCounter++
     quakeSkater.animate({'left': (30 * bartCounter) + 'px'}, 10); // Makes bart go right

   } else if (e.which === 37 && bartCounter < 25){
       bartCounter--
       quakeSkater.animate({'left': (30 * bartCounter) + 'px'},10); // Makes bart go left

   } else if (e.which === 32){
       quakeSkater.animate({'top': 310+'px'},'fast', function(){
         if(quakeSkater.css('top') === '310px'){
         quakeSkater.animate({'top': 460+'px'}, 500)                // Makes bart jump
       };
     })
   } else {                                                        // Resets bart back to beginning of page once a certain distance is reached
     bartCounter = 0
     quakeSkater.css('left', '0')
   }
};

setTimeout(function(){                                            // Shakes the div container randomly between 1 and 10 seconds
  $('#shakeThingsUp').effect('shake');
  setInterval(function(){
    setTimeout(function(){
      $('#shakeThingsUp').effect('shake');
    }, (Math.random() * 10000));
}, 1000);
}, 1000);


function robotAttack(){                                           // Gets the robot attacker to move across the page and reset once it is out
let robot= $('#robot > img');                                     // of frame
let distance= 1200;
setInterval(function(){
  robot.css('left', distance + 'px');
  if(distance < -300){
    distance = 1200;
  } else {
    distance -= 7;
  }
},15);
setTimeout(function(){                                            // Makes robot attacker disappear after 15 seconds
  robot.hide()
},15000);

};
robotAttack();

function spideyAttack(){                                         // Gets spiderman moving across the page and resets him once he is out
let spider= $('#spiderman > img');                              // of frame
let spiderkick= 1200;
setInterval(function(){
  spider.css('left', spiderkick + 'px');
  if(spiderkick < -300){
    spiderkick = 1200;
  } else {
    spiderkick -= 10;
  }
},15);
};
spideyAttack();

let peter= $('#spiderman > img');                              // hides Spiderman for the first 16 seconds of the game then shows him
peter.hide()                                                  // hides Spiderman after 29 seconds has passed
setTimeout(function(){
peter.show()
}, 16000);
setTimeout(function(){
  peter.hide()
}, 29000);


function theFlash(){                                          // get the Flash moving across the page and resets him once out of frame
let barry= $('#flash > img');
let speed= 1200;
setInterval(function(){
  barry.css('left', speed + 'px');
  if(speed < -300){
    speed = 1200;
  } else {
    speed -= 15;
  }
},10);
};
theFlash();

let time= $('div#flash');                                    // hides flash for the first 30 seconds of the game then shows him until user is
time.hide()                                                 // is killed
setTimeout(function(){
time.show()
}, 30500);


let warning= $('div#watchout');                           // Warns the user to 'Get Ready!' two seconds before next character comes out
warning.hide()
setTimeout(function(){
warning.show()
}, 13000);
setTimeout(function(){
  warning.hide()
}, 15000);
setTimeout(function(){
  warning.show()
}, 28000);
setTimeout(function(){
  warning.hide()
}, 30000);



setInterval(function collide(){                                       // detects whether or not protagonist has collided with anyth monsters or superheroes
let attackerY= parseFloat($('#robot > img').css('top'));
let attackerX= parseFloat($('#robot > img').css('left'));
let bartY= parseFloat(quakeSkater.css('top'));
let bartX= parseFloat(quakeSkater.css('left'));
let sndEffect1= $('#sound1')[0];
let sndEffect2= $('#sound2')[0];
let sndEffect3= $('#sound3')[0];
let hitCount= 0;                                                                // Worked with Imani, Paris, and Sam as a group to figure this one out

if(Math.abs(attackerY - bartY) < 60 && Math.abs(attackerX - bartX) < 60){       // detects if bart collided with robot attacker, the cause of this earthquake
  hitCount++
sndEffect1.play();
window.location='gameover.html';                                              // redirects user to gameover page if he gets hit once
}


let spideyY= parseFloat($('#spiderman > img').css('top'));
let spideyX= parseFloat($('#spiderman > img').css('left'));

if(Math.abs(spideyY - bartY) < 60 && Math.abs(spideyX - bartX) < 60){           // detects if bart collided with spiderman, as he attempts to catch the robot
  hitCount++
  sndEffect2.play();
  window.location='gameover.html';                                              // redirects user to gameover page if he gets hit once
}


let flashY= parseFloat($('#flash > img').css('top'));
let flashX= parseFloat($('#flash > img').css('left'));

if(Math.abs(flashY - bartY) < 60 && Math.abs(flashX - bartX) < 60){             // detects if bart collided with the Flash, as he attempts to save people
  hitCount++
  sndEffect3.play();
  window.location='gameover.html';                                              // redirects user to gameover page if he gets hit once
}
})
};
