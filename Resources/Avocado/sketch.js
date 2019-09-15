
var face = $("#cFace")[0]
var eyes = [$("#eyeL"), $("#eyeR")]
var shadow = $("#feGaussianBlur1212")
var Body = $("#cbody")
var allEyes = $("#allEyes")
var mouth = $("#mouth")

var rmax = 100;

let faceXG 
let faceYG

// Wait
var wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))
// await wait(2000)
// console.warn('done')

// On resolution change
function onScreenScale(){
     faceXG = face.getBoundingClientRect().left + 0.5 * face.getBoundingClientRect().width
     faceYG = face.getBoundingClientRect().top + 0.5 * face.getBoundingClientRect().height
     console.log("scr change")
}
onScreenScale();



// $("body")[0], face, document
document.addEventListener("mousemove", mouseUpdate)  
// face.addEventListener('mouseover', mouseOverFace);
document.addEventListener('mouseout', mouseOutFace);
// $("#cFace").css("trasnition", "all 1s")
// function mouseOverFace(){
//     face.addEventListener('onmousemove', mouse_position(event));
// }

$(window).resize(onScreenScale());

function mouseUpdate(e) {

    let dx = e.clientX - faceXG
    let dy = e.clientY - faceYG
    let mag = Math.sqrt(dx**2 + dy**2)
    if(rmax < mag){
        dx = dx*rmax/mag;
        dy = dy*rmax/mag;
    }
    
    // let dx = Math.max(-100, Math.min(e.clientX - faceXG, 100));
    // let dy = Math.max(-200, Math.min(e.clientY - faceYG, 200));
    $("#cFace").css("transform","translate(" + (dx/20) + "px," + (dy/20) + "px)")
    allEyes.css("transform", "translate(" + (dx / 40) + "px," + (dy / 40) + "px)")
    mouth.css("transform", "translate(" + (dx / 45) + "px," + (dy / 45) + "px)")
}

function mouseOutFace() {
    $("#cFace").css("transform", "translate(" + 0 + "px," + 0 + "px)")
    allEyes.css("transform", "translate(" + 0 + "px," + 0 + "px)")
    mouth.css("transform", "translate(" +0 + "px," + 0 + "px)")
}




// Eyes blink
async function blink(){

    let nsteps = 10;
    let ry = eyes[0].attr("ry");
    let dy = ry/nsteps;

    // Eye close loop
    for (let i = 0; i < nsteps; i++){
        eyes[0].attr("ry", ry - i * dy);
        eyes[1].attr("ry", ry - i * dy);
        await wait(20)
    }

    //ry = eyes[0].attr("ry");
    // Eye open loop
    for (let i = nsteps-1; i >=0 ; i--) {
        eyes[0].attr("ry", ry - i * dy);
        eyes[1].attr("ry", ry - i * dy);
        await wait(20)
    }
}

// Body float function
async function floatInAir() {

    let t = 0

    while(true) {
        shadow.attr("stdDeviation", 0.5 + 0.3*0.5*(1 + Math.sin(t)));
        Body.css("transform", "translate(" + 0 + "px," + (-3*Math.sin(t)) + "px)")
        t = t+0.05
        await wait(20)
    }
}
floatInAir();




( function loop() {
    var rand = Math.round(  Math.random() * 2000   ) + 500;
    setTimeout(async function() {
        await blink();
        loop();
    }, rand);
}());



// async function contBlink(){
//     await wait(2000*Math.random())
//     blink();
// }

// setInterval(contBlink, 2000);

// function onBodyClick(e){
//      console.log(e.clientX) ;
// }