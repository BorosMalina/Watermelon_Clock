

function setup() {
  angleMode(DEGREES);

  createCanvas(500, 500);
  background(0);

}

function draw() {
  translate(250,250);
  rotate(-90);

  // Melon dark edge
  push();
  fill(0, 100, 50);
  circle(0,0,430);
  pop();
  
  // Melon background circle
  push();
  fill(180, 10, 65);
  stroke(206, 227, 163);
  strokeWeight(20);
  circle(0,0,350);
  pop();

  let hr = hour();
  let mn = minute();
  let sec = second();

  // Second counting arc
  strokeWeight(6);
  stroke (0, 200, 50);
  fill(255, 20, 100);
  let secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  // Minute counting arc
  strokeWeight(8);
  fill(255, 80, 100);
  let minuteAngle = map(mn, 0, 60, 0, 360) //+ map(secondAngle, 0, 360, 0, 6); 
  arc(0, 0, 250, 250, 0, minuteAngle);

  // Hour counting arc
  strokeWeight(10);
  fill(255, 110, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360) //+ map(minuteAngle, 0, 360, 0, 30);
  arc(0, 0, 200, 200, 0, hourAngle);

  // Seconds line (is dotted)
  push();
  rotate(secondAngle);
  stroke(0);
  drawingContext.setLineDash([0,15]);
  line(0,0,120,0);
  pop();

  // Minute line
  push();
  rotate(minuteAngle);
  stroke(0);
  line(0,0,110,0);
  pop();

  // Hour line
  push();
  rotate(hourAngle);
  stroke(0);
  line(0,0,80,0);
  pop();

  // Text over clock lines
  rotate(minuteAngle);
  fill(255,255,0);
  noStroke();
  text("Melon Time!", 10, 4);
 
}
