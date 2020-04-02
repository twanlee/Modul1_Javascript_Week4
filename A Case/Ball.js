const BALL_MAX = 25;
let balls = [];
let Ball = function () {
    this.x = Math.random() * canvas.width;
    this.y= 0;
    this.alive = true;
    this.radius = Math.floor(Math.random() * 40)+10;
    this.spdY = Math.floor(Math.random() * 2)+6;
    this.getRandomHex = function (){
        return Math.floor(Math.random()*255);
    }
    this.getRandomColor = function (){
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }
    this.draw = function () {

        let color = this.getRandomColor();
        ctx.beginPath();
        ctx.fillStyle = color;
        //ctx.strokeStyle = 'gray';
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        //ctx.stroke();
        ctx.fill();
    }
    this.move = function () {
        this.y += this.spdY;
    }
    this.collisionBall = function () {
        if(this.y + this.radius >= canvas.height || this.y + this.radius <=0){
            this.spdY =- this.spdY;
        }
    }
//     this.create = function () {
//         for(let i =0; i < BALL_MAX; i++) {
//             balls.push(new Ball());
//             balls[i].draw();
//             balls[i].move();
//             balls[i].checkCollision();
//         }
//     }
}
    function  createBall() {
        for (let i = 0; i < BALL_MAX; i++) {
            balls.push(new Ball());
            balls[i].draw();
            balls[i].move();
            balls[i].collisionBall();
        }
    }