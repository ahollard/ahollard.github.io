/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function(window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById("canvas");
  const stage = new createjs.Stage(canvas);

  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;


  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  
  // INIT CREATEJS //

  

    
  // CREATE A BACKGROUND //
const bg = new createjs.Shape();

    console.log(bg);
    bg.graphics.beginFill("rgba(251, 238, 238, 1)").drawCircle(250, 250, 275)

  // CREATE A CIRCLE //
  
  const eyeContainer = new createjs.Container();
  eyeContainer.x = 150
  eyeContainer.y = 100
  const leftEye = new createjs.Shape();
  const rightEye = new createjs.Shape();
  const mouth1 = new createjs.Shape();
  const mouth2 = new createjs.Shape();
  const nose1 = new createjs.Shape();

  leftEye.graphics.beginFill("red").drawCircle(-10, 10, 25); // x, y, radius
  leftEye.graphics.beginFill("black").drawCircle(-10, 10, 2.5);
  rightEye.graphics.beginFill("red").drawCircle(100, 10, 25);
  rightEye.graphics.beginFill("black").drawCircle(100, 10, 2.5);
  mouth1.graphics.beginFill("red").drawCircle(100, 200, 150);
  mouth2.graphics.beginFill("rgba(251, 238, 238, 1)").drawCircle(100, 170, 150);
  nose1.graphics.beginFill("red").drawCircle(100, 150, 10)
  rightEye.scaleX = 2
  leftEye.scaleX = 2
  // ADD DISPLAY OBJECTS TO STAGE //
  eyeContainer.addChild(leftEye, rightEye, mouth1, mouth2, nose1);
stage.addChild(bg, eyeContainer);



stage.update();
  // TODO 8: Listen to the 'tick' event  //
  
  let tickHandler = createjs.Ticker.on("tick", onTick);

  // TODO 9: Handle the 'tick' event //
  
  function onTick(event) {
    update(event);
  }

  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  var leftEyeSpeed = 1.5;
  var rightEyeSpeed = 1.5;
  var mouth2Speed = 3;
  function update(event) {
    if (leftEye.x < 0 || leftEye.x > 10) {
      leftEyeSpeed = -leftEyeSpeed * 1.001
    }
    if (rightEye.x < 0 || rightEye.x > 10) {
      rightEyeSpeed = -rightEyeSpeed * 1.001
    }
    if (mouth2.y < 0 || mouth2.y > 20) {
      mouth2Speed = -mouth2Speed 
    }
    leftEye.x += leftEyeSpeed
    rightEye.x += rightEyeSpeed
    mouth2.y += mouth2Speed
    console.log(leftEye.x)

    stage.update();
  }

}(window, window.createjs));
