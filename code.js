var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d2fb618-f820-4db0-a3e7-269f0f5d0ef9","0b8f84b6-e6f0-43d8-baac-3e803ab5a552","17e86806-cc5e-4ddb-9d51-1afff928687b","55b4384d-7429-469f-8cd9-b85f0e35f0b7","08de1278-196f-44de-ba4e-581e4e310de4","8dca3b3a-a831-4f66-bc73-f2e75b59cb53","6708b453-bfaf-4371-911a-797c16364b5c"],"propsByKey":{"7d2fb618-f820-4db0-a3e7-269f0f5d0ef9":{"name":"car1","sourceUrl":null,"frameSize":{"x":30,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"EhKUIWa_fJoepU.xprxcc5Kc2zgc6jdp","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":55},"rootRelativePath":"assets/7d2fb618-f820-4db0-a3e7-269f0f5d0ef9.png"},"0b8f84b6-e6f0-43d8-baac-3e803ab5a552":{"name":"car","sourceUrl":null,"frameSize":{"x":12,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"TlKMRbnE6dHVc.ScbkjQ500k4n0YHIwQ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":22},"rootRelativePath":"assets/0b8f84b6-e6f0-43d8-baac-3e803ab5a552.png"},"17e86806-cc5e-4ddb-9d51-1afff928687b":{"name":"4","sourceUrl":null,"frameSize":{"x":20,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"d_nZeP8XmUQqL5nWwRlSu1OQDTH.z2Fr","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":13},"rootRelativePath":"assets/17e86806-cc5e-4ddb-9d51-1afff928687b.png"},"55b4384d-7429-469f-8cd9-b85f0e35f0b7":{"name":"1","sourceUrl":null,"frameSize":{"x":12,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"fDYuIHweghRydmwHG_5uWRb01RS88Aap","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":22},"rootRelativePath":"assets/55b4384d-7429-469f-8cd9-b85f0e35f0b7.png"},"08de1278-196f-44de-ba4e-581e4e310de4":{"name":"10","sourceUrl":null,"frameSize":{"x":12,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"I2nFs1AE_YYMOD27jkDExH47UZXQ0iHl","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":22},"rootRelativePath":"assets/08de1278-196f-44de-ba4e-581e4e310de4.png"},"8dca3b3a-a831-4f66-bc73-f2e75b59cb53":{"name":"b","sourceUrl":null,"frameSize":{"x":7,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"i05bZ67Ec5PIItK.4dtsqPqD7DRkYw5o","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":7,"y":22},"rootRelativePath":"assets/8dca3b3a-a831-4f66-bc73-f2e75b59cb53.png"},"6708b453-bfaf-4371-911a-797c16364b5c":{"name":"l","sourceUrl":null,"frameSize":{"x":12,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"9HWww16G5FnPDSaPonneL8VdTJejkt.7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":12,"y":22},"rootRelativePath":"assets/6708b453-bfaf-4371-911a-797c16364b5c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("car");
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("l");
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("1");
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("10");
  sam.setAnimation("b");
  
 
//add the velocity to make the car move.
car1.velocityY=7;
car2.velocityY=-7;
car3.velocityY=7;
car4.velocityY=-7;



function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
createEdgeSprites();
sam.bounceOff(edges);
car1.bounceOff(boundary1);
car2.bounceOff(boundary1);
car3.bounceOff(boundary1);
car4.bounceOff(boundary1);

car1.bounceOff(boundary2);
car2.bounceOff(boundary2);
car3.bounceOff(boundary2);
car4.bounceOff(boundary2);

//Add the condition to make the sam move left and right
if(keyDown(LEFT_ARROW)){
  sam.x=sam.x-3;
}

if(keyDown(RIGHT_ARROW)){
  sam.x=sam.x+3;
}
//Add the condition to reduce the life of sam if it touches the car.
if(sam.isTouching(car1)||
sam.isTouching(car2)||
sam.isTouching(car3)||
sam.isTouching(car4)
){
  sam.x=20;
  sam.velocityX=0;
  sam.velocityY=0;
  life=life-1;
}
if(life==0){
  textSize(20);
  text("GAME OVER",160,40);
   
}
  if(sam.isTouching(rightEdge)){
    textSize(20);
    text("YOU WON",160,300);
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
