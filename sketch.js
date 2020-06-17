var currentPath = [];
var drawing = [];

function setup(){
    canvas = createCanvas(1000,600);
    canvas.mousePressed(start);

}

function draw(){
   background(51);
    if(mouseIsPressed){
       var point = {
          x:mouseX,
          y:mouseY
       }
      currentPath.push(point);
    }

    stroke(255);
    strokeWeight(5);
    noFill();
    for(var i=0; i<drawing.length; i++){
      var path = drawing[i];
      beginShape();
      for(var j =0; j<path.length; j++){
         vertex(path[j].x,path[j].y);
      }
      endShape();
    }
}
function start(){
   currentPath = [];
   drawing.push(currentPath);
}