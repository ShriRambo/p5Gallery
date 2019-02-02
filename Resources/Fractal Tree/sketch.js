var angle =0;
var seed = 0;
var d = 0.75;
var Cannvass;


var slider;

function resetSketch(){
    loop();
}

function setup() {
    xwidth = Math.min(window.innerWidth,750);
    yheight = Math.min(window.innerHeight,410);
    Cannvass = createCanvas(xwidth,yheight);
    Cannvass.parent("canvas");
    noLoop();    
}


function draw() {
    background(51);
    seed = seed + 0.01; // slider.value();
    translate(width/2,height)
    len = 80;
    stroke(255);
    strokeWeight(3);
    branch(len);
}


function branch(len) {
    
    strokeWeight(3*(len/100));
    line(0, 0, 0, - len);
    translate(0,-len);
    angle = noise(seed + len)
    randomSeed(len*sqrt(99)*101);
    r1 = random();
    r2 = random();
    if (len > 6){
        
        if (r1 > 0.0 ){
            push();
            angle = noise(seed + len);
                rotate(angle);
                branch( len*d);
            pop();
        }
      
        if (r2 > 0.0){
            push();
            angle = noise(seed + len + 100);
                rotate(-angle);
                branch( len*d);
            pop();
        }
    } else{
        push();
        fill("#556B2F70");
        noStroke();
        ellipse(0, 0, 5, 5);
        pop();
    }
    
   
}










function saveIT(){
    saveCanvas(Cannvass, "Sketch",'jpg');
}
