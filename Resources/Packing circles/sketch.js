var circles;
var Cannvass;
var maxNC = 500;


function resetSketch(){
    loop();
    reSetup();
    
}

function reSetup(){
    colorMode(HSB, 100);
    background("#F2EFE6");
    circles = [];
}


function setup() {
    xwidth = Math.min(window.innerWidth,600);
    yheight = Math.min(window.innerHeight,400);
    Cannvass = createCanvas(xwidth,yheight);
    Cannvass.parent("canvas");
    reSetup();
    noLoop();
}

function draw() {
    background("#F2EFE6");
    // noLoop();
    if(frameCount % 10 == 0 ){
        if(circles.length < maxNC){
            circles.push(getCircle());
        }
    }

    for(let i = 0; i < circles.length; i++){
        circles[i].grow();
        circles[i].show();
    }

}

function getCircle(){
    isValid = false;
    startRad  = 3;
    while(!isValid){
        //console.log("Not found");
        var x = random(10,width-10);
        var y = random(10,height-10);
        
        var i;
        for (i = 0; i < circles.length; i++ ){
            circ = circles[i];
            if(dist(x,y,circ.x,circ.y)   - 5 < circ.radius + startRad){
                break;
            }
        }
        if(i == circles.length) { isValid = true; }
        
    }

    return new Circle(x,y);
}

function Circle(x,y){
    this.x = x;//random(10,width-10);
    this.y = y;//random(10,height-10);
    this.radius = 2;
    this.growing = true;
    this.col = color(random(100),random(50),random(50,100));


    this.grow = function(){
       if(this.growing){
            minx = min(this.x, width - this.x)
            miny = min(this.y,height-this.y);
            
            // Check if touching boundary
            if( minx -5 <= this.radius || miny -5 <= this.radius){
                this.growing = false;
                //console.log("Touched boundary");
                //break;
            }else {
                // Check the distance 
                for(let i = 0; i < circles.length;i++){
                    circ = circles[i];
                    if(this == circ){continue;}
                    if(dist(this.x,this.y,circ.x,circ.y) - 3 <= this.radius + circ.radius ){
                       // console.log("Touched a circle");
                        this.growing = false;
                        break;
                    }
                }
            }

        }


        if(this.growing) { this.radius += 2; }
    }


    this.show = function(){
        fill(this.col);
        noStroke(0);
        //strokeWeight(3);
        ellipse(this.x,this.y,2*this.radius,2*this.radius);
    }

}




function saveIT(){
    saveCanvas(Cannvass, "Sketch",'jpg');
}
