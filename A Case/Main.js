let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let ship = new Ship();
let ball = new Ball();
let myInter = setInterval(blinkText,count);

function clear() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
}
function start() {
    showScore();
    clear();
    ship.draw();
    ship.collision();
    createBall();
    window.addEventListener('keydown',keyDown);
    bulletUpdate();
    checkBallCrash();
    checkShipCrash();
    requestAnimationFrame(start);
}

function keyDown(evt) {
    switch (evt.keyCode) {
        case 37:
            ship.x -= ship.speed;
            break;
        case 38:
            shoot();
            break;
        case 39:
            ship.x += ship.speed;
            break;
        case 32:
            clearInterval(myInter);
            start();
            break;
    }
}
start();