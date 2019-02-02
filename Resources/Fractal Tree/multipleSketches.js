

// Instance of anonymous class for 1st sketch 
var sketch1 = function(c){

    var angle =0;
    var seed = 0;
    var d = 0.75;
    var Cannvass;
  
    c.resetSketch = function(){
        c.loop();
    }
    
    c.setup= function() {
        xwidth = Math.min(window.innerWidth,750);
        yheight = Math.min(window.innerHeight,410);
        Cannvass = c.createCanvas(xwidth,yheight);
        c.noLoop();    
    }
    

    
     c.draw = function() {
        c.background(51);
        seed = seed + 0.01; // slider.value();
        c.translate(c.width/2,c.height)
        len = 80;
        c.stroke(255);
        c.strokeWeight(3);
        c.branch(len);
    }
    
    
    c.branch = function(len) {
        
        c.strokeWeight(3*(len/100));
        c.line(0, 0, 0, - len);
        c.translate(0,-len);
        angle = c.noise(seed + len)
        c.randomSeed(len*c.sqrt(99)*101);
        r1 = c.random();
        r2 = c.random();
        if (len > 8){
            
            if (r1 > 0.0){
                c.push();
                angle = c.noise(seed + len);
                    c.rotate(angle);
                    c.branch( len*d);
                c.pop();
            }
          
            if (r2 > 0.0){
                c.push();
                angle = c.noise(seed + len + 100);
                    c.rotate(-angle);
                    c.branch( len*d);
                c.pop();
            }
        } else{
            c.push();
            c.fill("#556B2F70");
            c.noStroke();
            c.ellipse(0, 0, 5, 5);
            c.pop();
        }
        
       
    }
    
    c.saveIT = function(){
        c.saveCanvas(Cannvass, "Sketch",'jpg');
    }
    
    }

var sk1 = new p5(sketch1, 'canvas');











// Instance of anonymous class for 2nd sketch 
var sketch2 = function(c){

    var angle;
    var d = 0.75;
    var sc ;
    var Cannvass;
    

    var slider 
    
    c.getSlider = function(){
        slider = document.getElementById("myRange");
        c.sc = 25/100;
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
           // console.log(this.value)
            c.sc = this.value/100;
        }

    }
   
    c.resetSketch = function(){
        c.loop();
    }
    
    c.setup= function() {
        xwidth = Math.min(window.innerWidth,710);
        yheight = Math.min(window.innerHeight,410);
        c.Cannvass = c.createCanvas(xwidth,yheight);
        c.getSlider();
       // c.noLoop();    
    }
    

    
     c.draw = function() {
        c.background(51);
        angle = c.sc*c.PI
        c.translate(c.width/2,c.height-60)
        len = 80;
        
        c.strokeWeight(10*(len/100));
        c.line(0, 60, 0, 0);

        c.stroke(255);
        c.strokeWeight(3);
        c.branch(len);
    }
    
    
    c.branch = function(len) {
        
        c.strokeWeight(10*(len/100));
        c.line(0, 0, 0, - len);
        c.translate(0,-len);
        c.randomSeed(len*c.sqrt(99)*101);
        r1 = c.random();
        r2 = c.random();
        if (len > 10){
            
            if (r1 > 0.0 ){
                c.push();
                    c.rotate(angle);
                    c.branch( len*d);
                c.pop();
            }
          
            if (r2 > 0.0){
                c.push();
                    c.rotate(-angle);
                    c.branch( len*d);
                c.pop();
            }
        } else{
            c.push();
            c.fill("#556B2FB0");
            c.noStroke();
            c.ellipse(0, 0, 8, 8);
            c.pop();
        }
        
       
    }
    
    c.saveIT = function(){
        c.saveCanvas(Cannvass, 'jpg');
    }
    
    }

var sk2 = new p5(sketch2, 'canvas2');

