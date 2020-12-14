let video;
let poseNet;
let pose;
let skeleton;
let ctx;
let canvas;

let colorPositions = document.querySelectorAll('input[type="radio"]');
console.log(colorPositions);
for(el in colorPositions) {
    console.log(getOffset(colorPositions[el]));
}


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    background(240);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    canvas = document.querySelector('#drawCanvas');
    ctx = canvas.getContext('2d');
}

function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }

    if (pose) {

        ctx.fillRect(canvas.width - pose.rightWrist.x, pose.rightWrist.y, 10, 10);

    }



}

function modelLoaded() {
    console.log('ready');
}

function draw() {
    translate(width, 0); // move to far corner
    scale(-1.0, 1.0); // flip x-axis backwards
    image(video, 0, 0, width, height);

    if (pose) {

        let righteye = pose.rightEye;
        let lefteye = pose.leftEye;
        let distance = dist(righteye.x, righteye.y, lefteye.x, lefteye.y);

        fill(255, 0, 0);
        ellipse(pose.rightWrist.x, pose.rightWrist.y, distance / 2);

    }

}