let settings = {
  redColorLeaves:222,
  greenColorLeaves:120,
  blueColorLeaves: 180,
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
 


  gui = new dat.GUI();
  gui.add(settings, 'redColorLeaves', 0, 255).name("Red Color Leaves");
  gui.add(settings, 'greenColorLeaves', 0, 255).name("Green Color Leaves");
  gui.add(settings, 'blueColorLeaves', 0, 255).name("Blue Color Leaves");
  

 
  
  gui.width = 300;
  gui.close();
  gui.remember(settings);

  noLoop();



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  noLoop();

}

function draw() {
  background(200);
  translate(width / 2, height);
   branch(height * 0.2)
  
}

 function mouseReleased() {
  background(200);
branch(height * 0.2)

}

function branch(len) {
  push();
  if(len > 10) {
    stroke(70, 40, 20);
  strokeWeight(map(len, 10, 100, 1, 15)) ;
  line(0, 0, 0, -len);
  translate(0, -len);
 
  
  rotate(random(-20, -30));
  branch(len * random(0.7, 0.9));
  rotate(50, 60);
  branch(len * random(0.7, 0.9));
} else { 
  

  var r = settings.redColorLeaves +random(-20, 20);
  var g = settings.greenColorLeaves +random(-20, 20);
  var b = settings.blueColorLeaves +random(-20, 20);
  fill(r, g, b, 100);


  beginShape();
  for (var i = 45; i < 135; i++) {
  var rad = 15;
  var x = rad * cos(i);
  var y = rad * sin(i);
  vertex(x, y);
  }
  for (var i = 135; i > 40; i--) {
    var rad = 15;
    var x = rad * cos(i);
    var y = rad * sin(-i)+ 20;
    vertex(x, y);
  }
  endShape(CLOSE);
}
pop()
}

