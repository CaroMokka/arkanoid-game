const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");// webGL - BitmapRenderer

canvas.width = 448
canvas.height = 400

//VARIABLES PELOTA
const ballRadius = 10;
//position ball
let inicialPositionX = canvas.width / 2;
let inicialPositionY = canvas.height - 30;
//velocity ball
let movePositionX = 2;
let movePositionY = -2;

//VARIALES PALETA
const paddleWidth = 50;
const paddleHeight = 10;

let paddlePositionX = (canvas.width - paddleWidth) / 2;
let paddlePositionY = canvas.height - paddleHeight - 10;

let rightPressed = false;
let leftPressed = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(inicialPositionX, inicialPositionY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.fillStyle = "#09f";
    ctx.fillRect(paddlePositionX, paddlePositionY, paddleWidth, paddleHeight);
}
function drawBricks() {}

function collisionDetection() {}
function ballMovement() {
    if(
        inicialPositionX + movePositionX > canvas.width - ballRadius ||
        inicialPositionX + movePositionX < ballRadius
        ) 
    {
        movePositionX = - movePositionX;
    }

    if(inicialPositionY + movePositionY < ballRadius) 
    {
        movePositionY = -movePositionY;
    }

    if(inicialPositionY + movePositionY > canvas.height - ballRadius)
    {
        console.log("game over");
        document.location.reload();
    }
    //movemos la pelota
    inicialPositionX += movePositionX;
    inicialPositionY += movePositionY;
}
function paddleMovement() {}

function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function initEvents() {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    function keyDownHandler(e) {
        const { key } = e;
        if(key === "Right" || key === "ArrowRight") {
            rightPressed = true;
        } else if(key === "Left" || key === "ArrowLeft") {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        const { key } = e;
        if(key === "Right" || key === "ArrowRight") {
            rightPressed = false;
        } else if(key === "Left" || key === "ArrowLeft") {
            leftPressed = false;
        }
    }
}


//funtion root o madre
function draw() {
    cleanCanvas();
    //Dibujando elemnetoa
    drawBall();
    drawPaddle();
    // drawBricks();

    //colisiones y movimientos
    // collisionDetection();
     ballMovement();
    // paddleMovement();

    window.requestAnimationFrame(draw);//60 frames x seg
}
draw();