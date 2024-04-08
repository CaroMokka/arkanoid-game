const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");// webGL - BitmapRenderer

canvas.width = 440
canvas.height = 400

function draw() {
    console.log("hola mundo");
    window.requestAnimationFrame(draw);//60 frames x seg
}
//draw();