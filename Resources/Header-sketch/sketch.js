var Canvass;

var scribbles = [];
var nscribbles = 5;
var lkMat = [];

function preload() {

}



function setup() {
    Canvass = createCanvas(window.innerWidth,window.innerHeight);
    Canvass.position(innerWidth/2 - width/2, innerHeight/2- height/2);
    background(255);
   

    processImg();

    // frameRate(10)

    for (let i = 0; i < nscribbles; i++) {
        scribbles[i] = new Scribble(lkMat);
        scribbles[i].show();
    }

    setTimeout(function(){noLoop()}, 10000)
    //noLoop();
    
   
}


function processImg(){

    let row = []
    for(let x = 0; x < width; x++){
        let col = []
        for (let y = 0; y < height; y++){
            let val = (x - width)**2 + (y-height)**2;
            // if (x > width/2 & y > height/2) val = 50;
            col[y] = val;

        }
        row[x] = col
    }

    lkMat = row;

}








function draw() {

    background(255,255,255,100);

    // scribble.update();
    // scribble.show();

 for (let i = 0; i < nscribbles; i++) {
     scribbles[i].update()
     scribbles[i].show();
 }


}





function keyPressed() {
    
    if(keyCode == DELETE){
        console.log('Animation Stopped');
        noLoop();
    }
}



