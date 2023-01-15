let detailX;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  detailY = createSlider(2, 24, 6);
  detailY.position(10, 10);
  detailY.style('width', '180px');
}

function draw() {
  background(0);
  rotateY(millis() / 1000);
  
  ellipsoid(windowWidth/8, windowWidth/8, windowWidth/8, detailY.value(), detailY.value());
}
