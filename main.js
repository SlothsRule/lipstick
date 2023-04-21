function preload() {

}

function setup() {
   canvas = createCanvas(600,600);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

function gotPoses(results) {
if(results.length>0){
console.log(results);
console.log(results[0].pose.mouth.x,"this is the mouth x");
console.log(results[0].pose.mouth.y,"this is the mouth y");

}
}


function modelLoaded() {
    console.log("model is loaded");
}

function draw() {
    image(video,0,0,600,600)
}  

function take_snapshot() {
    save('myFilterImage.png');
}