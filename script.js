const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");// webGL - BitmapRenderer

canvas.width = 448
canvas.height = 400

//Variables ball
const ballRadius = 10;

//position ball
let x = canvas.width / 2;
let y = canvas.height - 30;

//velocity ball
let positionX = 2;
let positionY = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {}
function drawBricks() {}

function collisionDetection() {}
function ballMovement() {
    x += positionX;
    y += positionY;
}
function paddleMovement() {}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//funtion root o madre
function draw() {
    clearCanvas();
    //Dibujando elemnetoa
    drawBall();
    // drawPaddle();
    // drawBricks();

    //colisiones y movimientos
    // collisionDetection();
     //ballMovement();
    // paddleMovement();

    window.requestAnimationFrame(draw);//60 frames x seg
}
draw();