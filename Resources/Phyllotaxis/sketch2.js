var Cannvass;

var n = 0;
var c = 4.5;
var ang;
var npts = 1000;

var BGcol = 51
var cols = [ "#E9DBB0"," #7AA8B2", "#85C9C0", "#738B5C" ]

function resetSketch(){
    reSetup();
    loop();
}

function reSetup(){
    background(BGcol);
    ang = 0;
}

function setup() {
    Cannvass = createCanvas(400,400);
    Cannvass.parent("canvas2");
    reSetup();
    noLoop();    
    
}

function draw() {
   // background(51);
   //ang = slider.value();
    
    n = 0;
    printPic();
    ang += 0.0001; // slider.value();
   //noLoop();
}


function printPic(){
    background(BGcol);
    push();
        textSize(21);
        fill(225);
        text(ang.toFixed(4), 10, 30);   // \u03C0  \u221A3 2\u03C0
    pop();
    push();
        noFill();
        stroke(255,20);
        strokeWeight(3);
        rad = 10 +2*c * sqrt(npts)
        ellipse(width/2,height/2, rad,rad)
    pop();
     
    while(n < npts){
    var a = n*ang * 2 * PI;
    var r = c * sqrt(n);

    var x = r * cos(a)  + width / 2;
    var y = r * sin(a) + height / 2;

    rad =  4 + 1*n / npts;
    fill(random(cols));
    noStroke();
    ellipse(x,y,rad,rad);

    n++;
    }

}


function saveIT(){
    saveCanvas(Cannvass, "Sketch",'jpg');
}

