function preload(){
}

function setup(){
    canvas = createCanvas(500,450);
    canvas.position(550,150);
    video = createCapture(VIDEO);
    video.size(450,550)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);

}

function draw(){
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}