function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
}
function draw(){
    circle(20, 20, 30)
    ellipse(320, 320, 50, 20)
    rect(60, 180, 55, 55, 20);
}
function take_snapshot(){
    save("meme.png");
}