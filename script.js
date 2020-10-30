const as = 5;
const gs = 100;
const color = [0, 255];
// "n" → 0,"e" → 1,"s" → 2,"w" → 3];
var grid = [];

var cx;
var cy;
var cd;


function init() {
  for(x=0; x<gs; x++) {
    grid[x] = [];
    for(y=0; y<gs; y++) {
      grid[x][y]=0;
    }
  }
  fill(255);
  rect(0,0,gs*as,gs*as);
  cx = 50;
  cy = 50;
  cd = 0;

}
function move(){
  if (cd == 0) cy=cy-1;
  if (cd == 2) cy=cy+1;
  if (cd == 1) cx=cx-1;
  if (cd == 3) cx=cx+1;
}

function turn(dir){
  if(dir == "r") cd = (cd + 1) % 4; 
  if(dir == "l") cd = (cd + 3) % 4; 

}

function setup() {
  console.log("setup");
	createCanvas(as*gs,as*gs);
  init();
}

//var [xrot, yrot, t] = [350, 200, 1];

function drawAnt(x, y, c) {
  fill(color[c]);
  rect(x*5, y*5, 5, 5);
  grid[x][y] = c;
}


function draw() {
  console.log("draw");
  var cc = grid[cx][cy]
  console.log(cc);
  drawAnt(cx, cy, (cc + 1) % 2);

  // Blanc → gauche
  if(cc == 0){
    console.log("LEFT")
    turn("l");
  }

  // Noir → droite
  if(cc == 1){
    console.log("RIGHT")
    turn("r");
  }

  move();
}

