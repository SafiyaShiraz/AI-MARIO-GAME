img = "";
noseX = 0;
noseY = 0;
marioX = 370;
marioY= 370;


function preload() {
world_start = loadSound("world_start.wav");
mario_jump = loadSound("jump.wav");
mario_coin = loadSound("coin.wav");
mario_gameover = loadSound("gameover.wav");
mario_kick = loadSound("kick.wav");
mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
img = loadImage("mario05.png");
}

function setup() {
	createCanvas(1250, 336);
	canvas = createCanvas(1250,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

	instializeInSetup(mario);
}

function modelLoaded()
{
console.log("Model Loaded");
}





function draw() {
	game()

	background("#abbac8");

if(noseX < 300)
{
	marioX = marioX - 1;
}

if(noseX > 300)
{
	marioX= marioX + 1;
}



if(noseY > 150)
{
	noseY = noseY + 1;
}

if(noseY < 150)
{
	noseY= noseY - 1;
}

image(img, marioX, marioY, 40, 70);

}

function gotPoses(results) {
	
if(results.length > 0){
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("Nose X ="+noseX + "Nose Y =" + noseY);
}


}


function startGame()
{
	Game_Status = "Start";
	
	document.getElementById("status").innerHTML = "Game loading. . .";
}

