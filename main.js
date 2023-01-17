

noseX = 0;
noseY = 0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;



function setup() {

video = createCapture(VIDEO);
video.size(550, 500);


canvas = createCanvas(550, 500);
canvas.position(560, 150);

poseNet = ml5.poseNet(video,modelLoaded);
}
 
function draw() {
background('#4169E1');
document.getElementById("square_side").innerHTML = "width and Hieght of a square will be = " + diffrence + "px"

fill('#ff7008');
stroke('#f90093') ;
square(noseX, noseY, diffrence);

}

function modelLoaded() 
{
    console.log('POSENET IS INITIALISED! ')
}




function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
  noseX= results[0].pose.nose.X;
  noseY= results[0].pose.nose.Y;
  console.log("noseX =" + noseX + "noseY = " + noseY);
  leftWristX = results[0].pose.leftWrist.X;
  rightWristX = results[0].pose.rightWrist.X;
  diffrence = floor(leftWristX - rightWristX);

  console.log("leftwristX = " + leftWristX + " rightwristX =  "  +  rightWristX +  "diffrence =" +    diffrence );
    }
}
