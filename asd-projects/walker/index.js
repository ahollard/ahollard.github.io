/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects
  const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  var walker = {
    X: 0,
    Y: 0,
    speedX: 0,
    speedY: 0,
    accelerationX: 0,
    accelerationY: 0,
  };
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown); // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp); // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    updateSpeed();
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    // set accel to 0.3 or -0.3
    if (event.which === KEY.LEFT) {
      walker.accelerationX = -0.05;
    } else if (event.which === KEY.UP) {
      walker.accelerationY = -0.05;
    } else if (event.which === KEY.RIGHT) {
      walker.accelerationX = 0.05;
    } else if (event.which === KEY.DOWN) {
      walker.accelerationY = 0.05;
    }
    console.log(event.which);
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      walker.accelerationX = 0.05;
    } else if (event.which === KEY.UP) {
      walker.accelerationY = 0.05;
    } else if (event.which === KEY.RIGHT) {
      walker.accelerationX = -0.05;
    } else if (event.which === KEY.DOWN) {
      walker.accelerationY = -0.05;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.X += walker.speedX;
    walker.Y += walker.speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.X);
    $("#walker").css("top", walker.Y);
  }

  function updateSpeed() {
    var originalXSign = Math.sign(walker.speedX);
    var originalYSign = Math.sign(walker.speedY);

    walker.speedX += walker.accelerationX;
    walker.speedY += walker.accelerationY;

    var newXSign = Math.sign(walker.speedX);
    var newYSign = Math.sign(walker.speedY);
    if (originalXSign !== 0) {
      if (originalXSign !== newXSign) {
        walker.accelerationX = 0;
        walker.speedX = 0;
      }
    }
    if (originalYSign !== 0) {
      if (originalYSign !== newYSign) {
        walker.accelerationY = 0;
        walker.speedY = 0;
      }
    }
  }
var xBoundary = $("#board").height() - $("#walker").height();
var yBoundary = $("#board").width() - $("#walker").width()
  function wallCollision() {
    if (walker.X >= xBoundary) {
      walker.accelerationX = 0;
      walker.speedX = 0;
      walker.X = xBoundary;
    }
    
    if (walker.X < 0) {
      walker.accelerationX = 0;
      walker.speedX = 0;
      walker.X = 0;
    }

    if (walker.Y >= yBoundary) {
      walker.accelerationY = 0;
      walker.speedY = 0;
      walker.Y = yBoundary;
    }

    if (walker.Y < 0) {
      walker.accelerationY = 0;
      walker.speedY = 0;
      walker.Y = 0;
    }
  }
  console.log($("#walker").width())

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
