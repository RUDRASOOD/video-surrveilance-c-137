video = "";
status1 = "";
video = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
    if(status1 !="")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.length; i++) {
            document.getElemenetbyId("status").innerHTML = "status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects Detected are : "+ objects.length;

            fill("white");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y );
            noFill();
            stroke("white");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

    function modelLoaded() {
    console.log("ModelLoaded!");
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
console.log(results);
objects = results;
}