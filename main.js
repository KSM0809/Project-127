memories= "song_1.mp3";
dance_monkey= "song_2.mp3";

function preload(){
    loadSound('song_1.mp3');
    loadSound('song_2.mp3');
}

function setup(){
    canvas= createCanvas(500, 300);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 300);
}