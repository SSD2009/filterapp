nose_x=0;
nose_y=0;

function preload(){
    mimg=loadImage("moustache-removebg-preview.png");
   noseimg=loadImage("clownnose-removebg-preview.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised");
}

function draw(){
    image(video,0,0,300,300);
    image(mimg,nose_x,nose_y,50,50);
}

function takephoto(){
    save('filter.jpeg');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
      console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-20;
        nose_y=results[0].pose.nose.y;
    }
}