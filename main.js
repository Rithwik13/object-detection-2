img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('Tv.jpeg');
}


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(img, 0, 0, 640, 420);

      if(status != "")
      {
        r = random(225);
        g = random(225);
        b = random(225);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
    
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}
function draw() {
    image(img, 0, 0, 380, 380);

        if(status !="")
        {
            for (i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status : Object Detected";
                document.getElementById("number_of_object").innerHTML = "Number of objects detected are : "+ objects.length;

                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
}